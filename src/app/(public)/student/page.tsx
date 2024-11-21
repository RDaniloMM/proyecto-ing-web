"use client";

import React, { useRef } from "react";
import {
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserGroupIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const EduConnect: React.FC = () => {
  // Refs para los carruseles
  const recommendationsRef = useRef<HTMLDivElement>(null);
  const recentResourcesRef = useRef<HTMLDivElement>(null);

  // Función para desplazar horizontalmente el carrusel
  const scrollCarousel = (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen text-white">
      {/* Header */}
      <header className="w-full bg-BlackCalido h-20 flex items-center justify-between px-4 md:px-8">
        <h1 className="text-lg md:text-2xl font-bold">EDUCONNECT</h1>
        <div className="flex items-center space-x-4">
          <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">
            <HomeIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-700 rounded-full"></div>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/5 bg-BlackCalido p-4 md:p-6 flex flex-col">
          {/* Perfil */}
          <div className="mb-6 md:mb-10">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-700 mb-4 flex items-center justify-center"></div>
              <h2 className="text-center text-sm md:text-lg font-semibold">
                Edson Josué P. Ch.
              </h2>
              <p className="text-xs md:text-sm text-gray-400">UNJBG</p>
            </div>
          </div>
          {/* Menú */}
          <nav className="flex-1">
            <ul className="space-y-3 md:space-y-4">
              {[
                { name: "Inicio", icon: <HomeIcon className="w-5 h-5 md:w-6 md:h-6" /> },
                {
                  name: "Chats",
                  icon: (
                    <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                  ),
                },
                {
                  name: "Grupos y comunidades",
                  icon: (
                    <UserGroupIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                  ),
                },
                {
                  name: "Foros de discusión",
                  icon: (
                    <DocumentTextIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                  ),
                },
                {
                  name: "Recursos educativos",
                  icon: (
                    <AcademicCapIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                  ),
                },
                {
                  name: "Cursos",
                  icon: <BookOpenIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />,
                },
                {
                  name: "Mis clases",
                  icon: <AcademicCapIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />,
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 md:space-x-4 p-2 md:p-3 hover:bg-gray-700 rounded-lg"
                >
                  <span>{item.icon}</span>
                  <span className="text-xs md:text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {/* Recomendaciones */}
          <section className="relative mb-12">
            <h2 className="text-3xl font-bold font-leaguespartan mb-4 md:mb-6">
              RECOMENDACIONES
            </h2>
            <div className="relative">
              {/* Flechas */}
              <button
                onClick={() => scrollCarousel(recommendationsRef, "left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full z-10"
              >
                <ChevronLeftIcon className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => scrollCarousel(recommendationsRef, "right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full z-10"
              >
                <ChevronRightIcon className="w-6 h-6 text-white" />
              </button>
              {/* Carrusel */}
              <div
                ref={recommendationsRef}
                className="flex space-x-4 overflow-hidden p-2"
              >
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="bg-BlackCalido rounded-lg p-4 flex-shrink-0 w-60"
                    >
                      <div className="w-full h-32 bg-gray-600 rounded mb-4"></div>
                      <h3 className="text-sm md:text-lg font-medium">
                        Título del recurso
                      </h3>
                      <p className="text-xs md:text-sm text-gray-400">
                        Descripción breve
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* Recursos Recientes */}
          <section className="relative">
            <h2 className="text-3xl font-bold font-leaguespartan mb-4 md:mb-6">
              RECURSOS RECIENTES
            </h2>
            <div className="relative">
              {/* Flechas */}
              <button
                onClick={() => scrollCarousel(recentResourcesRef, "left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full z-10"
              >
                <ChevronLeftIcon className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => scrollCarousel(recentResourcesRef, "right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full z-10"
              >
                <ChevronRightIcon className="w-6 h-6 text-white" />
              </button>
              {/* Carrusel */}
              <div
                ref={recentResourcesRef}
                className="flex space-x-4 overflow-hidden p-2"
              >
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="bg-BlackCalido rounded-lg p-4 flex-shrink-0 w-60"
                    >
                      <div className="w-full h-32 bg-gray-600 rounded mb-4"></div>
                      <h3 className="text-sm md:text-lg font-medium">
                        Título del recurso
                      </h3>
                      <p className="text-xs md:text-sm text-gray-400">
                        Descripción breve
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default EduConnect;
