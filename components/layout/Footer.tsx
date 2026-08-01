import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr_0.8fr]">
          <div>
            <h3 className="text-lg font-bold">GTGS</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
              Global Technology & General Services empowers people through practical training, digital skills, entrepreneurship, and vocational learning in Sierra Leone.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <div className="mt-3 space-y-2 text-sm text-slate-400">
              <Link href="/about" className="block hover:text-white">About</Link>
              <Link href="/courses" className="block hover:text-white">Courses</Link>
              <Link href="/admissions" className="block hover:text-white">Admissions</Link>
              <Link href="/contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <address className="mt-3 space-y-2 not-italic text-sm text-slate-400">
              <p>Koidu City, Kono District, Sierra Leone</p>
              <a href="tel:+23277217928" className="block hover:text-white">+232 77 217928</a>
              <a href="mailto:info@gtgs.sl" className="block hover:text-white">info@gtgs.sl</a>
            </address>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Global Technology and General Services. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/19Gey6r46Y/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
            <a href="/contact" className="hover:text-white">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}