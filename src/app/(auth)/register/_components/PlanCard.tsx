import { CheckCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";

interface PlanCardProps {
  title: string;
  requirements: string;
  benefits: string[];
  onSelectPlan: (plan: string) => void; // Callback para manejar la selección
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  requirements,
  benefits,
  onSelectPlan,
}) => {
  return (
    <div className='bg-BlackCalido text-WhiteCalido border border-BorderColor rounded-lg p-6 h-auto flex flex-col justify-between'>
      <div>
        <h3 className='text-2xl font-bold mb-4'>{title}</h3>
        <p className='font-bold text-GrayCalido mb-4'>Requisitos:</p>
        <p className='flex items-center mb-4 text-sm'>
          <MinusCircleIcon className='h-5 w-5 text-gray-400' />
          &nbsp;{requirements || "Ninguno"}
        </p>
        <p className='font-bold text-GrayCalido mb-4'>Beneficios:</p>
        <ul className='list-none space-y-2 mb-4 text-sm'>
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className='flex items-center'
            >
              <CheckCircleIcon className='h-5 w-5 text-green-500' />
              &nbsp;{benefit}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex justify-center'>
        <button
          className='bg-WhiteCalido text-BlackOscuro rounded-lg font-semibold font-leaguespartan hover:bg-gray-300 w-[142px] h-[47px]'
          onClick={() => onSelectPlan(title)} // Llama al callback con el título del plan
        >
          Escoger Plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
