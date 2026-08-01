import Link from "next/link";

const values = ["Innovation", "Excellence", "Integrity", "Empowerment", "Creativity"];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">About GTGS</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              A practical training institution shaping bright futures across Sierra Leone.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              GTGS exists to equip young people, professionals, and aspiring entrepreneurs with the skills they need to earn, create, and lead with confidence. We combine hands-on learning, mentorship, and real-world practice in every programme.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-blue-50 p-5">
                <h3 className="text-xl font-semibold text-blue-700">Our Mission</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">To empower people with practical technical, vocational, entrepreneurial, and digital skills that create employment, business growth, and lasting opportunity.</p>
              </div>
              <div className="rounded-2xl bg-cyan-50 p-5">
                <h3 className="text-xl font-semibold text-cyan-700">Our Vision</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">To become Sierra Leone’s leading centre for practical education, innovation, entrepreneurship, and self-reliant development.</p>
              </div>
            </div>
            <Link href="/about" className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
              Read our full story
            </Link>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <img src="./image.jpg?auto=format&scale=crop&w=1200&q=80" alt="GTGS instructors mentoring students" className="h-72 w-full rounded-[1.5rem] object-cover" />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}