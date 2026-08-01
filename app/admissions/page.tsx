import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const steps = [
  "Submit your application form and choose your preferred programme",
  "Upload the required documents and personal information",
  "Attend an interview, orientation, or confirmation meeting",
  "Begin your practical training journey and receive support from GTGS",
];

const faqs = [
  { question: "Who can apply?", answer: "Anyone interested in practical training, employment, or entrepreneurship can apply." },
  { question: "Do you offer programme requirements?", answer: "Yes. Each programme has simple entry expectations and a clear learning pathway." },
  { question: "What is the fee structure?", answer: "Fees vary by programme and intake. Contact us for current details and support options." },
];

export const metadata = {
  title: "Admissions | GTGS",
  description: "Learn how to join GTGS, apply for a programme and start your journey.",
};

export default function AdmissionsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Admissions</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Join a learning experience built for real opportunity.
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                GTGS offers a clear admission process for students, professionals and aspiring entrepreneurs who want practical skills for careers and business growth.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8">
                <h2 className="text-xl font-semibold text-slate-900">Admission process</h2>
                <div className="mt-6 space-y-4">
                  {steps.map((step, index) => (
                    <div key={step} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-7 text-slate-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-slate-900 p-8 text-white">
                <h2 className="text-xl font-semibold">Ready to start?</h2>
                <p className="mt-4 text-sm leading-8 text-slate-300">
                  Begin your application today. We will guide you through the enrolment steps and help you choose the right programme for your goals.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact#inquiry" className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
                    Apply online
                  </Link>
                  <Link href="/courses" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                    View programmes
                  </Link>
                </div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-slate-300">
                  <p className="font-semibold text-white">Programme requirements</p>
                  <p className="mt-2">A basic level of literacy, commitment to attendance, and a clear interest in your chosen pathway.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Frequently asked questions</h2>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">{faq.question}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
