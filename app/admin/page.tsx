import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { readApplications } from "@/lib/applications";
import { adminEmail, authOptions } from "@/lib/auth";

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email || session.user.email.toLowerCase() !== adminEmail.toLowerCase()) {
    redirect("/auth/signin?error=AccessDenied");
  }

  const applications = readApplications();
  const pending = applications.filter((item) => item.status === "pending").length;
  const approved = applications.filter((item) => item.status === "approved").length;
  const rejected = applications.filter((item) => item.status === "rejected").length;

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Institution dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Admissions operations</h1>
          </div>
          <div className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-100">
            Authorized admin: {session.user.email}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-slate-900 p-5"><p className="text-sm text-slate-400">Applications</p><p className="mt-2 text-3xl font-bold">{applications.length}</p></div>
          <div className="rounded-2xl bg-slate-900 p-5"><p className="text-sm text-slate-400">Pending reviews</p><p className="mt-2 text-3xl font-bold">{pending}</p></div>
          <div className="rounded-2xl bg-slate-900 p-5"><p className="text-sm text-slate-400">Approved</p><p className="mt-2 text-3xl font-bold">{approved}</p></div>
          <div className="rounded-2xl bg-slate-900 p-5"><p className="text-sm text-slate-400">Rejected</p><p className="mt-2 text-3xl font-bold">{rejected}</p></div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Applicant management</h2>
            <div className="mt-5 space-y-3">
              {applications.map((application) => (
                <div key={application.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">{application.fullName}</p>
                      <p className="text-sm text-slate-400">{application.email} • {application.programme}</p>
                    </div>
                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-200">{application.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Institution snapshot</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl bg-slate-950 p-4">Application intake channel: Google-first admissions portal</div>
              <div className="rounded-2xl bg-slate-950 p-4">Mail delivery target: {adminEmail}</div>
              <div className="rounded-2xl bg-slate-950 p-4">Review state: {pending > 0 ? `${pending} item(s) awaiting review` : "All caught up"}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
