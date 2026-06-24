import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "kabod@2020";
const COOKIE_NAME = "admin_session";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const password = body.password ?? "";

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set(COOKIE_NAME, password, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
  return res;
}
