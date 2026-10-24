"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";

/** Уже вошедшего покупателя со страниц входа/регистрации отправляем в кабинет. */
export function RedirectIfLoggedIn({ to = "/account" }: { to?: string }) {
  const loggedIn = useIsLoggedIn();
  const router = useRouter();
  useEffect(() => {
    if (loggedIn) router.replace(to);
  }, [loggedIn, router, to]);
  return null;
}
