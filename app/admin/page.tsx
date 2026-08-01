import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { readApplications } from "@/lib/applications";
import { adminEmail, authOptions } from "@/lib/auth";
import { ApplicationActions } from "@/components/ApplicationActions"; // we will create this next

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);

  if (
    !session?.user?.email ||
    session.user.email.toLowerCase() !== adminEmail.toLowerCase()
  ) {
    redirect("/auth/signin?error=AccessDenied");
  }

  const applications = readApplications();
  const pending = applications.filter((item) => item.status === "pending").length;
  const approved = applications.filter((item) => item.status === "approved").length;
  const rejected = applications.filter((item) => item.status === "rejected").length;

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
              Institution dashboard
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white">
              Admissions operations
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
            >
              View public site
            </a>
            <div className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-100">
              Authorized admin: {session.user.email}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Applications</p>
            <p className="mt-2 text-3xl font-bold">{applications.length}</p>
          </div>
          <div className="rounded-2xl bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Pending reviews</p>
            <p className="mt-2 text-3xl font-bold">{pending}</p>
          </div>
          <div className="rounded-2xl bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Approved</p>
            <p className="mt-2 text-3xl font-bold">{approved}</p>
          </div>
          <div className="rounded-2xl bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Rejected</p>
            <p className="mt-2 text-3xl font-bold">{rejected}</p>
          </div>
        </div>

        {/* Applications list */}
        <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Applicant management</h2>
            <div className="mt-5 space-y-3">
              {applications.length === 0 && (
                <p className="text-slate-400">No applications yet.</p>
              )}

              {applications.map((application) => (
                <div
                  key={application.id}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">
                        {application.fullName}
                      </p>
                      <p className="text-sm text-slate-400">
                        {application.email} • {application.programme}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Submitted:{" "}
                        {new Date(application.submittedAt).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-200">
                        {application.status}
                      </span>

                      {/* Accept / Decline buttons only for pending */}
                      {application.status === "pending" && (
                        <ApplicationActions applicationId={application.id} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Snapshot sidebar */}
          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Institution snapshot</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl bg-slate-950 p-4">
                Application intake channel: Google-first admissions portal
              </div>
              <div className="rounded-2xl bg-slate-950 p-4">
                Mail delivery target: {adminEmail}
              </div>
              <div className="rounded-2xl bg-slate-950 p-4">
                Review state:{" "}
                {pending > 0
                  ? `${pending} item(s) awaiting review`
                  : "All caught up"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}