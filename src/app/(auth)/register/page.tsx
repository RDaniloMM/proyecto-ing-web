import Header from '@/components/ui/Header';
import StepIndicator from '@/app/(auth)/register/_components/StepIndicator';
import Form from '@/app/(auth)/register/_components/Form';

export default function paso2() {
  return (
    <>
      <Header />
      <main
        className="w-full min-h-screen flex flex-col items-center justify-center text-WhiteCalido mt-[70px]"
      >
        {/* Título */}
        <h1 className="text-[40px] font-bold font-leaguespartan text-center mb-8">Ingresa tus datos</h1>

        <div className="flex flex-col items-center md:flex-row md:justify-center gap-8">
          {/* Indicador de pasos */}
          <div className="mb-8 md:mb-0">
            <StepIndicator currentStep={2} />
          </div>

          {/* Contenedor de los planes */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <Form />
          </div>
        </div>
      </main>
    </>
  );
}
