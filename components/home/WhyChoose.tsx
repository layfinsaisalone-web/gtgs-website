import { BadgeCheck, BriefcaseBusiness, Compass, GraduationCap, HandCoins, Laptop2, Sparkles, Users } from "lucide-react";

const reasons = [
  { title: "Practical Hands-on Training", description: "70% practical, 30% theory — you learn by doing, every session.", icon: Laptop2 },
  { title: "Qualified Instructors", description: "Industry-experienced trainers who have run the businesses they teach.", icon: GraduationCap },
  { title: "Industry-Relevant Curriculum", description: "Built around what employers and markets in Sierra Leone actually need.", icon: Compass },
  { title: "Affordable Tuition", description: "Accessible fees with free tuition on first enrolment intakes.", icon: HandCoins },
  { title: "Certificate Awarded", description: "Every graduate receives a recognised GTGS certificate of completion.", icon: BadgeCheck },
  { title: "Career Development", description: "CV support, interview coaching and employer introductions.", icon: BriefcaseBusiness },
  { title: "Entrepreneurship Support", description: "Business planning and startup guidance for self-reliance.", icon: Sparkles },
  { title: "Technology Innovation", description: "A working technology lab and commercial services arm to learn from.", icon: Users },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Why Choose GTGS</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Training designed around real work, real markets, and real futures.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">GTGS combines practical training, professional mentorship, and a clear pathway to employment or enterprise growth.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}