"use client";

import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/(public)/student/_components/app-sidebar";
import Header from "@/app/(public)/student/_components/header";
import Carousel from "@/app/(public)/student/_components/carousel"; // Importa el componente carrusel

export default function Layout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const recommendations = [
    { id: 1, title: "Informe de LAB-01", description: "Ing. Web y Aplicaciones Móviles" },
    { id: 2, title: "Ejercicios de Simulación de Sistemas", description: "Simulación de Sistemas" },
    { id: 3, title: "Creación de Videojuegos con Unity", description: "Realidad Virtual" },
    { id: 4, title: "Transformaciones elementales de objetos 3D", description: "Diseño Asistido por Computadora" },
    { id: 5, title: "Algoritmos de Cifrado", description: "Seguridad Informática" },
    { id: 6, title: "Creación de proyectos innovadores", description: "Taller de Emprendimiento e Innovación" },
  ];

  const recentResources = [
    { id: 1, title: "Informe de LAB-02", description: "Ing. Web y Aplicaciones Móviles" },
    { id: 2, title: "Taller de Ciberseguridad", description: "Ciberseguridad" },
    { id: 3, title: "Modelado de Animaciones 3D", description: "Diseño Asistido por Computadora" },
    { id: 4, title: "Introducción a Python", description: "Lenguajes de Programación" },
    { id: 5, title: "Optimización de Algoritmos", description: "Estructuras de Datos" },
    { id: 6, title: "Taller de Big Data", description: "Análisis de Datos" },
  ];

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

          {/* Main Content: Solo Carrusel */}
          <main className="flex-1 text-WhiteCalido p-8">
            <Carousel title="RECOMENDACIONES" items={recommendations} />
            <Carousel title="RECURSOS RECIENTES" items={recentResources} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
