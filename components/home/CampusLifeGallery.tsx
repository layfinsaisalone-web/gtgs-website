"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type CampusLifeGalleryProps = {
  images: string[];
};

export default function CampusLifeGallery({ images }: CampusLifeGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const previewImages = images.slice(0, 4);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current === null ? 0 : (current + 1) % images.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current === null ? 0 : (current - 1 + images.length) % images.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, images.length]);

  return (
    <section id="campus-life" className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">Campus life</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Campus Life at <span className="text-blue-700">GTGS</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">A visual story of practical training, peer learning, and vibrant institution life.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {previewImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group block w-full overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              aria-label="Open campus life image"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image}
                  alt="GTGS campus life"
                  width={1200}
                  height={900}
                  className="w-full h-auto transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[1.5rem] bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-slate-900 shadow"
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>
            <div className="relative flex max-h-[78vh] items-center justify-center bg-slate-50">
              <Image
                src={previewImages[activeIndex]}
                alt="Highlighted GTGS campus moment"
                width={1400}
                height={1000}
                className="max-h-[78vh] w-auto h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-3">
              <button
                type="button"
                onClick={() => setActiveIndex((current) => (current === null ? 0 : (current - 1 + previewImages.length) % previewImages.length))}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                <ChevronLeft size={16} />
                Previous
              </button>
              <span className="text-sm text-slate-600">{activeIndex + 1} / {previewImages.length}</span>
              <button
                type="button"
                onClick={() => setActiveIndex((current) => (current === null ? 0 : (current + 1) % previewImages.length))}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
