import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpen, Cpu, Sparkles } from "lucide-react";

const highlights = [
  { value: "15", label: "Programmes" },
  { value: "70/30", label: "Practical / Theory" },
  { value: "100%", label: "Certified outcomes" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80" alt="GTGS students learning in a technology lab" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">
            <Sparkles size={16} />
            Admission ongoing — enroll today
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Empowering People. Transforming Lives.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Global Technology and General Services equips individuals with practical technical, vocational, and digital skills that create careers, build businesses, and strengthen communities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact#inquiry" className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800">
              Apply for Admission <ArrowRight size={18} />
            </Link>
            <Link href="/courses" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20">
              Explore Our Courses
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
                <p className="text-xl font-semibold text-white">{item.value}</p>
                <p className="text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur">
          <div className="rounded-[1.5rem] bg-slate-950/70 p-6 text-white">
            <div className="flex items-center gap-3 text-cyan-300">
              <Cpu size={20} />
              <span className="text-sm font-semibold uppercase tracking-[0.25em]">A technical institute and technology company</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Built for Sierra Leone, designed for opportunity.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              We train in real workshops and a working technology lab — not on paper. Our learners gain practical skills for today’s economy and tomorrow’s future.
            </p>
            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-sm text-cyan-100">
              <div className="flex items-start gap-2">
                <BadgeCheck size={18} className="mt-0.5" />
                <span>First enrolment includes free tuition for eligible new learners.</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-4 text-center">
                <BookOpen className="mx-auto h-6 w-6" />
                <p className="mt-2 text-sm font-semibold">Hands-on training</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 text-center">
                <Sparkles className="mx-auto h-6 w-6" />
                <p className="mt-2 text-sm font-semibold">Career-ready skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}