import { RegisterCard } from "./_components/RegisterCard";

export default function RegisterPage() {
  return (
    <div className='w-full min-h-screen grid grid-cols-1 lg:grid-cols-1 py-4'>
      <div className='flex flex-col items-center justify-center'>
        <RegisterCard />
      </div>
      <div className='hidden bg-muted lg:block'></div>
    </div>
  );
}
