"use client";
import { logoutAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";

export default function LogoutPage() {
  return logoutAction();
}
