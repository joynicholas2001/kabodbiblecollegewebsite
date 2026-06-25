"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Settings = {
  admissionsComingSoon: boolean;
  admissionsComingSoonMessage: string;
  content: Record<string, string>;
};

export default function AdmissionPageContent() {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    fetch("/api/settings", { cache: "no-store" })
      .then((r) => r.ok ? r.json() : null)
      .then((data) => data && setSettings(data))
      .catch(() => {});
  }, []);

  if (settings === null) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <div className="h-8 w-8 rounded-full border-2 border-brand-purple border-t-transparent animate-spin" />
      </div>
    );
  }

  const title = settings.content?.admissionPageTitle ?? "Kabod Bible College Admission Form";
  const intro = settings.content?.admissionPageIntro ?? "Greetings in the mighty name of Jesus Christ. Kabod Bible College welcomes you. Please complete your admission process below.";

  if (settings.admissionsComingSoon) {
    return (
      <div className="min-h-screen bg-brand-light pt-24 pb-16">
        <div className="mx-auto max-w-[600px] px-4 sm:px-6">
          <div className="rounded-2xl bg-brand-card/35 p-8 sm:p-10 shadow-card border border-brand-card text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/20 text-brand-purple mb-6">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl text-brand-purple mb-4">
              Admissions Coming Soon
            </h1>
            <p className="text-brand-muted leading-relaxed mb-8">
              {settings.admissionsComingSoonMessage}
            </p>
            <Link
              href="/"
              className="text-sm font-medium text-brand-purple hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="font-heading font-bold text-2xl sm:text-3xl text-brand-purple mb-3">
          {title}
        </h1>
        <p className="text-brand-muted leading-relaxed">
          {intro}
        </p>
      </div>
      <div className="rounded-xl bg-brand-purple/5 border border-brand-purple/20 p-4 sm:p-5 mb-8">
        <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
          <strong className="text-brand-purple">Note:</strong> After you
          submit this form, the team of Kabod Bible College will contact you
          to discuss your admission and guide you through the next steps for
          joining our classes.
        </p>
      </div>

      <p className="mt-8 text-center">
        <Link
          href="/"
          className="text-sm font-medium text-brand-purple hover:text-brand-purple-dark hover:underline"
        >
          ← Back to Home
        </Link>
      </p>
    </>
  );
}
