import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { getSubmissions } from "@/lib/admin-data";

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const list = await getSubmissions();
  return NextResponse.json(list);
}
