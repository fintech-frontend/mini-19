"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createCart, deleteCart } from "@/lib/api/carts";
import { addCartItem, listCartItems, removeCartItem, updateCartItemQuantity } from "@/lib/api/cartItems";
import { getProduct } from "@/lib/api/products";
import { ApiError } from "@/lib/api/errors";

/**
 * Корзина теперь backed настоящим backend (`/carts/` + `/cart-items/`) вместо
 * объекта в памяти. Публичный интерфейс контекста (cart, addToCart, setCartQty,
 * removeFromCart, clearCart, favoriteIds/compareIds и т.д.) намеренно НЕ менялся —
 * им пользуются компоненты, которые параллельно пишет другой агент (ProductCard,
 * навбар и т.п.), и все они по-прежнему вызывают addToCart(productId) синхронно
 * из onClick, не дожидаясь промиса.
 *
 * Внутри мы храним id серверной корзины (persisted в localStorage под ключом
 * `mini19:cart_id`) и карту productId -> {cartItemId, quantity}, из которой на
 * лету собирается публичный `cart: Record<string, number>`, как и раньше.
 *
 * Избранное и сравнение остаются чисто клиентским состоянием (Set<string>) — у
 * backend нет ни одного документированного эндпоинта для wishlist/сравнения.
 */

const CART_ID_STORAGE_KEY = "mini19:cart_id";

interface CartItemState {
  cartItemId: number;
  quantity: number;
}

type CartItemsState = Record<string, CartItemState>;

interface ShopContextValue {
  cart: Record<string, number>;
  cartCount: number;
  favoritesCount: number;
  compareCount: number;
  favoriteIds: string[];
  compareIds: string[];
  addToCart: (productId: string) => void;
  /** Меняет количество; qty <= 0 убирает позицию из корзины. */
  setCartQty: (productId: string, qty: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  isFavorite: (productId: string) => boolean;
  toggleFavorite: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  toggleCompare: (productId: string) => void;
  /** true, пока корзина ещё не гидратирована из localStorage/бэкенда после монтирования. */
  cartLoading: boolean;
}

const ShopContext = createContext<ShopContextValue | null>(null);

function describeError(err: unknown): string {
  if (err instanceof ApiError) return err.message;
  if (err instanceof Error) return err.message;
  return String(err);
}

function readStoredCartId(): number | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CART_ID_STORAGE_KEY);
    if (!raw) return null;
    const id = Number(raw);
    return Number.isFinite(id) ? id : null;
  } catch {
    return null;
  }
}

