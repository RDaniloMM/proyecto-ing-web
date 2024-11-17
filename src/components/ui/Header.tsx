// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-BlackCalido w-full h-[70px] fixed top-0 left-0 z-50 border-b border-BorderColor">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-WhiteCalido font-bold font-leaguespartan pl-2.5">
          <Link href="/">EDUCONNECT</Link>
        </div>

        {/* Menú principal (oculto en pantallas pequeñas) */}
        <nav className="hidden md:flex font-[400] text-GrayCalido space-x-4 sm:text-[4px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
          <Link
            href="/recursos"
            className="relative hover:text-WhiteCalido pb-1 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-WhiteCalido after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0"
          >
            Recursos Académicos
          </Link>
          <Link
            href="/cursos"
            className="relative hover:text-WhiteCalido pb-1 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-WhiteCalido after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0"
          >
            Cursos
          </Link>
          <Link
            href="/foros"
            className="relative hover:text-WhiteCalido pb-1 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-WhiteCalido after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0"
          >
            Foros de discusión
          </Link>
        </nav>

        {/* Botones de autenticación */}
      <div className="hidden md:flex items-center text-WhiteCalido space-x-4 sm:text-[4px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
        <Link href="/login" className="hover:text-gray-300">
            Iniciar sesión
          </Link>
          <Link
            href="/register"
            className="bg-VioletCalido px-4 py-2 rounded-lg hover:bg-indigo-500"
          >
            Regístrate
          </Link>
        </div>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-300 hover:text-white focus:outline-none">
            <svg
              className="h-6 w-6 sm:h-8 sm:w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
