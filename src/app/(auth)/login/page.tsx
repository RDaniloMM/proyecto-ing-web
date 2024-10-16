import { LoginCard } from "./_components/LoginCard";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { verified: string; error: string };
}) {
  const isVerified = searchParams.verified === "true";
  const OAuthAccountNotLinked = searchParams.error === "OAuthAccountNotLinked";

  return (
    <div className='w-full min-h-screen grid grid-cols-1 lg:grid-cols-1 py-4'>
      <div className='flex flex-col items-center justify-center bg-gray-400'>
        <LoginCard
          isVerified={isVerified}
          OAuthAccountNotLinked={OAuthAccountNotLinked}
        />
      </div>
    </div>
  );
}
