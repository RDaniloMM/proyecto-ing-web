import React from "react";

const Form: React.FC = () => {
  return (
    <form className=" text-WhiteCalido max-w-md mx-auto p-6 space-y-6 rounded-lg">
      {/* Campo Nombres */}
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex-1">
          <label
            htmlFor="firstName"
            className="block text-sm font-bold mb-2 text-GrayCalido"
          >
            Nombres:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            className="w-full bg-BlackCalido text-sm border border-BorderColor rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-GrayCalido"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="lastName"
            className="block text-sm font-bold mb-2 text-GrayCalido"
          >
            Apellidos:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            className="w-full bg-BlackCalido text-sm border border-BorderColor rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-GrayCalido"
          />
        </div>
      </div>

      {/* Campo Universidad */}
      <div>
        <label
          htmlFor="university"
          className="block text-sm font-bold mb-2 text-GrayCalido"
        >
          Universidad:
        </label>
        <input
          type="text"
          id="university"
          name="university"
          placeholder="Universidad Nacional Jorge Basadre Grohmann"
          className="w-full bg-BlackCalido text-sm border border-BorderColor rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-GrayCalido"
        />
      </div>

      {/* Campo Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-bold mb-2 text-GrayCalido">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="JohnDoe@gmail.com"
          className="w-full bg-BlackCalido text-sm border border-BorderColor rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-GrayCalido"
        />
      </div>

      {/* Campo Contraseña */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-bold mb-2 text-GrayCalido"
        >
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*******"
          className="w-full bg-BlackCalido text-sm border border-BorderColor rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-GrayCalido"
        />
      </div>

      {/* Botón de Registro */}
      <div className="mt-4">
        <button
          type="submit"
          className="w-full bg-WhiteVariacion  text-BlackOscuro font-leaguespartan font-semibold border border-BorderColor rounded-lg p-2 hover:bg-gray-300"
        >
          Registrate
        </button>
      </div>
    </form>
  );
};

export default Form;
