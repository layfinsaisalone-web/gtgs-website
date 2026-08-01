import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const values = [
  {
    title: "Innovation",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    title: "Excellence",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Integrity",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Empowerment",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    title: "Creativity",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
];

export default function VisionMission() {
  return (
    <section id="training" className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionTitle
          title="Vision, Mission & Values"
          subtitle="Guiding principles that drive our commitment to technology, skills development, and community empowerment."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Vision Card */}
          <div className="rounded-2xl bg-blue-700 p-8 text-white shadow-lg sm:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="mt-4 text-lg leading-relaxed text-blue-100">
              To become a leading technology and skills development hub that
              empowers individuals and communities through innovation,
              education, and opportunity.
            </p>
          </div>

          {/* Mission Card */}
          <div className="rounded-2xl bg-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="mt-4 text-lg leading-relaxed text-cyan-50">
              To provide accessible, practical, and quality training programs
              while delivering reliable technology solutions that improve lives
              and businesses.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-xl font-bold text-slate-900 sm:text-2xl">
            Our Core Values
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  {value.icon}
                </div>
                <h4 className="font-semibold text-slate-900">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}