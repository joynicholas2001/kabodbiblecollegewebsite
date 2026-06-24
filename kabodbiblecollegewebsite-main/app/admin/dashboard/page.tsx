"use client";

import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Copy, MessageCircle, LogOut, Settings, Users, ChevronDown, ChevronUp, CheckCircle2, Download } from "lucide-react";
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

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/settings", { credentials: "include" }),
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

  if (loading || !settings) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-2 border-brand-purple border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="font-heading font-bold text-lg text-brand-purple">
            Admin Panel
          </h1>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-brand-purple"
            >
              View site
            </Link>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
        <div className="flex border-t border-gray-100">
          <button
            onClick={() => setTab("content")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              tab === "content"
                ? "border-brand-purple text-brand-purple"
                : "border-transparent text-gray-500 hover:text-gray-700"
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
                : "border-transparent text-gray-500 hover:text-gray-700"
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
            <section className="rounded-xl bg-white border border-gray-200 p-6">
              <h2 className="font-heading font-semibold text-brand-purple mb-4">
                Admissions coming soon
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                When enabled, users cannot submit the admission form and will see your message instead. A banner is shown across the site.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.admissionsComingSoon}
                    onChange={(e) =>
                      handleSaveSettings({
                        admissionsComingSoon: e.target.checked,
                      })
                    }
                    className="h-4 w-4 rounded border-gray-300 text-brand-purple focus:ring-brand-purple"
                  />
                  <span className="text-sm font-medium">Enable “Admissions coming soon”</span>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>
              {saving && (
                <p className="mt-2 text-xs text-gray-500">Saving…</p>
              )}
            </section>

            <section className="rounded-xl bg-white border border-gray-200 p-6">
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
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-purple/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-purple"></div>
                  <span className="ml-3 text-sm font-medium text-gray-700">
                    {settings.showAnnouncement ? "On" : "Off"}
                  </span>
                </label>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                This text will scroll across the very top of the website. Useful for urgent news or updates.
              </p>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="Enter text to scroll..."
                />
              </div>
            </section>

            <section className="rounded-xl bg-white border border-gray-200 p-6">
              <h2 className="font-heading font-semibold text-brand-purple mb-4">
                Editable site text
              </h2>
              <div className="space-y-4">
                {Object.entries(settings.content).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-xs font-medium text-gray-500 mb-1">
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
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {tab === "registrations" && (
          <div className="rounded-xl bg-white border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
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
                  className="text-sm text-gray-500 hover:text-brand-purple hover:underline transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            {submissions.length === 0 ? (
              <div className="p-8 text-center text-gray-500 text-sm">
                No registrations yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Phone</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Place</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700 w-32">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((row) => (
                      <Fragment key={row.id}>
                        <tr
                          className="border-b border-gray-100 hover:bg-gray-50/50"
                        >
                          <td className="py-3 px-4 text-gray-900">{row.fullName}</td>
                          <td className="py-3 px-4 font-mono text-gray-700">{row.phone}</td>
                          <td className="py-3 px-4 text-gray-600">{row.place}</td>
                          <td className="py-3 px-4 text-gray-500">
                            {new Date(row.submittedAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2 flex-wrap">
                              <button
                                onClick={() => copyPhone(row.phone, row.id)}
                                className="p-2 rounded-lg text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                                title="Copy number"
                              >
                                <Copy className="h-4 w-4" />
                              </button>
                              <a
                                href={whatsAppUrl(row.phone)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-green-600 hover:bg-green-50"
                                title="WhatsApp"
                              >
                                <MessageCircle className="h-4 w-4" />
                              </a>
                              <button
                                onClick={() =>
                                  setExpandedId((id) => (id === row.id ? null : row.id))
                                }
                                className="p-2 rounded-lg text-gray-500 hover:bg-gray-200"
                                title="View details"
                              >
                                {expandedId === row.id ? (
                                  <ChevronUp className="h-4 w-4" />
                                ) : (
                                  <ChevronDown className="h-4 w-4" />
                                )}
                              </button>
                            </div>
                            {copiedId === row.id && (
                              <span className="text-xs text-green-600 block">Copied</span>
                            )}
                          </td>
                        </tr>
                        {expandedId === row.id && (
                          <tr className="bg-gray-50">
                            <td colSpan={5} className="py-4 px-4">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                <p><span className="text-gray-500">Languages:</span> {row.languagesKnown}</p>
                                <p><span className="text-gray-500">DOB:</span> {row.dateOfBirth}</p>
                                <p><span className="text-gray-500">Church:</span> {row.churchOrMinistry}</p>
                                <p><span className="text-gray-500">Pastor:</span> {row.pastorName}</p>
                                <p className="flex items-center gap-1.5"><span className="text-gray-500">Saved in Christ:</span> {row.savedInChrist} {row.savedInChrist?.toLowerCase() === "yes" && <CheckCircle2 className="h-4 w-4 text-green-500" />}</p>
                                <p className="flex items-center gap-1.5"><span className="text-gray-500">Baptized:</span> {row.baptizedInWater} {row.baptizedInWater?.toLowerCase() === "yes" && <CheckCircle2 className="h-4 w-4 text-green-500" />}</p>
                                <p><span className="text-gray-500">Music ministry:</span> {row.musicMinistry}</p>
                                <p><span className="text-gray-500">Education:</span> {row.education}</p>
                                <p><span className="text-gray-500">Job:</span> {row.job}</p>
                                <p className="sm:col-span-2"><span className="text-gray-500">Passion:</span> {row.passionForTheLord}</p>
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
