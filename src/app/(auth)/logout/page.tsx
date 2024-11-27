"use client";
import { useEffect } from "react";
import { logoutAction } from "@/actions/auth";

export default function LogoutPage() {
  useEffect(() => {
    // Llamar a la acción de logout y redirigir
    logoutAction();
  }, []);

  return null; // No necesitamos renderizar nada
}
