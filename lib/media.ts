import fs from "fs";
import path from "path";

type MediaCategory = "students" | "tutor" | "products";

const allowedExtensions = [".png", ".jpg", ".jpeg", ".webp"];

const mediaBasePath = path.join(process.cwd(), "public", "media");

function readMediaFiles(folder: MediaCategory) {
  const dir = path.join(mediaBasePath, folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => allowedExtensions.includes(path.extname(file).toLowerCase()))
    .sort();
}

export function getStudentMedia() {
  return readMediaFiles("students").map((file) => `/media/students/${file}`);
}

export function getTutorMedia() {
  return readMediaFiles("tutor").map((file) => `/media/tutor/${file}`);
}

export function getProductMedia() {
  return readMediaFiles("products").map((file) => `/media/products/${file}`);
}
