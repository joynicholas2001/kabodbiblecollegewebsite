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
      variant="navy"
      padding="xl"
      id="prayer"
      className="border-t border-brand-gold/20 relative"
    >
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-forest/30 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeader
        eyebrow="Prayer & Intercession"
        heading="Covered in Prayer"
        subheading="Our ministry is sustained by a dedicated prayer team and regular corporate prayer sessions."
        center
        dark
        className="mb-14 sm:mb-16"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
        <FeatureCard
          icon={Heart}
          title="24/7 Prayer Team"
          description="A committed team interceding around the clock for the college, students, and the nations. Your growth and our mission are covered in prayer every hour of every day."
          dark
        />
        <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-7 sm:p-8 hover:border-brand-gold/50 transition-all duration-300 shadow-lg">
          <div className="flex items-center gap-3.5 mb-5">
            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-brand-forest/60 text-brand-gold border border-brand-gold/30 shadow-md">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="font-heading font-bold text-white text-xl sm:text-2xl">
              Prayer Sessions
            </h3>
          </div>
          <p className="text-slate-200 text-sm sm:text-base mb-5 leading-relaxed">
            Join our corporate prayer sessions on the following days:
          </p>
          <ul className="space-y-3">
            {prayerSessions.map(({ day }) => (
              <li
                key={day}
                className="flex items-center gap-3 text-white font-medium bg-black/20 p-3 rounded-xl border border-white/10"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-brand-gold shrink-0 shadow-sm" />
                <span className="tracking-wide text-sm sm:text-base">{day}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
