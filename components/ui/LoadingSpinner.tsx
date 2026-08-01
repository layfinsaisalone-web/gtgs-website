import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(219,234,254,0.5),_transparent_60%)] px-4">
      <div className="w-full max-w-sm rounded-[1.75rem] border border-slate-200 bg-white/80 p-8 text-center shadow-xl backdrop-blur">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-blue-50 p-2 shadow-sm">
            <Image src="/logo.jpg" alt="GTGS logo" width={56} height={56} className="object-contain" priority />
          </div>
        </div>
        <p className="mt-6 text-lg font-semibold text-slate-900">Preparing your experience</p>
        <p className="mt-2 text-sm leading-7 text-slate-600">Loading GTGS resources and pages…</p>
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-1/3 animate-pulse rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
        </div>
      </div>
    </div>
  );
}