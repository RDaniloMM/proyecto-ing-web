"use client";

import { registerSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { registerAction } from "@/actions/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

const RegisterForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Recuperar el plan seleccionado de los parámetros de la URL
  const selectedPlan = searchParams.get("plan");

  // Determinar el rol basado en el plan
  const rol = selectedPlan === "Plan Estudiante" ? "Estudiante" : "Docente";

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      rol: rol,
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setError(null);
    startTransition(async () => {
      const response = await registerAction(values); // Enviar datos al backend
      if (response.error) {
        setError(response.error);
      } else {
        router.push("/register/paso3"); // Redirigir al paso 3
      }
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      method='post' // Cambiar el método a POST
      className='text-WhiteCalido max-w-4xl mx-auto p-6 space-y-6 rounded-lg'
    >
      <h2 className='text-xl font-bold text-center mb-4'>
        Rol seleccionado: <span className='text-green-500'>{rol}</span>
      </h2>

      {/* Campo Nombres */}
      <div className='flex flex-col'>
        <label
          htmlFor='name'
          className='block text-sm font-bold mb-2 text-GrayCalido'
        >
          Nombres:
        </label>
        <input
          {...form.register("name")}
          type='text'
          id='name'
          placeholder='John'
          disabled={isPending}
          className='w-full bg-BlackCalido text-sm border border-BorderColor rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-GrayCalido'
        />
      </div>

      {/* Campo Email */}
      <div className='flex flex-col'>
        <label
          htmlFor='email'
          className='block text-sm font-bold mb-2 text-GrayCalido'
        >
          Correo Electrónico:
        </label>
        <input
          {...form.register("email")}
          type='email'
          id='email'
          placeholder='JohnDoe@gmail.com'
          disabled={isPending}
          className='w-full bg-BlackCalido text-sm border border-BorderColor rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-GrayCalido'
        />
      </div>

      {/* Campo Contraseña */}
      <div className='flex flex-col'>
        <label
          htmlFor='password'
          className='block text-sm font-bold mb-2 text-GrayCalido'
        >
          Contraseña:
        </label>
        <input
          {...form.register("password")}
          type='password'
          id='password'
          placeholder='*******'
          disabled={isPending}
          className='w-full bg-BlackCalido text-sm border border-BorderColor rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-GrayCalido'
        />
      </div>

      {/* Campo Confirmar Contraseña */}
      <div className='flex flex-col'>
        <label
          htmlFor='confirmPassword'
          className='block text-sm font-bold mb-2 text-GrayCalido'
        >
          Confirmar Contraseña:
        </label>
        <input
          {...form.register("confirmPassword")}
          type='password'
          id='confirmPassword'
          placeholder='*******'
          disabled={isPending}
          className='w-full bg-BlackCalido text-sm border border-BorderColor rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-GrayCalido'
        />
      </div>

      {/* Mensaje de error */}
      {error && <p className='text-sm text-red-500'>{error}</p>}

      {/* Botón de Registro */}
      <div>
        <button
          type='submit'
          disabled={isPending}
          className='w-full bg-WhiteVariacion text-BlackOscuro font-leaguespartan font-semibold border border-BorderColor rounded-lg p-2 hover:bg-gray-300'
        >
          Registrar datos
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
