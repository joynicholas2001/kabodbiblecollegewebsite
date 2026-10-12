"use client";

import { useState, useEffect } from "react";
import { Bell } from "lucide-react";

export default function AnnouncementBar() {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/settings", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (mounted && data) setSettings(data);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  if (!settings?.showAnnouncement || !settings?.announcementText) return null;

  return (
    <div
      role="region"
      aria-label="Institutional Announcement"
      className="bg-brand-navy-dark text-white py-2 overflow-hidden whitespace-nowrap border-b border-brand-gold/30 relative z-[60] shadow-sm flex items-center"
    >
      <div className="hidden sm:flex items-center gap-1.5 pl-4 pr-3 py-0.5 bg-brand-forest text-brand-gold text-[11px] font-bold uppercase tracking-wider rounded-r-full shrink-0 z-10 shadow-sm border border-brand-gold/30">
        <Bell className="w-3 h-3 text-brand-gold animate-pulse" />
        <span>Notice</span>
      </div>

      <div className="animate-marquee inline-block pl-4">
        <span className="text-xs sm:text-sm font-medium tracking-wide mx-10 font-telugu text-white/95">
          {settings.announcementText}
        </span>
        {/* Duplicate text for seamless looping */}
        <span className="text-xs sm:text-sm font-medium tracking-wide mx-10 font-telugu text-white/95">
          {settings.announcementText}
        </span>
        <span className="text-xs sm:text-sm font-medium tracking-wide mx-10 font-telugu text-white/95">
          {settings.announcementText}
        </span>
        <span className="text-xs sm:text-sm font-medium tracking-wide mx-10 font-telugu text-white/95">
          {settings.announcementText}
        </span>
      </div>
    </div>
  );
}
