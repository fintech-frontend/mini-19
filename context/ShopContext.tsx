"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

interface ShopContextValue {
  cart: Record<string, number>;
  cartCount: number;
  favoritesCount: number;
  compareCount: number;
  addToCart: (productId: string) => void;
  /** Меняет количество; qty <= 0 убирает позицию из корзины. */
  setCartQty: (productId: string, qty: number) => void;
  removeFromCart: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  toggleFavorite: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  toggleCompare: (productId: string) => void;
}

const ShopContext = createContext<ShopContextValue | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [compare, setCompare] = useState<Set<string>>(new Set());

  const addToCart = useCallback((productId: string) => {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] ?? 0) + 1 }));
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  }, []);

  const setCartQty = useCallback(
    (productId: string, qty: number) => {
      if (qty <= 0) {
        removeFromCart(productId);
        return;
      }
      setCart((prev) => ({ ...prev, [productId]: qty }));
    },
    [removeFromCart]
  );

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

  const value = useMemo<ShopContextValue>(
    () => ({
      cart,
      cartCount: Object.values(cart).reduce((sum, qty) => sum + qty, 0),
      favoritesCount: favorites.size,
      compareCount: compare.size,
      addToCart,
      setCartQty,
      removeFromCart,
      isFavorite: (productId: string) => favorites.has(productId),
      toggleFavorite,
      isInCompare: (productId: string) => compare.has(productId),
      toggleCompare,
    }),
    [cart, favorites, compare, addToCart, setCartQty, removeFromCart, toggleFavorite, toggleCompare]
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
