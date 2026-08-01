import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Contact GTGS",
  description: "Get in touch with GTGS for admissions, programme guidance, partnerships, and general enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Contact</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Your next chapter starts this intake.
                </h1>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Reach out for admissions, programme guidance, partnerships, or general enquiries.
                </p>
                <div className="mt-8 space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-900">Location</p>
                    <p className="mt-1">Koidu City, Kono District, Sierra Leone</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <a href="tel:+23277217928" className="mt-1 block text-blue-700 hover:underline">+232 77 217928</a>
                    <a href="tel:+23234046770" className="mt-1 block text-blue-700 hover:underline">+232 34 046770</a>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a href="mailto:globaltechnologyandgeneralserv@gmail.com" className="mt-1 block text-blue-700 hover:underline">globaltechnologyandgeneralserv@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-2 shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=Koidu%20City%20Sierra%20Leone&z=12&output=embed"
                  title="GTGS location map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full rounded-[1.25rem]"
                />
              </div>

              <div className="rounded-[1.5rem] bg-slate-900 p-8 text-white">
                <h2 className="text-2xl font-semibold">Send us a message</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">We typically reply within one business day.</p>
                <form className="mt-8 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-300 focus:ring-2 focus:ring-cyan-400" placeholder="Your name" />
                    <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-300 focus:ring-2 focus:ring-cyan-400" placeholder="Your email" />
                  </div>
                  <input className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-300 focus:ring-2 focus:ring-cyan-400" placeholder="Phone number" />
                  <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-300 focus:ring-2 focus:ring-cyan-400" placeholder="How can we help?" />
                  <button type="button" className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">Submit request</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
