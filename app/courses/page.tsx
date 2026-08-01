import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { courses } from "@/data/courses";

export const metadata = {
  title: "Courses | GTGS",
  description: "View GTGS’s practical programme offerings and discover the course that fits your ambition.",
};

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Courses Offered</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Fifteen programmes. One outcome: employability.
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Every programme runs for three months, is 70% practical and ends with a recognised GTGS certificate.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {courses.map((course) => (
                <Link key={course.slug} href={`/courses/${course.slug}`} className="group rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{course.category}</span>
                    <span className="text-sm font-medium text-slate-500">{course.duration}</span>
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-slate-900">{course.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{course.shortDescription}</p>
                  <div className="mt-5 text-sm font-semibold text-blue-700 transition group-hover:translate-x-1">View programme →</div>
                </Link>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/admissions" className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
                Apply now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
