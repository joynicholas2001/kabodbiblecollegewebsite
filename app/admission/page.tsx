import { redirect } from "next/navigation";

/**
 * Admission page removed – redirect to home.
 */
export default function AdmissionPage() {
  redirect("/");
}
