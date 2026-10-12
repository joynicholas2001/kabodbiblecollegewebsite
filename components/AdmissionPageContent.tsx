"use client";

import { useState, useEffect } from "react";
import AdmissionForm from "@/components/AdmissionForm";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

type Settings = {
  admissionsComingSoon: boolean;
  admissionsComingSoonMessage: string;
  content: Record<string, string>;
};

export default function AdmissionPageContent() {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => data && setSettings(data))
      .catch(() => {});
  }, []);

  if (settings === null) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 rounded-full border-2 border-brand-navy border-t-transparent animate-spin" />
          <p className="text-brand-slate text-sm font-medium">Loading…</p>
        </div>
      </div>
    );
  }

  const title =
    settings.content?.admissionPageTitle ??
    "Kabod Bible College Admission Form";
  const intro =
    settings.content?.admissionPageIntro ??
    "Greetings in the mighty name of Jesus Christ. Kabod Bible College welcomes you. Please complete your admission process below.";

  if (settings.admissionsComingSoon) {
    return (
      <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-card border border-brand-border text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-forest/10 border border-brand-forest/20 text-brand-gold mb-5">
          <Clock className="h-8 w-8" />
        </div>
        <span className="inline-block px-3 py-1 rounded-full bg-brand-gold/15 text-brand-gold-dark text-xs font-bold uppercase tracking-widest mb-3 border border-brand-gold/30">
          Coming Soon
        </span>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy mb-3">
          Admissions Opening Soon
        </h2>
        <p className="text-brand-slate leading-relaxed mb-8 text-sm sm:text-base">
          {settings.admissionsComingSoonMessage}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-forest underline-offset-2 hover:underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy mb-3">
          {title}
        </h1>
        <p className="text-brand-slate leading-relaxed text-sm sm:text-base">
          {intro}
        </p>
      </div>

      {/* Note Banner */}
      <div className="rounded-xl bg-brand-forest/8 border border-brand-forest/20 p-4 sm:p-5 mb-8">
        <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
          <strong className="text-brand-navy">Note:</strong> After you submit
          this form, the team of Kabod Bible College will contact you to discuss
          your admission and guide you through the next steps for joining our
          classes.
        </p>
      </div>

      <AdmissionForm />

      <p className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-forest underline-offset-2 hover:underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </p>
    </>
  );
}
