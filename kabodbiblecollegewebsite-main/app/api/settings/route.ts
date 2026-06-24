import { NextResponse } from "next/server";
import { getSettings } from "@/lib/admin-data";

/** Public API: returns only what the site needs (coming soon + message + content). */
export async function GET() {
  const settings = await getSettings();
  return NextResponse.json({
    admissionsComingSoon: settings.admissionsComingSoon,
    admissionsComingSoonMessage: settings.admissionsComingSoonMessage,
    showAnnouncement: settings.showAnnouncement,
    announcementText: settings.announcementText,
    content: settings.content,
  });
}
