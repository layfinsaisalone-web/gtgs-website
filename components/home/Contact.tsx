"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, GraduationCap, UploadCloud } from "lucide-react";

const acceptedExtensions = ["pdf", "jpg", "jpeg", "png"];
const maxSizeBytes = 10 * 1024 * 1024;
const defaultGoogleFormUrl =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
  "https://docs.google.com/forms/d/e/1FAIpQLScjzWNjX1e8mQ0o6d70Wel9h3J4M0PcVnfY3WPC4gCG5fX0A/viewform?usp=sf_link";

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  gender: "",
  dob: "",
  address: "",
  programme: "",
  qualification: "",
  statement: "",
};

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [files, setFiles] = useState<Record<string, File | null>>({
    nationalId: null,
    wassce: null,
    birthCertificate: null,
    passport: null,
    supportingDocuments: null,
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const uploadSummary = useMemo(
    () => Object.values(files).filter(Boolean).length + " document(s) ready for upload",
    [files],
  );

  const validateFiles = (fileMap: Record<string, File | null>) => {
    const problems: string[] = [];

    Object.entries(fileMap).forEach(([key, file]) => {
      if (!file) {
        problems.push(`${key} is required.`);
        return;
      }
      const extension = file.name.split(".").pop()?.toLowerCase();
      if (!extension || !acceptedExtensions.includes(extension)) {
        problems.push(`${file.name} has an unsupported document type.`);
      }
      if (file.size > maxSizeBytes) {
        problems.push(`${file.name} exceeds the 10 MB upload limit.`);
      }
    });

    return problems;
  };

  const handleFieldChange = (field: keyof typeof emptyForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>, field: keyof typeof files) => {
    const selected = event.target.files?.[0] ?? null;
    setFiles((current) => ({ ...current, [field]: selected }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fileProblems = validateFiles(files);
    const missingFields = Object.values(form).some((value) => !value.trim());

    if (missingFields || fileProblems.length > 0) {
      setStatus("error");
      setErrors([
        ...(missingFields ? ["Please complete every application field before submission."] : []),
        ...fileProblems,
      ]);
      return;
    }

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      setStatus("idle");
      setErrors([]);
      setMessage("Submitting your application securely...");

      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => payload.append(key, value));
      Object.entries(files).forEach(([key, file]) => {
        if (file) payload.append(key, file, file.name);
      });

      const response = await fetch("/api/applications", {
        method: "POST",
        body: payload,
      });

      const content = await response.json();
      if (!response.ok) {
        throw new Error(content.error || "Unable to complete the application submission.");
      }

      setStatus("success");
      setMessage("Application received successfully. Our admissions team will review the submission shortly.");
      setForm(emptyForm);
      setFiles({
        nationalId: null,
        wassce: null,
        birthCertificate: null,
        passport: null,
        supportingDocuments: null,
      });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="admission-portal" className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">Admission portal</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Begin your <span className="text-blue-700">application journey</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                <GraduationCap size={16} />
                Institutional admissions
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Applicant information</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Complete the registration securely, attach your documents, and receive a professional admissions review.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Location</p>
                  <p className="mt-1">Koidu City, Kono District, Sierra Leone</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Email</p>
                  <a href="mailto:globaltechnologyandgeneralserv@gmail.com" className="mt-1 block text-blue-700 hover:underline">globaltechnologyandgeneralserv@gmail.com</a>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Document policy</p>
                  <p className="mt-1">Accepted formats: PDF, JPG, JPEG, PNG. Maximum upload size: 10 MB per document.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-slate-200 bg-slate-900 p-4 text-white shadow-sm"
            >
              <iframe
                title="GTGS Admission Google Form"
                src={defaultGoogleFormUrl}
                className="h-[320px] w-full rounded-2xl border border-white/10"
              />
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="/application-form"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  <FileText size={16} />
                  Download Application Form
                </a>
                <span className="text-xs text-slate-300">Printable application page available offline.</span>
              </div>
            </motion.div>
          </div>

          <form id="inquiry" onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-700">
                <span className="font-semibold">Full Name</span>
                <input required aria-label="Full Name" value={form.fullName} onChange={(e) => handleFieldChange("fullName", e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-700" />
              </label>
              <label className="space-y-2 text-sm text-slate-700">
                <span className="font-semibold">Email Address</span>
                <input required type="email" aria-label="Email Address" value={form.email} onChange={(e) => handleFieldChange("email", e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-700" />
              </label>
              <label className="space-y-2 text-sm text-slate-700">
                <span className="font-semibold">Phone Number</span>
                <input required aria-label="Phone Number" value={form.phone} onChange={(e) => handleFieldChange("phone", e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-700" />
              </label>
              <label className="space-y-2 text-sm text-slate-700">
                <span className="font-semibold">Gender</span>
                <select required aria-label="Gender" value={form.gender} onChange={(e) => handleFieldChange("gender", e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-700">
                  <option value="">Choose</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Non-binary</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-slate-700">
                <span className="font-semibold">Date of Birth</span>
                <input required type="date" aria-label="Date of Birth" value={form.dob} onChange={(e) => handleFieldChange("dob", e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-700" />
              </label>
              <label className="space-y-2 text-sm text-slate-700 sm:col-span-2">
                <span className="font-semibold">Residential Address</span>
                <input required aria-label="Residential Address" value={form.address} onChange={(e) => handleFieldChange("address", e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-700" />
              </label>
              <label className="space-y-2 text-sm text-slate-700">
                <span className="font-semibold">Programme Applying For</span>
                <input required aria-label="Programme Applying For" value={form.programme} onChange={(e) => handleFieldChange("programme", e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-700" />
              </label>
              <label className="space-y-2 text-sm text-slate-700">
                <span className="font-semibold">Highest Qualification</span>
                <input required aria-label="Highest Qualification" value={form.qualification} onChange={(e) => handleFieldChange("qualification", e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-700" />
              </label>
              <label className="space-y-2 text-sm text-slate-700 sm:col-span-2">
                <span className="font-semibold">Personal Statement</span>
                <textarea required aria-label="Personal Statement" rows={4} value={form.statement} onChange={(e) => handleFieldChange("statement", e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-700" />
              </label>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                ["nationalId", "National ID"],
                ["wassce", "WASSCE Result"],
                ["birthCertificate", "Birth Certificate"],
                ["passport", "Passport Photograph"],
                ["supportingDocuments", "Additional Supporting Documents"],
              ].map(([field, label]) => (
                <label key={field} className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <span className="font-semibold">{label}</span>
                  <div className="flex items-center gap-2 rounded-xl border border-dashed border-slate-300 bg-white px-3 py-3 text-xs">
                    <UploadCloud size={16} className="text-blue-700" />
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(event) => handleFileChange(event, field as keyof typeof files)}
                      className="w-full text-xs"
                    />
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-blue-50 px-4 py-3 text-sm text-slate-700">
              <span>{uploadSummary}</span>
              <span className="font-semibold text-blue-700">Secure document intake</span>
            </div>

            {status !== "idle" && (
              <div className={`mt-5 rounded-2xl px-4 py-3 text-sm ${status === "success" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>{message}</span>
                </div>
              </div>
            )}

            {errors.length > 0 && (
              <ul className="mt-5 list-disc space-y-1 pl-5 text-sm text-rose-700">
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
              <a href="mailto:globaltechnologyandgeneralserv@gmail.com?subject=GTGS%20Application%20Support" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Contact Admissions
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}