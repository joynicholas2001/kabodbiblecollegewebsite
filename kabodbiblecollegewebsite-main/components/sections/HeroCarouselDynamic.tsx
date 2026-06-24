"use client";

import dynamic from "next/dynamic";

const HeroCarousel = dynamic(
  () => import("@/components/sections/HeroCarousel"),
  {
    ssr: false,
    loading: () => (
      <section
        className="relative w-full min-h-[85vh] sm:min-h-[90vh] bg-brand-purple/90"
        aria-hidden="true"
      />
    ),
  }
);

export default function HeroCarouselDynamic() {
  return <HeroCarousel />;
}
