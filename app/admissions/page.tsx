import { redirect } from "next/navigation";

/**
 * Admissions section removed - redirect to home.
 */
export default function AdmissionsPage() {
  redirect("/");
}
