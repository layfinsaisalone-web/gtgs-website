"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";

type ProductCard = {
  title: string;
  course: string;
  description: string;
  image: string;
};

export default function StudentProducts({ products }: { products: ProductCard[] }) {
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">Art & craft showcase</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Creative outputs from our <span className="text-blue-700">Art & Craft Department</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.48)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image src={product.image} alt={product.title} fill className="object-cover transition duration-500 hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  <Sparkles size={13} />
                  Student creative practice
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{product.title}</h3>
                <p className="mt-1 text-sm font-medium text-blue-700">{product.course}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700">
                    <BadgeCheck size={14} />
                    Art & Craft Student Work
                  </div>
                  <button type="button" className="rounded-full bg-blue-700 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-800">
                    View Image
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
