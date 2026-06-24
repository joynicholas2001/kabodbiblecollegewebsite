import { redirect } from "next/navigation";

/**
 * Programs page removed – redirect to home.
 */
export default function ProgramsPage() {
  redirect("/");
}
