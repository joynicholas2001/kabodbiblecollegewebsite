import { cookies } from "next/headers";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "kabod@2020";
const COOKIE_NAME = "admin_session";

export async function isAdmin(): Promise<boolean> {
  const c = await cookies();
  const session = c.get(COOKIE_NAME)?.value;
  return session === ADMIN_PASSWORD;
}

export function getAdminPassword(): string {
  return ADMIN_PASSWORD;
}
