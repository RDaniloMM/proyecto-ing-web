"use client";

import React from "react";
import Carousel from "@/app/(public)/student/_components/carousel";

export default function HomePage() {
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
    <div className="p-4">
      <Carousel title="RECOMENDACIONES" items={recommendations} />
      <Carousel title="RECURSOS RECIENTES" items={recentResources} />
    </div>
  );
}
