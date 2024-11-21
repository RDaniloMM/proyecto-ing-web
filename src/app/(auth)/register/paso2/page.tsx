import Header from "@/components/ui/Header";
import StepIndicator from "@/app/(auth)/register/_components/StepIndicator";
import Form from "@/app/(auth)/register/_components/Form";

export default function Paso2() {
  return (
    <>
      <Header />
      <main className='w-full min-h-screen flex flex-col items-center justify-center text-WhiteCalido mt-[70px]'>
        {/* Título */}
        <h1 className='text-[40px] font-bold font-leaguespartan text-center mb-8'>
          Ingresa tus datos
        </h1>
        <div className='w-full max-w-6xl flex flex-col items-center md:flex-row md:justify-center gap-8 px-4'>
          {/* Indicador de pasos */}
          <div className='mb-8 md:mb-0'>
            <StepIndicator currentStep={2} />
          </div>
          {/* Contenedor del formulario */}
          <div className='w-full flex justify-center'>
            <div className='w-full max-w-4xl'>
              <Form />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
