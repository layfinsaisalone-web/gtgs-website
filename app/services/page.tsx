import Link from "next/link";
import { redirect } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Courses | GTGS",
  description: "Explore GTGS programmes in technology, business, design, wellness, and entrepreneurship.",
};

export default function ServicesPage() {
  redirect("/courses");

  return null;
}
