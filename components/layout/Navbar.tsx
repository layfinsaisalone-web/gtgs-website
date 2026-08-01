"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="flex items-center gap-3" onClick={handleLinkClick}>
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-100 sm:h-12 sm:w-12">
              <Image src="/logo.jpg" alt="GTGS logo" width={48} height={48} className="object-contain" priority />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-blue-900 sm:text-xl">GTGS</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500 sm:text-xs">Technology & Skills</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/admissions">
              <Button size="sm" variant="primary">
                Apply Now
              </Button>
            </Link>
          </div>

          <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Toggle navigation menu">
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-slate-200 pb-4 lg:hidden">
            <nav className="flex flex-col space-y-1 pt-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={handleLinkClick} className="rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-700">
                  {link.label}
                </Link>
              ))}
              <div className="px-3 pt-4">
                <Link href="/admissions" onClick={handleLinkClick}>
                  <Button size="md" variant="primary" className="w-full">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}