import type { Metadata } from "next";
import FounderSection from "@/components/about/FounderSection";
import AboutUsSection from "@/components/about/AboutUsSection";
import GoalSection from "@/components/about/GoalSection";
import VisionSection from "@/components/about/VisionSection";
import MeaningSection from "@/components/about/MeaningSection";
import AboutProgramsSection from "@/components/about/ProgramsSection";
import StaffSection from "@/components/about/StaffSection";
import PracticalMinistrySection from "@/components/about/PracticalMinistrySection";
import RealLifeIssuesSection from "@/components/about/RealLifeIssuesSection";
import AboutPrayerSection from "@/components/about/PrayerSection";
import StatementOfFaithSection from "@/components/about/StatementOfFaithSection";

export const metadata: Metadata = {
  title: "About Kabod Bible College",
  description:
    "Learn about Kabod Bible College, its founding vision, founder Bro. Prasanth Jose, and its mission to train disciples filled with the Holy Spirit.",
};

export default function AboutPage() {
  return (
    <main>
      <FounderSection />
      <AboutUsSection />
      <GoalSection />
      <VisionSection />
      <MeaningSection />
      <AboutProgramsSection />
      <StaffSection />
      <PracticalMinistrySection />
      <RealLifeIssuesSection />
      <AboutPrayerSection />
      <StatementOfFaithSection />
    </main>
  );
}
