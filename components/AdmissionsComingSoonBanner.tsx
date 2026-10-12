"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Clock, ArrowRight } from "lucide-react";

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
      .then((r) => (r.ok ? r.json() : null))
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
        className="absolute inset-0 bg-brand-navy-dark/70 backdrop-blur-sm"
        aria-hidden="true"
        onClick={handleDismiss}
      />
      <div className="relative z-10 w-full max-w-md rounded-3xl bg-white shadow-2xl border border-brand-border p-6 sm:p-8 text-center animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 rounded-xl text-brand-slate hover:text-brand-navy hover:bg-brand-ivory transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-forest/10 text-brand-forest mb-5 border border-brand-forest/20">
          <Clock className="h-8 w-8 text-brand-gold-dark" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full bg-brand-gold/15 text-brand-gold-dark text-xs font-bold uppercase tracking-widest mb-2 border border-brand-gold/30">
          Admissions Notice
        </span>

        <h2 className="font-heading font-bold text-2xl text-brand-navy mb-3">
          Admissions Opening Soon
        </h2>

        <p className="text-brand-slate leading-relaxed mb-6 text-sm sm:text-base">
          {settings.admissionsComingSoonMessage}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/admission"
            onClick={handleDismiss}
            className="btn-primary text-sm py-2.5 px-5"
          >
            <span>Admission Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={handleDismiss}
            className="btn-secondary text-sm py-2.5 px-5"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
