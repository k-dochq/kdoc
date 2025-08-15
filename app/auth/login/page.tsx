import { GoogleSignInButton } from 'features/google-auth';

export default function LoginPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>계정에 로그인</h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Google 계정으로 간편하게 로그인하세요
          </p>
        </div>
        <div className='mt-8 space-y-6'>
          <GoogleSignInButton />
        </div>
      </div>
    </div>
  );
}
