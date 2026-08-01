const testimonials = [
  { name: "Aminata S.", role: "Cosmetology graduate • Salon owner", quote: "I came with nothing but interest. Three months later I opened my own salon and now I employ two other young women from my community." },
  { name: "Mohamed K.", role: "ICT graduate • IT support officer", quote: "The lab sessions were real work, not just notes. I was hired for IT support one month after receiving my certificate." },
  { name: "Isatu B.", role: "MBS graduate • Market trader", quote: "MBS changed how I handle my money. I keep records daily, my capital grew, and I moved from a table to a shop." },
  { name: "Foday T.", role: "Graphic Design graduate • Freelancer", quote: "I design flyers and logos for businesses across Kono now. GTGS gave me the skill and the confidence to charge for it." },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Student Success</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Graduates who now employ others.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">Businesses started, jobs secured, communities strengthened — this is what a three-month programme can change.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}