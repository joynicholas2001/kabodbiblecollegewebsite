import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { getSettings, saveSettings } from "@/lib/admin-data";
import type { SiteSettings } from "@/types/admin";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const settings = await getSettings();
  return NextResponse.json(settings);
}

export async function POST(request: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json()) as Partial<SiteSettings>;
  const current = await getSettings();
  const updated: SiteSettings = {
    ...current,
    ...(typeof body.admissionsComingSoon === "boolean" && {
      admissionsComingSoon: body.admissionsComingSoon,
    }),
    ...(typeof body.admissionsComingSoonMessage === "string" && {
      admissionsComingSoonMessage: body.admissionsComingSoonMessage,
    }),
    ...(typeof body.showAnnouncement === "boolean" && {
      showAnnouncement: body.showAnnouncement,
    }),
    ...(typeof body.announcementText === "string" && {
      announcementText: body.announcementText,
    }),
    ...(body.content && typeof body.content === "object" && {
      content: { ...current.content, ...body.content },
    }),
  };
  await saveSettings(updated);
  return NextResponse.json(updated);
}
