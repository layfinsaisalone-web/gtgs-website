"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpen, Cpu, HandCoins, HeartHandshake, Palette, Sparkles, X } from "lucide-react";
import { courses } from "@/data/courses";

const categoryIcons = {
  Technology: Cpu,
  Creative: Palette,
  Business: Sparkles,
  Community: BookOpen,
  Vocational: BadgeCheck,
  Wellness: HeartHandshake,
  Enterprise: HandCoins,
};

const categoryDescriptions = {
  Technology: "Digital literacy, productivity software, and practical tech skills for real workplaces.",
  Creative: "Creative production, design thinking, and hands-on visual storytelling.",
  Business: "Communication, brand growth, customer service, and enterprise confidence.",
  Community: "Supportive learning experiences for adults and community development pathways.",
  Vocational: "Skill-based, practical training with direct value in the job market.",
  Wellness: "Empathy-led growth, counselling support, and community wellbeing practice.",
  Enterprise: "Street-level business readiness, financial discipline, and practical entrepreneurship.",
};

const categoryStyles = {
  Technology: "from-blue-600/20 via-blue-500/5 to-cyan-400/20",
  Creative: "from-violet-600/20 via-fuchsia-500/5 to-amber-400/20",
  Business: "from-emerald-600/20 via-teal-500/5 to-cyan-400/20",
  Community: "from-sky-600/20 via-blue-500/5 to-indigo-400/20",
  Vocational: "from-amber-600/20 via-orange-500/5 to-rose-400/20",
  Wellness: "from-pink-600/20 via-rose-500/5 to-amber-300/20",
  Enterprise: "from-gold-600/20 via-yellow-500/5 to-lime-400/20",
};

const categories = Object.keys(categoryStyles).map((name) => ({
  name,
  count: courses.filter((course) => course.category === name).length,
  icon: categoryIcons[name as keyof typeof categoryIcons],
  description: categoryDescriptions[name as keyof typeof categoryDescriptions],
}));

const categoryMap = new Map(
  categories.map((category) => [
    category.name,
    courses.filter((course) => course.category === category.name),
  ]),
);

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const visibleCourses = useMemo(() => {
    if (!activeCategory) return [];
    return categoryMap.get(activeCategory) ?? [];
  }, [activeCategory]);

  return (
    <section id="courses" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Courses Offered</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Learning pathways designed for practical growth.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">Explore GTGS by category and move quickly to the courses that match your ambition.</p>
          </div>
          <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-700">
            View all programmes <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.name} className={`group rounded-[1.6rem] border border-slate-200 bg-gradient-to-br ${categoryStyles[category.name as keyof typeof categoryStyles]} p-[1px] shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}>
                <div className="h-full rounded-[1.55rem] bg-white p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.23em] text-slate-600">
                      {category.count} courses
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{category.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
                  <button
                    type="button"
                    onClick={() => setActiveCategory(category.name)}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    View Courses <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {activeCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-4 backdrop-blur-sm">
          <div className="max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-6 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Category</p>
                <h3 className="text-2xl font-semibold text-slate-900">{activeCategory}</h3>
              </div>
              <button type="button" onClick={() => setActiveCategory(null)} className="rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-200">
                <X size={18} />
              </button>
            </div>
            <div className="max-h-[68vh] overflow-y-auto px-6 py-5">
              <div className="grid gap-3">
                {visibleCourses.map((course) => (
                  <div key={course.slug} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h4 className="text-base font-semibold text-slate-900">{course.title}</h4>
                        <p className="mt-1 text-sm text-slate-600">{course.shortDescription}</p>
                      </div>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{course.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}