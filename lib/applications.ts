import fs from "fs";
import path from "path";
import { Application } from "@/types/application";

const applicationsFile = path.join(process.cwd(), "data", "applications.json");
const uploadDir = path.join(process.cwd(), "public", "uploads");

export function ensureUploadsDirectory() {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
}

export function readApplications(): Application[] {
  if (!fs.existsSync(applicationsFile)) {
    return [];
  }

  const raw = fs.readFileSync(applicationsFile, "utf8");
  try {
    return JSON.parse(raw) as Application[];
  } catch (error) {
    return [];
  }
}

export function writeApplications(applications: Application[]) {
  fs.writeFileSync(applicationsFile, JSON.stringify(applications, null, 2), "utf8");
}

export function addApplication(application: Application) {
  const applications = readApplications();
  applications.unshift(application);
  writeApplications(applications);
}

export function updateApplicationStatus(id: string, status: Application["status"]) {
  const applications = readApplications();
  const index = applications.findIndex((item) => item.id === id);
  if (index === -1) return null;
  applications[index].status = status;
  writeApplications(applications);
  return applications[index];
}

export function saveUploadFile(name: string, buffer: ArrayBuffer) {
  ensureUploadsDirectory();
  const filePath = path.join(uploadDir, name);
  fs.writeFileSync(filePath, Buffer.from(buffer));
  return `/uploads/${name}`;
}
