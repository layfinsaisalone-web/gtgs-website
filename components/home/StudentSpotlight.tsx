"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type StudentSpotlightItem = {
  image: string;
  label: string;
  badge: string;
};

export default function StudentSpotlight({ students }: { students: StudentSpotlightItem[] }) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">Student spotlight</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Real learning moments at <span className="text-blue-700">GTGS</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {students.map((student, index) => (
            <motion.article
              key={student.image + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_16px_40px_-24px_rgba(15,23,42,0.45)]"
            >
              <div className="relative h-72 overflow-hidden">
                <Image src={student.image} alt="GTGS student activity" fill className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-700">
                    {student.badge}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white">{student.label}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
