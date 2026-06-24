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
    fetch("/api/settings")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => data && setSettings(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
  }, []);

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
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-200 p-6 sm:p-8 text-center">
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
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
        <p className="text-gray-600 leading-relaxed mb-6">
          {settings.admissionsComingSoonMessage}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/admission"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand-purple text-white text-sm font-semibold hover:bg-brand-purple-dark"
          >
            Admission page
          </Link>
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border-2 border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
