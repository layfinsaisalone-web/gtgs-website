import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import nodemailer from "nodemailer";
import { addApplication, saveUploadFile } from "@/lib/applications";

const institutionEmail = process.env.INSTITUTION_EMAIL || "globaltechnologyandgeneralserv@gmail.com";

async function sendInstitutionEmail(application: {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
  address: string;
  programme: string;
  qualification: string;
  statement: string;
  documents: Record<string, string>;
}) {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER || process.env.GMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: true,
    auth: { user, pass },
  });

  const documentList = Object.entries(application.documents)
    .map(([field, value]) => `• ${field}: ${value}`)
    .join("\n");

  await transporter.sendMail({
    from: user,
    to: institutionEmail,
    subject: `New GTGS application received from ${application.fullName}`,
    text: [
      `Applicant: ${application.fullName}`,
      `Email: ${application.email}`,
      `Phone: ${application.phone}`,
      `Gender: ${application.gender}`,
      `Date of Birth: ${application.dob}`,
      `Address: ${application.address}`,
      `Programme: ${application.programme}`,
      `Qualification: ${application.qualification}`,
      `Statement: ${application.statement}`,
      `Documents: ${documentList || "None attached"}`,
    ].join("\n\n"),
  });
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const applicant = {
      id: randomUUID(),
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      gender: String(formData.get("gender") || ""),
      dob: String(formData.get("dob") || ""),
      address: String(formData.get("address") || ""),
      programme: String(formData.get("programme") || ""),
      qualification: String(formData.get("qualification") || ""),
      statement: String(formData.get("statement") || ""),
      submittedAt: new Date().toISOString(),
      status: "pending" as const,
      documents: {} as Record<string, string>,
    };

    const documentFields = [
      "nationalId",
      "wassce",
      "birthCertificate",
      "passport",
      "supportingDocuments",
    ];

    for (const field of documentFields) {
      const file = formData.get(field);
      if (file instanceof File) {
        const fileName = `${applicant.id}-${field}-${file.name}`;
        const savedPath = saveUploadFile(fileName, await file.arrayBuffer());
        applicant.documents[field] = savedPath;
      }
    }

    addApplication(applicant);

    await sendInstitutionEmail(applicant);

    return NextResponse.json({ success: true, application: applicant });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to complete submission." },
      { status: 500 },
    );
  }
}
