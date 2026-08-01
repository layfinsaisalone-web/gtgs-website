import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const pillars = [
  "Hands-on training across technology, business and creative fields",
  "Practical support for learners, entrepreneurs and professionals",
  "Real partnerships with schools, businesses and community organisations",
];

export const metadata = {
  title: "About GTGS | Global Technology & General Services",
  description: "Learn about GTGS’s mission, vision and the values behind our training and technology work.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">About GTGS</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                A technical institute and technology company, built for Sierra Leone.
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                GTGS exists to close the gap between what young people can learn and what employers and markets actually need. We combine practical training, technology services and business support so learners can turn skills into work and opportunity.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[1.5rem] bg-slate-900 p-8 text-white">
                <h2 className="text-2xl font-semibold">Our mission</h2>
                <p className="mt-4 text-sm leading-8 text-slate-300">
                  To equip individuals with practical technical, vocational, entrepreneurial and digital skills that create employment opportunities and improve livelihoods.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8">
                <h2 className="text-2xl font-semibold text-slate-900">Our vision</h2>
                <p className="mt-4 text-sm leading-8 text-slate-600">
                  To become Sierra Leone’s leading centre for technical education, innovation, entrepreneurship and technology solutions.
                </p>
                <div className="mt-6 space-y-3">
                  {pillars.map((pillar) => (
                    <div key={pillar} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                      {pillar}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/courses" className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
                Explore programmes
              </Link>
              <Link href="/contact" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
