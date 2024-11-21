"use client";

import React, { useState, useMemo } from "react";

const options = [
  { value: "musica", label: "Música" },
  { value: "cine", label: "Cine y audiovisuales" },
  { value: "literatura", label: "Literatura y escritura creativa" },
  { value: "fotografia", label: "Fotografía" },
  { value: "arte", label: "Arte y diseño gráfico" },
  { value: "negocios", label: "Negocios y Emprendimiento" },
  { value: "marketing", label: "Marketing digital" },
  { value: "finanzas", label: "Finanzas y contabilidad" },
  { value: "gestion", label: "Gestión empresarial" },
  { value: "liderazgo", label: "Liderazgo y desarrollo personal" },
  { value: "innovacion", label: "Innovación y startups" },
  {
    value: "ciencias_ambientales",
    label: "Ciencias Ambientales y Sostenibilidad",
  },
  { value: "energias_renovables", label: "Energías renovables" },
  { value: "recursos_naturales", label: "Gestión de recursos naturales" },
  { value: "cambio_climatico", label: "Cambio climático" },
  { value: "economia_circular", label: "Economía circular" },
  { value: "ecoturismo", label: "Ecoturismo" },
  {
    value: "ciencias_computacion",
    label: "Ciencias de la Computación y Datos",
  },
  { value: "ciencia_datos", label: "Ciencia de datos" },
  { value: "analisis_datos", label: "Análisis de datos" },
  { value: "machine_learning", label: "Machine learning" },
  { value: "blockchain", label: "Blockchain" },
  { value: "cloud_computing", label: "Cloud computing" },
];

const InterestSelection = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleOptionClick = (value: string) => {
    setSelectedOptions((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else if (prev.length < 5) {
        return [...prev, value];
      }
      return prev;
    });
  };

  const handleSubmit = () => {
    if (selectedOptions.length >= 2 && selectedOptions.length <= 5) {
      localStorage.setItem(
        "selectedInterests",
        JSON.stringify(selectedOptions)
      );
      console.log("Intereses seleccionados:", selectedOptions);
      setError("");
    } else {
      setError("Por favor, seleccione entre 2 y 5 campos de interés.");
    }
  };

  return (
    <div className='flex flex-col items-center justify-center bg-gray-900 text-white p-4'>
      <div className='w-full max-w-4xl'>
        <div className='mb-4'>
          <input
            type='text'
            placeholder='Buscar campos de interés...'
            className='w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-600'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4'>
          {filteredOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`p-3 rounded text-sm font-medium text-center transition-colors ${
                selectedOptions.includes(option.value)
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-300"
              } hover:bg-purple-500`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {error && <p className='text-red-500 mb-4'>{error}</p>}

        <button
          onClick={handleSubmit}
          className='w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors'
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default InterestSelection;