function persistCartId(id: number | null) {
  if (typeof window === "undefined") return;
  try {
    if (id == null) {
      window.localStorage.removeItem(CART_ID_STORAGE_KEY);
    } else {
      window.localStorage.setItem(CART_ID_STORAGE_KEY, String(id));
    }
  } catch {
    // localStorage может быть недоступен (приватный режим и т.п.) — не критично.
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItemsState>({});
  const [cartLoading, setCartLoading] = useState(true);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [compare, setCompare] = useState<Set<string>>(new Set());

  // Рефы хранят "последнее известное" состояние, чтобы асинхронные обработчики
  // (addToCart и т.д.), запускаемые из синхронных onClick, всегда читали
  // актуальные значения, а не замкнутые в момент вызова.
  const cartIdRef = useRef<number | null>(null);
  const cartItemsRef = useRef<CartItemsState>({});
  const hydrationRef = useRef<Promise<void> | null>(null);

  const applyCartId = useCallback((next: number | null) => {
    cartIdRef.current = next;
  }, []);

  const applyCartItems = useCallback((next: CartItemsState) => {
    cartItemsRef.current = next;
    setCartItems(next);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hydrate = async () => {
      const storedId = readStoredCartId();
      if (storedId == null) return;
      try {
        // Позиции корзины читаем документированным списком GET /cart-items с отбором
        // по id корзины — отдельного эндпоинта "получить корзину по id" в документации нет.
        const items = await listCartItems(storedId);
        const nextItems: CartItemsState = {};
        for (const item of items) {
          nextItems[String(item.product.id)] = { cartItemId: item.id, quantity: item.quantity };
        }
        applyCartId(storedId);
        applyCartItems(nextItems);
      } catch (err) {
        console.error("Не удалось загрузить сохранённую корзину, начинаем с пустой:", describeError(err));
        persistCartId(null);
        applyCartId(null);
        applyCartItems({});
      }
    };

    hydrationRef.current = hydrate().finally(() => setCartLoading(false));
  }, [applyCartId, applyCartItems]);

  const waitForHydration = useCallback(async () => {
    if (hydrationRef.current) {
      await hydrationRef.current;
    }
  }, []);

  const removeFromCart = useCallback(
    (productId: string) => {
      void (async () => {
        await waitForHydration();
        const existing = cartItemsRef.current[productId];
        if (!existing) return;
        const previous = cartItemsRef.current;
        const next = { ...previous };
        delete next[productId];
        applyCartItems(next);
        try {
          await removeCartItem(existing.cartItemId);
        } catch (err) {
          applyCartItems(previous);
          console.error("Не удалось удалить товар из корзины:", describeError(err));
        }
      })();
    },
    [applyCartItems, waitForHydration]
  );

  const addToCart = useCallback(
    (productId: string) => {
      void (async () => {
        await waitForHydration();
        try {
          let id = cartIdRef.current;
          if (id == null) {
            const newCart = await createCart();
            id = newCart.id;
            applyCartId(id);
            persistCartId(id);
          }

          const existing = cartItemsRef.current[productId];
          if (existing) {
            const previousQty = existing.quantity;
            const nextQty = previousQty + 1;
            applyCartItems({ ...cartItemsRef.current, [productId]: { ...existing, quantity: nextQty } });
            try {
              await updateCartItemQuantity(existing.cartItemId, nextQty);
            } catch (err) {
              applyCartItems({ ...cartItemsRef.current, [productId]: { ...existing, quantity: previousQty } });
              console.error("Не удалось увеличить количество товара в корзине:", describeError(err));
            }
            return;
          }

          const product = await getProduct(Number(productId));
          const price = Number.parseFloat(product.price);
          const created = await addCartItem({
            cart: id,
            product_id: Number(productId),
            price: Number.isFinite(price) ? price : 0,
            quantity: 1,
          });
          applyCartItems({
            ...cartItemsRef.current,
            [productId]: { cartItemId: created.id, quantity: created.quantity },
          });
        } catch (err) {
          // Сохранённая корзина могла быть удалена на сервере: тогда POST /cart-items/
          // отвечает 400 ("Invalid pk ... object does not exist"). Сбрасываем id, чтобы
          // следующее добавление создало новую корзину.
          if (err instanceof ApiError && err.status === 400) {
            persistCartId(null);
            applyCartId(null);
          }
          console.error("Не удалось добавить товар в корзину:", describeError(err));
        }
      })();
    },
    [applyCartId, applyCartItems, waitForHydration]
  );

  const setCartQty = useCallback(
    (productId: string, qty: number) => {
      if (qty <= 0) {
        removeFromCart(productId);
        return;
      }
      void (async () => {
        await waitForHydration();
        const existing = cartItemsRef.current[productId];
        if (!existing) return;
        const previousQty = existing.quantity;
        applyCartItems({ ...cartItemsRef.current, [productId]: { ...existing, quantity: qty } });
        try {
          await updateCartItemQuantity(existing.cartItemId, qty);
        } catch (err) {
          applyCartItems({ ...cartItemsRef.current, [productId]: { ...existing, quantity: previousQty } });
          console.error("Не удалось изменить количество товара в корзине:", describeError(err));
        }
      })();
    },
    [applyCartItems, removeFromCart, waitForHydration]
  );

  const clearCart = useCallback(() => {
    void (async () => {
      await waitForHydration();
      const id = cartIdRef.current;
      applyCartItems({});
      if (id != null) {
        applyCartId(null);
        persistCartId(null);
        try {
          await deleteCart(id);
        } catch (err) {
          console.error("Не удалось удалить корзину на сервере:", describeError(err));
        }
      }
    })();
  }, [applyCartId, applyCartItems, waitForHydration]);

  const toggleFavorite = useCallback((productId: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
      }
      return next;
    });
  }, []);

  const toggleCompare = useCallback((productId: string) => {
    setCompare((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
      }
      return next;
    });
  }, []);

  const cart = useMemo(() => {
    const result: Record<string, number> = {};
    for (const [productId, info] of Object.entries(cartItems)) {
      result[productId] = info.quantity;
    }
    return result;
  }, [cartItems]);

  const value = useMemo<ShopContextValue>(
    () => ({
      cart,
      cartCount: Object.values(cart).reduce((sum, qty) => sum + qty, 0),
      favoritesCount: favorites.size,
      compareCount: compare.size,
      favoriteIds: Array.from(favorites),
      compareIds: Array.from(compare),
      addToCart,
      setCartQty,
      removeFromCart,
      clearCart,
      isFavorite: (productId: string) => favorites.has(productId),
      toggleFavorite,
      isInCompare: (productId: string) => compare.has(productId),
      toggleCompare,
      cartLoading,
    }),
    [
      cart,
      favorites,
      compare,
      addToCart,
      setCartQty,
      removeFromCart,
      clearCart,
      toggleFavorite,
      toggleCompare,
      cartLoading,
    ]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return ctx;
}
