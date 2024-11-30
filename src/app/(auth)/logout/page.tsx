"use client";
import { useEffect } from "react";
import { logoutAction } from "@/actions/auth";

export default function LogoutPage() {
  useEffect(() => {
    logoutAction();
  }, []);

  return null; // No necesitamos renderizar nada
}
