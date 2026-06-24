import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import { Heart, Calendar } from "lucide-react";

const prayerSessions = [
  { day: "Tuesday" },
  { day: "Thursday" },
  { day: "Saturday" },
];

export default function PrayerSection() {
  return (
    <Section
      variant="purple"
      padding="xl"
      id="prayer"
      className="bg-gradient-to-br from-brand-purple-dark to-brand-secondary"
    >
      <SectionHeader
        eyebrow="Prayer & Intercession"
        heading="Covered in Prayer"
        subheading="Our ministry is sustained by a dedicated prayer team and regular corporate prayer sessions."
        center
        dark
        className="mb-12 sm:mb-16"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <FeatureCard
          icon={Heart}
          title="24/7 Prayer Team"
          description="A committed team interceding around the clock for the college, students, and the nations. Your growth and our mission are covered in prayer every hour of every day."
          dark
          className="bg-brand-secondary/45 hover:bg-brand-secondary/55"
        />
        <div className="rounded-2xl border border-white/20 bg-brand-secondary/45 backdrop-blur-sm p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/20 text-brand-gold">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="font-heading font-bold text-white text-lg sm:text-xl">
              Prayer Sessions
            </h3>
          </div>
          <p className="text-brand-soft/90 text-sm mb-4">
            Join our corporate prayer sessions on the following days:
          </p>
          <ul className="space-y-3">
            {prayerSessions.map(({ day }) => (
              <li
                key={day}
                className="flex items-center gap-3 text-white font-medium"
              >
                <span className="h-2 w-2 rounded-full bg-brand-gold shrink-0" />
                {day}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
