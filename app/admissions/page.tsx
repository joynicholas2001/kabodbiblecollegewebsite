import { redirect } from "next/navigation";

/**
 * Admissions section - redirect to the admission form page.
 */
export default function AdmissionsPage() {
  redirect("/admission");
}
