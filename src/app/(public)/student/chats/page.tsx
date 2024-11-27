"use client";

import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/(public)/student/_components/app-sidebar";
import Header from "@/app/(public)/student/_components/header";
import SearchBar from "../_components/SearchBar";
import UserList from "../_components/UserList";
import ChatWindow from "../_components/ChatWindow"; // Importa el nuevo componente

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <SidebarProvider>
      <div className="h-screen w-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Contenedor principal */}
        <div className="flex flex-1 pt-[70px]">
          {/* Sidebar */}
          <div
            className={`transition-all duration-300 ${
              isSidebarCollapsed ? "w-16" : "w-64"
            }`}
          >
            <AppSidebar
              isCollapsed={isSidebarCollapsed}
              onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />
          </div>

          {/* Main Content */}
          <main className="flex-1 text-WhiteCalido p-8">
            <div className="flex h-full">
              {/* Sección izquierda: Búsqueda y lista de usuarios */}
              <div className="flex flex-col w-full max-w-md space-y-4">
                <SearchBar placeholder="Buscar usuario..." />
                <UserList />
              </div>

              {/* Sección derecha: ChatWindow */}
              <div className="flex-1">
                <ChatWindow />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
