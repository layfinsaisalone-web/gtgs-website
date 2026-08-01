import type { Metadata } from "next";
import "./globals.css";
import NextAuthProvider from "@/components/providers/SessionProvider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://gtgs.sl"),
  title: "Global Technology & General Services | Technology & Skills Development",
  description:
    "GTGS is a skills development and training institution in Sierra Leone offering practical programmes in technology, business, design, wellness, and entrepreneurship.",
  keywords: ["GTGS", "skills development", "Sierra Leone", "training", "vocational education"],
  openGraph: {
    title: "Global Technology & General Services",
    description: "Practical training, entrepreneurship support, and digital skills development for individuals and communities in Sierra Leone.",
    type: "website",
    url: "https://gtgs.sl",
    siteName: "GTGS",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTGS | Skills Development in Sierra Leone",
    description: "Practical programmes in technology, business, design, wellness, and entrepreneurship.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <NextAuthProvider>{children}</NextAuthProvider>
        <Analytics />
      </body>
    </html>
  );
}