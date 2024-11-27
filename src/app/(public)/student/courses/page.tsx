"use client";

import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/(public)/student/_components/app-sidebar";
import Header from "@/app/(public)/student/_components/header";
import SearchBar from "../_components/SearchBar";

// Define los items que deseas mostrar
const items = [
  { id: 1, title: "Item 1", description: "Descripción del item 1" },
  { id: 2, title: "Item 2", description: "Descripción del item 2" },
  { id: 3, title: "Item 3", description: "Descripción del item 3" },
  { id: 4, title: "Item 4", description: "Descripción del item 4" },
  { id: 5, title: "Item 5", description: "Descripción del item 5" },
  { id: 6, title: "Item 6", description: "Descripción del item 6" },
  { id: 7, title: "Item 7", description: "Descripción del item 7" },
  { id: 8, title: "Item 8", description: "Descripción del item 8" },
  // Agrega más items si es necesario
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <SidebarProvider>
      <div className="h-screen w-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Contenedor principal */}
        <div className="flex flex-1 pt-[70px]">
          {/* Sidebar */}
          <div
            className={`transition-all duration-300 ${isSidebarCollapsed ? "w-16" : "w-64"}`}
          >
            <AppSidebar
              isCollapsed={isSidebarCollapsed}
              onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />
          </div>

          {/* Main Content */}
          <main className="flex-1 text-WhiteCalido p-8">
            <div className="flex h-full flex-col">
              {/* Sección izquierda: Búsqueda */}
              <div className="flex flex-col w-full max-w-md space-y-4">
                <SearchBar placeholder="Buscar cursos..." />
              </div>

              {/* Sección de los Items */}
              <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-BlackCalido rounded-lg p-4 flex flex-col justify-between w-[250px] h-[250px]"
                  >
                    <div className="w-full h-[150px] bg-GrayCalido rounded-lg m-0"></div>
                    <h3 className="text-sm font-bold break-words whitespace-normal m-0">{item.title}</h3>
                    <p className="text-xs text-GrayCalido truncate m-0">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
