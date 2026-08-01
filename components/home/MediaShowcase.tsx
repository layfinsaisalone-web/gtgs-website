import fs from "fs";
import path from "path";
import TutorExcellence from "@/components/home/TutorExcellence";
import StudentProducts from "@/components/home/StudentProducts";

const tutorDir = path.join(process.cwd(), "public", "media", "tutor");
const productDir = path.join(process.cwd(), "public", "media", "products");

const getMediaFiles = (folder: string) =>
  fs.existsSync(folder)
    ? fs.readdirSync(folder).filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    : [];

const tutorFiles = getMediaFiles(tutorDir);
const productFiles = getMediaFiles(productDir);

const tutors = tutorFiles.map((file, index) => ({
  role: ["Professional Instructor", "Industry Expert", "Certified Trainer", "Practical Mentor"][index % 4],
  specialization: ["Area of Expertise", "Teaching & Innovation", "Practice-Based Learning", "Career Coaching"][index % 4],
  experience: ["8+ years", "10+ years", "6+ years", "9+ years"][index % 4],
  image: `/media/tutor/${file}`,
}));

const products = productFiles.map((file, index) => ({
  title: ["Decorative Clay Piece", "Color & Texture Board", "Creative Mixed Media Work"][index % 3],
  course: ["Art & Craft Department", "Creative Practice", "Craft Innovation"][index % 3],
  description: ["A student-made craft composition shaped through form, texture, and practical studio technique.", "A visual exercise that shows deliberate color selection and material exploration.", "A mixed-media creative output demonstrating observation, composition, and finish."][index % 3],
  image: `/media/products/${file}`,
}));

export default function MediaShowcase() {
  return (
    <>
      <TutorExcellence tutors={tutors} />
      <StudentProducts products={products} />
    </>
  );
}
