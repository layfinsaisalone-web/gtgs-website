import fs from "fs";
import path from "path";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Courses from "@/components/home/Courses";
import WhyChoose from "@/components/home/WhyChoose";
import Stats from "@/components/home/Stats";
import CampusLifeGallery from "@/components/home/CampusLifeGallery";
import MediaShowcase from "@/components/home/MediaShowcase";
import Testimonials from "@/components/home/Testimonials";
import Admission from "@/components/home/Admission";
import News from "@/components/home/News";
import Careers from "@/components/home/Careers";
import Contact from "@/components/home/Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";

const studentDir = path.join(process.cwd(), "public", "media", "students");
const campusLifeImages = fs.existsSync(studentDir)
  ? fs
      .readdirSync(studentDir)
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((file) => `/media/students/${file}`)
      .slice(0, 4)
  : [];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <WhyChoose />
      <Stats />
      <CampusLifeGallery images={campusLifeImages} />
      <MediaShowcase />
      <Testimonials />
      <Admission />
      <News />
      <Careers />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}