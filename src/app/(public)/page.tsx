import Link from "next/link";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { OptionsAuth } from "@/components/ui/OptionsAuth";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, MessageCircle, TrendingUp } from "lucide-react";
import Logo from "@/components/ui/logo";

const GuestHomePage = async () => {
  const session = await auth();

  return (
    <div className='min-h-screen bg-white'>
      <header className='bg-white shadow-md'>
        <div className='container mx-auto px-4 py-6 flex items-center justify-between'>
          <Link
            href='/'
            className='flex items-center'
          >
            <Logo />
          </Link>

          {session && session.user ? (
            <OptionsAuth user={session.user} />
          ) : (
            <nav className='space-x-4'>
              <Button
                asChild
                variant='ghost'
                className='text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              >
                <Link href='/login'>Iniciar sesión</Link>
              </Button>
              <Button
                asChild
                className='bg-blue-900 hover:bg-blue-800 text-white'
              >
                <Link href='/register'>Crear cuenta</Link>
              </Button>
            </nav>
          )}
        </div>
      </header>

      <main className='container mx-auto px-4 py-12'>
        <section className='text-center mb-16'>
          <h1 className='text-5xl font-bold mb-4 text-gray-900'>
            Bienvenido a EduConnect
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            La red social que conecta estudiantes, profesores y profesionales
            para compartir conocimiento y recursos educativos.
          </p>
        </section>

        <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          <Card className='bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-900'>
            <CardHeader>
              <CardTitle className='flex items-center text-gray-900'>
                <BookOpen className='mr-2 text-blue-900' />
                Recursos Compartidos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-600'>
                Accede a una amplia biblioteca de recursos educativos
                compartidos por la comunidad.
              </p>
            </CardContent>
          </Card>
          <Card className='bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-900'>
            <CardHeader>
              <CardTitle className='flex items-center text-gray-900'>
                <Users className='mr-2 text-blue-900' />
                Conexiones Valiosas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-600'>
                Conéctate con estudiantes, profesores y profesionales de tu área
                de interés.
              </p>
            </CardContent>
          </Card>
          <Card className='bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-900'>
            <CardHeader>
              <CardTitle className='flex items-center text-gray-900'>
                <MessageCircle className='mr-2 text-blue-900' />
                Foros de Discusión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-600'>
                Participa en discusiones enriquecedoras sobre diversos temas
                educativos.
              </p>
            </CardContent>
          </Card>
          <Card className='bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-900'>
            <CardHeader>
              <CardTitle className='flex items-center text-gray-900'>
                <TrendingUp className='mr-2 text-blue-900' />
                Tendencias Educativas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-600'>
                Mantente al día con las últimas tendencias y noticias en el
                mundo de la educación.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className='text-center bg-gray-100 py-16 rounded-lg shadow-inner'>
          <h2 className='text-3xl font-bold mb-4 text-gray-900'>
            ¿Listo para empezar?
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Únete a nuestra comunidad educativa y comienza a expandir tus
            horizontes.
          </p>
          <Button
            asChild
            size='lg'
            className='bg-blue-900 hover:bg-blue-800 text-white text-lg px-8 py-3'
          >
            <Link href='/register'>Crear cuenta gratis</Link>
          </Button>
        </section>
      </main>

      <footer className='bg-gray-900 text-white mt-16'>
        <div className='container mx-auto px-4 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <Logo className='mb-4' />
              <p className='text-gray-300'>
                Conectando mentes curiosas y compartiendo conocimiento para un
                futuro mejor.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-4'>Enlaces rápidos</h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='#'
                    className='text-gray-300 hover:text-white'
                  >
                    Acerca de nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-300 hover:text-white'
                  >
                    Términos de servicio
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-300 hover:text-white'
                  >
                    Política de privacidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-4'>Contáctanos</h3>
              <p className='text-gray-300'>info@educonnect.com</p>
            </div>
          </div>
          <div className='mt-8 pt-8 border-t border-gray-800 text-center text-gray-400'>
            <p>&copy; 2024 EduConnect. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default GuestHomePage;
