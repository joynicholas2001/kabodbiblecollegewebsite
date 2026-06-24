"use client";

import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Copy, MessageCircle, LogOut, Settings, Users, ChevronDown, ChevronUp, CheckCircle2, Download, Trash2 } from "lucide-react";
import type { SiteSettings } from "@/types/admin";
import type { AdmissionSubmission } from "@/types/admin";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"content" | "registrations">("content");
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [submissions, setSubmissions] = useState<AdmissionSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/settings", { credentials: "include", cache: "no-store" }),
      fetch("/api/admin/submissions", { credentials: "include" }),
    ]).then(([settingsRes, submissionsRes]) => {
      if (settingsRes.status === 401 || submissionsRes.status === 401) {
        router.replace("/admin");
        return;
      }
      if (settingsRes.ok) settingsRes.json().then(setSettings);
      if (submissionsRes.ok) submissionsRes.json().then(setSubmissions);
    }).finally(() => setLoading(false));
  }, [router]);

  const refreshSubmissions = () => {
    fetch("/api/admin/submissions", { credentials: "include" })
      .then((r) => r.ok ? r.json() : [])
      .then(setSubmissions);
  };

  const handleSaveSettings = async (updates: Partial<SiteSettings>) => {
    if (!settings) return;
    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(updates),
      });
      if (res.ok) {
        const next = await res.json();
        setSettings(next);
      }
    } finally {
      setSaving(false);
    }
  };

  const copyPhone = (phone: string, id: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadExcel = () => {
    if (submissions.length === 0) return;

    const BOM = "\uFEFF";
    const headers = [
      "Name", "Phone", "Place", "Date of Birth", "Languages", 
      "Church/Ministry", "Pastor Name", "Saved in Christ", 
      "Baptized in Water", "Music Ministry", "Education", 
      "Job", "Passion for the Lord", "Submitted At"
    ];

    const escapeCsv = (str: string | undefined | null) => {
      if (!str) return '""';
      const cleanStr = String(str).replace(/"/g, '""');
      return `"${cleanStr}"`;
    };

    const rows = submissions.map(s => [
      escapeCsv(s.fullName),
      escapeCsv(s.phone),
      escapeCsv(s.place),
      escapeCsv(s.dateOfBirth),
      escapeCsv(s.languagesKnown),
      escapeCsv(s.churchOrMinistry),
      escapeCsv(s.pastorName),
      escapeCsv(s.savedInChrist),
      escapeCsv(s.baptizedInWater),
      escapeCsv(s.musicMinistry),
      escapeCsv(s.education),
      escapeCsv(s.job),
      escapeCsv(s.passionForTheLord),
      escapeCsv(new Date(s.submittedAt).toLocaleString())
    ].join(","));

    const csvContent = [headers.join(","), ...rows].join("\n");
    const blobString = BOM + csvContent;

    const blob = new Blob([blobString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "KBC_Registrations.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const whatsAppUrl = (phone: string) => {
    const num = phone.replace(/\D/g, "");
    return `https://wa.me/${num}`;
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
    router.replace("/admin");
  };

  const handleDeleteSubmission = async (id: string, name: string) => {
    const confirmed = window.confirm(
      `Delete registration for ${name}? This action cannot be undone.`
    );
    if (!confirmed) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/submissions?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) {
        return;
      }

      setSubmissions((prev) => prev.filter((entry) => entry.id !== id));
      setExpandedId((prev) => (prev === id ? null : prev));
      setCopiedId((prev) => (prev === id ? null : prev));
    } finally {
      setDeletingId(null);
    }
  };

  if (loading || !settings) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-2 border-brand-purple border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-light">
      <header className="bg-brand-light border-b border-brand-card sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="font-heading font-bold text-lg text-brand-purple">
            Admin Panel
          </h1>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-sm text-brand-muted hover:text-brand-purple-dark"
            >
              View site
            </Link>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-brand-muted hover:bg-brand-card/35"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
        <div className="flex border-t border-brand-card/50">
          <button
            onClick={() => setTab("content")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              tab === "content"
                ? "border-brand-purple text-brand-purple"
                : "border-transparent text-brand-muted hover:text-brand-purple-dark"
            }`}
          >
            <Settings className="h-4 w-4" />
            Site content
          </button>
          <button
            onClick={() => setTab("registrations")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              tab === "registrations"
                ? "border-brand-purple text-brand-purple"
                : "border-transparent text-brand-muted hover:text-brand-purple-dark"
            }`}
          >
            <Users className="h-4 w-4" />
            Registrations ({submissions.length})
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        {tab === "content" && (
          <div className="space-y-8">
            <section className="rounded-xl bg-brand-card/35 border border-brand-card p-6">
              <h2 className="font-heading font-semibold text-brand-purple mb-4">
                Admissions coming soon
              </h2>
              <p className="text-sm text-brand-muted mb-4">
                When enabled, users cannot submit the admission form and will see your message instead. A banner is shown across the site.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.admissionsComingSoon}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setSettings((prev) =>
                        prev ? { ...prev, admissionsComingSoon: checked } : prev
                      );
                      handleSaveSettings({
                        admissionsComingSoon: checked,
                      });
                    }}
                    className="h-4 w-4 rounded border-brand-card text-brand-purple focus:ring-brand-accent"
                  />
                  <span className="text-sm font-medium">Enable “Admissions coming soon”</span>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-purple-dark mb-1">
                  Message shown to users (editable)
                </label>
                <textarea
                  value={settings.admissionsComingSoonMessage}
                  onChange={(e) =>
                    setSettings((s) =>
                      s ? { ...s, admissionsComingSoonMessage: e.target.value } : s
                    )
                  }
                  onBlur={(e) =>
                    handleSaveSettings({
                      admissionsComingSoonMessage: e.target.value,
                    })
                  }
                  rows={2}
                  className="w-full rounded-lg border border-brand-card px-3 py-2 text-sm text-brand-purple-dark focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
              </div>
              {saving && (
                <p className="mt-2 text-xs text-brand-muted">Saving…</p>
              )}
            </section>

            <section className="rounded-xl bg-brand-card/35 border border-brand-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading font-semibold text-brand-purple">
                  Scrolling Announcement Bar
                </h2>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.showAnnouncement}
                    onChange={(e) =>
                      handleSaveSettings({
                        showAnnouncement: e.target.checked,
                      })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-brand-card peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-accent/40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-brand-card after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-purple"></div>
                  <span className="ml-3 text-sm font-medium text-brand-purple-dark">
                    {settings.showAnnouncement ? "On" : "Off"}
                  </span>
                </label>
              </div>
              <p className="text-sm text-brand-muted mb-4">
                This text will scroll across the very top of the website. Useful for urgent news or updates.
              </p>
              <div>
                <label className="block text-sm font-medium text-brand-purple-dark mb-1">
                  Announcement Text
                </label>
                <textarea
                  value={settings.announcementText}
                  onChange={(e) =>
                    setSettings((s) =>
                      s ? { ...s, announcementText: e.target.value } : s
                    )
                  }
                  onBlur={(e) =>
                    handleSaveSettings({
                      announcementText: e.target.value,
                    })
                  }
                  rows={2}
                  className="w-full rounded-lg border border-brand-card px-3 py-2 text-sm text-brand-purple-dark focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  placeholder="Enter text to scroll..."
                />
              </div>
            </section>

            <section className="rounded-xl bg-brand-card/35 border border-brand-card p-6">
              <h2 className="font-heading font-semibold text-brand-purple mb-4">
                Editable site text
              </h2>
              <div className="space-y-4">
                {Object.entries(settings.content).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-xs font-medium text-brand-muted mb-1">
                      {key}
                    </label>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        setSettings((s) =>
                          s
                            ? {
                                ...s,
                                content: { ...s.content, [key]: e.target.value },
                              }
                            : s
                        )
                      }
                      onBlur={(e) =>
                        handleSaveSettings({
                          content: { [key]: e.target.value },
                        })
                      }
                      className="w-full rounded-lg border border-brand-card px-3 py-2 text-sm text-brand-purple-dark focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {tab === "registrations" && (
          <div className="rounded-xl bg-brand-card/35 border border-brand-card overflow-hidden">
            <div className="px-4 py-3 border-b border-brand-card flex items-center justify-between">
              <h2 className="font-heading font-semibold text-brand-purple">
                Admission registrations
              </h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleDownloadExcel}
                  className="flex items-center gap-1.5 text-sm font-medium text-brand-purple hover:text-brand-purple-dark bg-brand-purple/10 px-3 py-1.5 rounded-lg transition-colors"
                  title="Download all as Excel/CSV"
                >
                  <Download className="h-4 w-4" />
                  Download Excel
                </button>
                <button
                  onClick={refreshSubmissions}
                  className="text-sm text-brand-muted hover:text-brand-purple hover:underline transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            {submissions.length === 0 ? (
              <div className="p-8 text-center text-brand-muted text-sm">
                No registrations yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-light border-b border-brand-card">
                      <th className="text-left py-3 px-4 font-semibold text-brand-purple-dark">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-brand-purple-dark">Phone</th>
                      <th className="text-left py-3 px-4 font-semibold text-brand-purple-dark">Place</th>
                      <th className="text-left py-3 px-4 font-semibold text-brand-purple-dark">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-brand-purple-dark w-32">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((row) => (
                      <Fragment key={row.id}>
                        <tr
                          className="border-b border-brand-card/60 hover:bg-brand-light/70"
                        >
                          <td className="py-3 px-4 text-brand-purple-dark">{row.fullName}</td>
                          <td className="py-3 px-4 font-mono text-brand-secondary">{row.phone}</td>
                          <td className="py-3 px-4 text-brand-muted">{row.place}</td>
                          <td className="py-3 px-4 text-brand-muted">
                            {new Date(row.submittedAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2 flex-wrap">
                              <button
                                onClick={() => copyPhone(row.phone, row.id)}
                                className="p-2 rounded-lg text-brand-muted hover:bg-brand-card hover:text-brand-purple-dark"
                                title="Copy number"
                              >
                                <Copy className="h-4 w-4" />
                              </button>
                              <a
                                href={whatsAppUrl(row.phone)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-brand-purple hover:bg-brand-accent/30"
                                title="WhatsApp"
                              >
                                <MessageCircle className="h-4 w-4" />
                              </a>
                              <button
                                onClick={() =>
                                  setExpandedId((id) => (id === row.id ? null : row.id))
                                }
                                className="p-2 rounded-lg text-brand-muted hover:bg-brand-card"
                                title="View details"
                              >
                                {expandedId === row.id ? (
                                  <ChevronUp className="h-4 w-4" />
                                ) : (
                                  <ChevronDown className="h-4 w-4" />
                                )}
                              </button>
                              <button
                                onClick={() => handleDeleteSubmission(row.id, row.fullName)}
                                disabled={deletingId === row.id}
                                className="p-2 rounded-lg text-brand-purple hover:bg-brand-card disabled:opacity-60 disabled:cursor-not-allowed"
                                title="Delete registration"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                            {copiedId === row.id && (
                              <span className="text-xs text-brand-purple block">Copied</span>
                            )}
                          </td>
                        </tr>
                        {expandedId === row.id && (
                          <tr className="bg-brand-light">
                            <td colSpan={5} className="py-4 px-4">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                <p><span className="text-brand-muted">Languages:</span> {row.languagesKnown}</p>
                                <p><span className="text-brand-muted">DOB:</span> {row.dateOfBirth}</p>
                                <p><span className="text-brand-muted">Church:</span> {row.churchOrMinistry}</p>
                                <p><span className="text-brand-muted">Pastor:</span> {row.pastorName}</p>
                                <p className="flex items-center gap-1.5"><span className="text-brand-muted">Saved in Christ:</span> {row.savedInChrist} {row.savedInChrist?.toLowerCase() === "yes" && <CheckCircle2 className="h-4 w-4 text-brand-purple" />}</p>
                                <p className="flex items-center gap-1.5"><span className="text-brand-muted">Baptized:</span> {row.baptizedInWater} {row.baptizedInWater?.toLowerCase() === "yes" && <CheckCircle2 className="h-4 w-4 text-brand-purple" />}</p>
                                <p><span className="text-brand-muted">Music ministry:</span> {row.musicMinistry}</p>
                                <p><span className="text-brand-muted">Education:</span> {row.education}</p>
                                <p><span className="text-brand-muted">Job:</span> {row.job}</p>
                                <p className="sm:col-span-2"><span className="text-brand-muted">Passion:</span> {row.passionForTheLord}</p>
                              </div>
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {/* Expandable row detail: show full submission in a modal or expand? For now table is clear. User can add "View" later. */}
          </div>
        )}
      </main>
    </div>
  );
}
