import type { Metadata } from "next";
import AdmissionPageContent from "@/components/AdmissionPageContent";
import { GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Admission",
  description:
    "Apply for admission to Kabod Bible College. Complete the admission form and our team will contact you.",
};

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-brand-light pt-12 pb-16">
      <div className="mx-auto max-w-[600px] px-4 sm:px-6">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-purple text-brand-gold mb-6 mx-auto block">
          <GraduationCap className="h-7 w-7" />
        </div>
        <AdmissionPageContent />
      </div>
    </div>
  );
}
