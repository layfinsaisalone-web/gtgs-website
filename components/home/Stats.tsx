"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, BriefcaseBusiness, GraduationCap, Medal, School, Sparkles, Users, Trophy } from "lucide-react";

const stats = [
  { id: 1, value: 145, label: "Students Engaged", icon: Users },
  { id: 2, value: 12, label: "Learning Pathways", icon: BookOpen },
  { id: 3, value: 6, label: "Certified Tutors", icon: Medal },
  { id: 4, value: 4, label: "Active Cohorts", icon: GraduationCap },
];

function AnimatedValue({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const stepTime = 16;
    const progress = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const ratio = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);
      setCount(Math.round(value * eased));
      if (ratio < 1) {
        window.requestAnimationFrame(progress);
      }
    };
    const frame = window.requestAnimationFrame(progress);
    return () => window.cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function CircularValue({ value, suffix = "" }: { value: number; suffix?: string }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(value / 100, 1);
  const dashOffset = circumference - progress * circumference;

  return (
    <div className="relative flex h-24 w-24 items-center justify-center">
      <svg className="h-24 w-24 -rotate-90 transform" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r={radius} stroke="rgba(255,255,255,0.25)" strokeWidth="8" fill="none" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="url(#statsGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
        <defs>
          <linearGradient id="statsGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center text-white">
        <div className="text-lg font-bold">
          <AnimatedValue value={value} suffix={suffix} />
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(135deg,_#0f172a,_#1d4ed8)] py-20 md:py-24"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(15,23,42,0.92), rgba(29,78,216,0.82)), url('/media/students/IMG-20260731-WA0054.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-300/20 blur-2xl" />
      <div className="absolute bottom-6 right-10 h-28 w-28 rounded-full bg-cyan-300/20 blur-2xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Modern statistics</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Measured performance with <span className="text-amber-300">professional momentum</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="rounded-[1.6rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex rounded-full bg-white/10 p-3 text-amber-300">
                      <Icon size={18} />
                    </div>
                    <p className="mt-4 text-sm text-blue-100">{stat.label}</p>
                  </div>
                  <CircularValue value={Math.min(stat.value, 100)} />
                </div>
                <div className="mt-4 text-3xl font-bold text-white">
                  <AnimatedValue value={stat.value} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}