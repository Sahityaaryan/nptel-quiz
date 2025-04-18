'use client';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <div className="card w-full max-w-4xl lg:card-side bg-base-100 shadow-xl">
        <figure className="w-full lg:w-1/2">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Login Illustration"
            className="object-cover h-full w-full rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
          />
        </figure>
        <div className="w-full lg:w-1/2 p-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
          <button 
            className="btn btn-outline btn-wide flex items-center gap-3"
            onClick={() => signIn('google', { callbackUrl: '/courses' })}
          >
            <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
