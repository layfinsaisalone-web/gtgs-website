"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Star } from "lucide-react";

type TutorCard = {
  role: string;
  specialization: string;
  experience: string;
  image: string;
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function TutorExcellence({ tutors }: { tutors: TutorCard[] }) {
  return (
    <section className="bg-[radial-gradient(circle_at_top,_#eff6ff,_#f8fbff_55%)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">Tutor excellence</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Meet Our <span className="text-blue-700">Professional Tutors</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {tutors.map((tutor, index) => (
            <motion.article
              key={tutor.role + index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group rounded-[1.75rem] border border-white/70 bg-white/70 p-4 shadow-[0_18px_50px_-20px_rgba(30,64,175,0.35)] backdrop-blur-xl"
            >
              <div className="relative overflow-hidden rounded-[1.35rem]">
                <Image src={tutor.image} alt={tutor.role} width={480} height={600} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{tutor.role}</h3>
                    <p className="mt-1 text-sm font-medium text-blue-700">{tutor.specialization}</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-600">
                    <Star size={12} className="fill-current" />
                    Premium
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin size={15} className="text-blue-700" />
                  <span>{tutor.experience} experience</span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-blue-100 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-700 hover:text-blue-700"
                      >
                        <Icon size={15} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
