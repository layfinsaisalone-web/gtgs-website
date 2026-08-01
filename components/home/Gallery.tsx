import Image from "next/image";

const galleryItems = [
  { id: 1, title: "Student spotlight", description: "Learners building practical digital skills in our live training spaces.", image: "/images/placeholders/student-spotlight.svg", badge: "Students" },
  { id: 2, title: "Tutor excellence", description: "Experienced facilitators guiding learners through hands-on projects.", image: "/images/placeholders/tutor-spotlight.svg", badge: "Tutors" },
  { id: 3, title: "Student products", description: "Examples of business-ready work created by our trainees.", image: "/images/placeholders/product-spotlight.svg", badge: "Products" },
  { id: 4, title: "Learning videos", description: "Short instructional resources that support learning beyond the classroom.", image: "/images/placeholders/video-spotlight.svg", badge: "Videos" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Our <span className="text-blue-700">Gallery</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Capturing moments of learning, growth, and community impact at GTGS.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {galleryItems.map((item) => (
            <div key={item.id} className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">{item.badge}</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}