export type ApplicationStatus = "pending" | "approved" | "rejected";

export type Application = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
  address: string;
  programme: string;
  qualification: string;
  statement: string;
  submittedAt: string;
  status: ApplicationStatus;
  documents: Record<string, string>;
};
