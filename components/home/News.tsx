import Link from "next/link";
import { CalendarDays, ExternalLink, Facebook } from "lucide-react";
import { newsUpdates } from "@/data/news";

export default function News() {
  return (
    <section id="news" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">News & Updates</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Fresh stories from GTGS learners, partners, and communities.
            </h2>
          </div>
          <a href="https://www.facebook.com/share/19Gey6r46Y/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-700">
            <Facebook size={16} />
            Follow our social channels
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {newsUpdates.map((item) => (
            <article key={item.title} className="group rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700">{item.category}</span>
                <span className="flex items-center gap-2">
                  <CalendarDays size={15} />
                  {item.date}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                GTGS continues to share inspiring educational updates and achievements with learners and supporters across Sierra Leone.
              </p>
              <div className="mt-6 flex items-center justify-between text-sm font-semibold text-slate-700">
                <span>{item.platform}</span>
                <Link href={item.link} target="_blank" rel="noopener noreferrer" className="transition group-hover:text-blue-700">Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
