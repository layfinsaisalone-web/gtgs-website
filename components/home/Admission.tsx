import Link from "next/link";
import { BadgeCheck, FileText, GraduationCap, Sparkles } from "lucide-react";

const steps = [
  "Submit your application form",
  "Upload required documents",
  "Attend interview or orientation",
  "Begin your training journey",
];

export default function Admission() {
  return (
    <section id="admission" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
              <GraduationCap size={16} />
              Admissions
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Join a learning experience built for real opportunity.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              GTGS offers a clear admission process for students, professionals, and aspiring entrepreneurs who want practical skills for careers and business growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact#inquiry" className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
                Apply Now
              </Link>
              <a href="mailto:globaltechnologyandgeneralserv@gmail.com?subject=GTGS%20Application%20Inquiry" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">
                <FileText size={18} />
                Download Form
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-sm sm:p-10">
            <div className="flex items-center gap-2 text-cyan-300">
              <Sparkles size={18} />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">How it works</span>
            </div>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-100">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-sm text-cyan-100">
              <div className="flex items-start gap-2">
                <BadgeCheck size={18} className="mt-0.5" />
                <p>Programme requirements, fees, and frequently asked questions are available to support every applicant.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
