"use client";
import Header from "@/components/ui/Header";
import StepIndicator from "@/app/(auth)/register/_components/StepIndicator";
import InterestSelection from "../_components/InterestSelection";

export default function paso3() {
  return (
    <>
      <Header />
      <main className='w-full min-h-screen flex flex-col items-center justify-center text-WhiteCalido mt-[70px]'>
        {/* Título */}
        <h1 className='text-[40px] font-bold font-leaguespartan text-center mb-8'>
          Seleccione sus campos de interés
        </h1>
        <div className='flex flex-col items-center md:flex-row md:justify-center gap-8'>
          {/* Indicador de pasos */}
          <div className='mb-8 md:mb-0'>
            <StepIndicator currentStep={3} />
          </div>
          {/* Contenedor de los planes */}
          <div className='flex flex-col md:flex-row justify-center gap-8'>
            <InterestSelection />
          </div>
        </div>
      </main>
    </>
  );
}
