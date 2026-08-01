"use client";

export default function ApplicationFormPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">GTGS</p>
            <h1 className="mt-2 text-3xl font-semibold">Application Form</h1>
          </div>
          <button onClick={() => window.print()} className="rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white">
            Print Form
          </button>
        </div>
        <div className="mt-8 grid gap-5 text-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border p-4"><p className="font-semibold">Full Name</p><p className="mt-1">________________________</p></div>
            <div className="rounded-2xl border p-4"><p className="font-semibold">Email Address</p><p className="mt-1">________________________</p></div>
            <div className="rounded-2xl border p-4"><p className="font-semibold">Phone Number</p><p className="mt-1">________________________</p></div>
            <div className="rounded-2xl border p-4"><p className="font-semibold">Gender</p><p className="mt-1">________________________</p></div>
            <div className="rounded-2xl border p-4"><p className="font-semibold">Date of Birth</p><p className="mt-1">________________________</p></div>
            <div className="rounded-2xl border p-4 md:col-span-2"><p className="font-semibold">Residential Address</p><p className="mt-1">________________________</p></div>
            <div className="rounded-2xl border p-4"><p className="font-semibold">Programme Applying For</p><p className="mt-1">________________________</p></div>
            <div className="rounded-2xl border p-4"><p className="font-semibold">Highest Qualification</p><p className="mt-1">________________________</p></div>
            <div className="rounded-2xl border p-4 md:col-span-2"><p className="font-semibold">Personal Statement</p><p className="mt-1">______________________________________________</p></div>
          </div>
        </div>
      </div>
    </main>
  );
}
