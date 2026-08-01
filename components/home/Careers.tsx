import Link from "next/link";
import { BriefcaseBusiness, GraduationCap, Sparkles } from "lucide-react";

const opportunities = [
  { title: "Trainer Opportunities", description: "Experienced professionals and facilitators can join our growing instruction team." },
  { title: "Internships", description: "Students and graduates can build real workplace experience with GTGS programs." },
  { title: "Volunteer Roles", description: "Community-minded individuals can support outreach, education, and technology projects." },
];

export default function Careers() {
  return (
    <section id="careers" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Careers & Opportunities</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Grow with GTGS as a trainer, volunteer, or future professional.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              GTGS creates pathways for people to contribute to education, innovation, and community development through practical roles and partnerships.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {opportunities.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  {item.title.includes("Trainer") ? <GraduationCap size={20} /> : item.title.includes("Intern") ? <BriefcaseBusiness size={20} /> : <Sparkles size={20} />}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="#contact" className="inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
              Explore Opportunities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
