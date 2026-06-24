"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

type Settings = {
  admissionsComingSoon: boolean;
  admissionsComingSoonMessage: string;
};

const DISMISS_KEY = "admissions-coming-soon-dismissed";

export default function AdmissionsComingSoonBanner() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    fetch("/api/settings", { cache: "no-store" })
      .then((r) => r.ok ? r.json() : null)
      .then((data) => data && setSettings(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
  }, []);

  useEffect(() => {
    if (!settings?.admissionsComingSoon) return;
    if (!dismissed) return;
    sessionStorage.removeItem(DISMISS_KEY);
    setDismissed(false);
  }, [settings?.admissionsComingSoon, dismissed]);

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  if (!settings?.admissionsComingSoon || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden
      />
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-brand-light shadow-card-hover border-0 p-6 sm:p-8 text-center">
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-1 rounded-lg text-brand-muted hover:text-brand-purple hover:bg-brand-soft/50 transition-colors duration-300 ease-in-out"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/20 text-brand-purple mb-4">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-brand-purple mb-3">
          Admissions Coming Soon
        </h2>
        <p className="text-brand-muted leading-relaxed mb-6">
          {settings.admissionsComingSoonMessage}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/admission"
            className="btn-primary px-5 py-2.5 text-sm"
          >
            Admission page
          </Link>
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-[8px] border border-brand-purple text-brand-purple text-sm font-semibold hover:bg-brand-purple/5 transition-all duration-300 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
