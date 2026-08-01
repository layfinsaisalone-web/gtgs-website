"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

function SignInContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Secure access</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Sign in to continue</h1>
        <p className="mt-3 text-sm text-slate-600">
          Use your Google account to access the portal for the first time. Only the institution’s authorized Google account can enter the admin dashboard.
        </p>

        <div className="mt-4 rounded-2xl bg-blue-50 px-4 py-3 text-sm text-blue-700">
          Google sign-in is the default entry point. If the account is not authorized, access is denied.
        </div>

        {error === "AccessDenied" && (
          <div className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
            Access denied. Please use the institution’s authorized Google account to continue.
          </div>
        )}

        <button
          onClick={() => signIn("google", { callbackUrl: "/admin" })}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-6 py-3 font-semibold text-white"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={null}>
      <SignInContent />
    </Suspense>
  );
}
