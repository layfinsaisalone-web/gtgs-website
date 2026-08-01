import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Camera, CheckCircle2, Computer, Globe, Network, Smartphone, Sparkles } from "lucide-react";

const services = [
  { title: "Website Design", icon: Globe, description: "Fast, responsive websites for businesses, schools and NGOs." },
  { title: "Software Development", icon: Computer, description: "Custom systems for records, sales, membership and reporting." },
  { title: "Mobile App Development", icon: Smartphone, description: "Android and cross-platform apps built for local realities." },
  { title: "Computer Repairs", icon: Computer, description: "Diagnostics, hardware repair, upgrades and data recovery." },
  { title: "Networking", icon: Network, description: "LAN, Wi-Fi and internet distribution for offices and campuses." },
  { title: "CCTV Installation", icon: Camera, description: "Security camera supply, installation and remote monitoring." },
  { title: "Brand Identity Design", icon: Sparkles, description: "Logos, brand guidelines, signage and print collateral." },
  { title: "Digital Marketing", icon: BriefcaseBusiness, description: "Campaigns, content and paid promotion that convert." },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Technology Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            We don’t just teach technology — we deliver it.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">Our commercial services arm builds and supports systems for businesses, schools and organisations across Sierra Leone.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between rounded-[2rem] border border-slate-200 bg-slate-900 px-6 py-6 text-white sm:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Commercial support</p>
            <p className="mt-2 text-lg font-semibold">Need a website, software solution or digital support? Let’s build it together.</p>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            See all services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}