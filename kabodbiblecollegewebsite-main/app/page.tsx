import HeroCarouselDynamic from "@/components/sections/HeroCarouselDynamic";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import TrainingSection from "@/components/sections/TrainingSection";
import PrayerSection from "@/components/sections/PrayerSection";

export default function HomePage() {
  return (
    <>
      <HeroCarouselDynamic />
      <StatsSection />
      <AboutSection />
      <TrainingSection />
      <PrayerSection />
    </>
  );
}
