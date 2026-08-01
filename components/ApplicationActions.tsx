"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ApplicationActions({ applicationId }: { applicationId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function updateStatus(status: "approved" | "rejected") {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/applications/${applicationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        alert("Failed to update status");
        return;
      }

      // Refresh the page so the new status appears
      router.refresh();
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => updateStatus("approved")}
        disabled={loading}
        className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-500 disabled:opacity-50"
      >
        Accept
      </button>
      <button
        onClick={() => updateStatus("rejected")}
        disabled={loading}
        className="rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-rose-500 disabled:opacity-50"
      >
        Decline
      </button>
    </div>
  );
}