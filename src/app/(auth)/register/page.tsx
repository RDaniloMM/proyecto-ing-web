"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/ui/Header";
import StepIndicator from "@/app/(auth)/register/_components/StepIndicator";
import PlanCard from "@/app/(auth)/register/_components/PlanCard";

export default function HomePage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelection = (plan: string) => {
    setSelectedPlan(plan); // Almacena el plan seleccionado temporalmente
    router.push(`/register/paso2?plan=${encodeURIComponent(plan)}`); // Navega al paso 2 con el plan seleccionado
  };

  return (
    <>
      <Header />
      <main className='w-full min-h-screen flex flex-col items-center justify-center text-WhiteCalido mt-[70px]'>
        {/* Título */}
        <h1 className='text-[40px] font-bold font-leaguespartan text-center mb-8'>
          Selecciona un plan
        </h1>

        <div className='w-full max-w-6xl flex flex-col items-center md:flex-row md:justify-center gap-8 px-4'>
          {/* Indicador de pasos */}
          <div className='mb-8 md:mb-0'>
            <StepIndicator currentStep={1} />
          </div>

          {/* Contenedor de los planes */}
          <div className='w-full flex flex-col md:flex-row justify-center gap-8'>
            <PlanCard
              title='Plan Estudiante'
              requirements='Ninguno'
              benefits={[
                "Acceso a recursos académicos",
                "Oportunidad de explorar cursos",
                "Participación en foros de discusión",
                "Conexión con grupos y comunidades",
              ]}
              onSelectPlan={handlePlanSelection} // Callback para manejar la selección
            />
            <PlanCard
              title='Plan Docente'
              requirements='Correo institucional'
              benefits={[
                "Acceso a recursos académicos",
                "Oportunidad de explorar cursos",
                "Participación en foros de discusión",
                "Conexión con grupos y comunidades",
                "Oportunidad de crear y gestionar cursos",
              ]}
              onSelectPlan={handlePlanSelection} // Callback para manejar la selección
            />
          </div>
        </div>
      </main>
    </>
  );
}
