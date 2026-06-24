"use client";

import { useState, useEffect } from "react";

export default function AnnouncementBar() {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/settings")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (mounted && data) setSettings(data);
      })
      .catch(() => {});
    return () => { mounted = false; };
  }, []);

  if (!settings?.showAnnouncement || !settings?.announcementText) return null;

  return (
    <div className="bg-brand-purple text-white py-1.5 overflow-hidden whitespace-nowrap border-b border-brand-gold/20 relative z-[60] shadow-sm">
      <div className="animate-marquee inline-block">
        <span className="text-xs font-medium tracking-wide mx-12 font-telugu">
          {settings.announcementText}
        </span>
        {/* Duplicate text for seamless looping */}
        <span className="text-xs font-medium tracking-wide mx-12 font-telugu">
          {settings.announcementText}
        </span>
        <span className="text-xs font-medium tracking-wide mx-12 font-telugu">
          {settings.announcementText}
        </span>
        <span className="text-xs font-medium tracking-wide mx-12 font-telugu">
          {settings.announcementText}
        </span>
      </div>
    </div>
  );
}
