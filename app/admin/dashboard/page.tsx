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
      <div className="min-h-screen bg-brand-ivory flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 rounded-full border-2 border-brand-navy border-t-transparent animate-spin" />
          <p className="text-brand-slate text-sm font-medium">Loading…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-ivory">
      <header className="bg-white border-b border-brand-border sticky top-0 z-10 shadow-sm">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="font-heading font-bold text-lg text-brand-navy">
            KBC Admin Panel
          </h1>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-sm text-brand-slate hover:text-brand-navy transition-colors px-3 py-1.5 rounded-lg hover:bg-brand-ivory"
            >
              View site
            </Link>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-brand-slate hover:bg-brand-ivory hover:text-red-600 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
        <div className="flex border-t border-brand-border/50">
          <button
            onClick={() => setTab("content")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              tab === "content"
                ? "border-brand-navy text-brand-navy bg-brand-ivory/60"
                : "border-transparent text-brand-slate hover:text-brand-navy"
            }`}
          >
            <Settings className="h-4 w-4" />
            Site content
          </button>
          <button
            onClick={() => setTab("registrations")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              tab === "registrations"
                ? "border-brand-navy text-brand-navy bg-brand-ivory/60"
                : "border-transparent text-brand-slate hover:text-brand-navy"
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
            <section className="rounded-2xl bg-white border border-brand-border shadow-card p-6">
              <h2 className="font-heading font-semibold text-brand-navy mb-2">
                Admissions coming soon
              </h2>
              <p className="text-sm text-brand-slate mb-4">
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
                    className="h-4 w-4 rounded border-brand-border text-brand-navy focus:ring-brand-gold"
                  />
                  <span className="text-sm font-medium text-brand-navy">Enable “Admissions coming soon”</span>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-navy mb-1">
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
                  className="w-full rounded-lg border border-brand-border px-3 py-2 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
              </div>
              {saving && (
                <p className="mt-2 text-xs text-brand-slate">Saving…</p>
              )}
            </section>

            <section className="rounded-2xl bg-white border border-brand-border shadow-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading font-semibold text-brand-navy">
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
                  <div className="w-11 h-6 bg-brand-border peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-gold/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-brand-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-navy"></div>
                  <span className="ml-3 text-sm font-medium text-brand-navy">
                    {settings.showAnnouncement ? "On" : "Off"}
                  </span>
                </label>
              </div>
              <p className="text-sm text-brand-slate mb-4">
                This text will scroll across the very top of the website. Useful for urgent news or updates.
              </p>
              <div>
                <label className="block text-sm font-medium text-brand-navy mb-1">
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
                  className="w-full rounded-lg border border-brand-border px-3 py-2 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  placeholder="Enter text to scroll..."
                />
              </div>
            </section>

            <section className="rounded-2xl bg-white border border-brand-border shadow-card p-6">
              <h2 className="font-heading font-semibold text-brand-navy mb-4">
                Editable site text
              </h2>
              <div className="space-y-4">
                {Object.entries(settings.content).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-xs font-medium text-brand-slate mb-1">
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
                      className="w-full rounded-lg border border-brand-border px-3 py-2 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {tab === "registrations" && (
          <div className="rounded-2xl bg-white border border-brand-border shadow-card overflow-hidden">
            <div className="px-4 py-3 border-b border-brand-border flex items-center justify-between bg-brand-ivory/50">
              <h2 className="font-heading font-semibold text-brand-navy">
                Admission registrations
              </h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleDownloadExcel}
                  className="flex items-center gap-1.5 text-sm font-medium text-brand-navy hover:text-brand-navy-dark bg-brand-navy/10 px-3 py-1.5 rounded-lg transition-colors"
                  title="Download all as Excel/CSV"
                >
                  <Download className="h-4 w-4" />
                  Download Excel
                </button>
                <button
                  onClick={refreshSubmissions}
                  className="text-sm text-brand-slate hover:text-brand-navy hover:underline transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            {submissions.length === 0 ? (
              <div className="p-8 text-center text-brand-slate text-sm">
                No registrations yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-ivory border-b border-brand-border">
                      <th className="text-left py-3 px-4 font-semibold text-brand-navy">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-brand-navy">Phone</th>
                      <th className="text-left py-3 px-4 font-semibold text-brand-navy">Place</th>
                      <th className="text-left py-3 px-4 font-semibold text-brand-navy">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-brand-navy w-32">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((row) => (
                      <Fragment key={row.id}>
                        <tr
                          className="border-b border-brand-border/60 hover:bg-brand-ivory/70"
                        >
                          <td className="py-3 px-4 text-brand-navy font-medium">{row.fullName}</td>
                          <td className="py-3 px-4 font-mono text-brand-forest">{row.phone}</td>
                          <td className="py-3 px-4 text-brand-slate">{row.place}</td>
                          <td className="py-3 px-4 text-brand-slate">
                            {new Date(row.submittedAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2 flex-wrap">
                              <button
                                onClick={() => copyPhone(row.phone, row.id)}
                                className="p-2 rounded-lg text-brand-slate hover:bg-brand-ivory hover:text-brand-navy transition-colors"
                                title="Copy number"
                              >
                                <Copy className="h-4 w-4" />
                              </button>
                              <a
                                href={whatsAppUrl(row.phone)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-brand-forest hover:bg-brand-forest/10 transition-colors"
                                title="WhatsApp"
                              >
                                <MessageCircle className="h-4 w-4" />
                              </a>
                              <button
                                onClick={() =>
                                  setExpandedId((id) => (id === row.id ? null : row.id))
                                }
                                className="p-2 rounded-lg text-brand-slate hover:bg-brand-ivory transition-colors"
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
                                className="p-2 rounded-lg text-red-500 hover:bg-red-50 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                                title="Delete registration"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                            {copiedId === row.id && (
                              <span className="text-xs text-brand-forest block">Copied</span>
                            )}
                          </td>
                        </tr>
                        {expandedId === row.id && (
                          <tr className="bg-brand-ivory/60">
                            <td colSpan={5} className="py-4 px-4">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                <p><span className="text-brand-slate font-medium">Languages:</span> {row.languagesKnown}</p>
                                <p><span className="text-brand-slate font-medium">DOB:</span> {row.dateOfBirth}</p>
                                <p><span className="text-brand-slate font-medium">Church:</span> {row.churchOrMinistry}</p>
                                <p><span className="text-brand-slate font-medium">Pastor:</span> {row.pastorName}</p>
                                <p className="flex items-center gap-1.5"><span className="text-brand-slate font-medium">Saved in Christ:</span> {row.savedInChrist} {row.savedInChrist?.toLowerCase() === "yes" && <CheckCircle2 className="h-4 w-4 text-brand-forest" />}</p>
                                <p className="flex items-center gap-1.5"><span className="text-brand-slate font-medium">Baptized:</span> {row.baptizedInWater} {row.baptizedInWater?.toLowerCase() === "yes" && <CheckCircle2 className="h-4 w-4 text-brand-forest" />}</p>
                                <p><span className="text-brand-slate font-medium">Music ministry:</span> {row.musicMinistry}</p>
                                <p><span className="text-brand-slate font-medium">Education:</span> {row.education}</p>
                                <p><span className="text-brand-slate font-medium">Job:</span> {row.job}</p>
                                <p className="sm:col-span-2"><span className="text-brand-slate font-medium">Passion:</span> {row.passionForTheLord}</p>
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
