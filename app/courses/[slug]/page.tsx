import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { courses } from "@/data/courses";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props) {
  const course = courses.find((item) => item.slug === params.slug);

  if (!course) {
    return {
      title: "Course not found | GTGS",
      description: "The requested programme could not be found.",
    };
  }

  return {
    title: `${course.title} | GTGS`,
    description: course.shortDescription,
  };
}

export default function CourseDetailPage({ params }: Props) {
  const course = courses.find((item) => item.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="bg-slate-50">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-14">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">{course.category}</span>
              <span className="text-sm font-medium text-slate-500">Duration: {course.duration}</span>
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{course.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{course.shortDescription}</p>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-8">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{course.overview}</p>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h2 className="text-xl font-semibold text-slate-900">Skills gained</h2>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    {course.skillsGained.map((skill) => (
                      <li key={skill} className="flex gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-700" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h2 className="text-xl font-semibold text-slate-900">Requirements</h2>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    {course.requirements.map((requirement) => (
                      <li key={requirement} className="flex gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-600" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h2 className="text-xl font-semibold text-slate-900">Career opportunities</h2>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    {course.careerOpportunities.map((career) => (
                      <li key={career} className="flex gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                        <span>{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact#inquiry" className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
                Apply Now
              </Link>
              <Link href="/courses" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">
                View all courses
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
