"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import {
  CONVOCATION_SLIDE_IMAGES,
  SLIDE_FALLBACK_CLASS,
} from "@/lib/carousel-slides";

const SLIDE_POSITIONS: Record<string, string> = {
  "/images/convocation/IMG_20260620_140806.jpg": "center 85%", // Move particular image up so graduates and ministers on stage are clearly visible
  "/images/convocation/20260620_151128.jpg": "center 35%",
  "/images/convocation/20260620_152158.jpg": "center 45%",
  "/images/convocation/IMG-20260621-WA0045%281%29.jpg": "center 30%",
  "/images/convocation/IMG_20260620_140711.jpg": "center 70%",
  "/images/convocation/IMG_20260620_140750.jpg": "center 75%",
  "/images/convocation/IMG_20260620_142326.jpg": "center 80%",
  "/images/convocation/SLIDE%201.JPG": "center 70%",
  "/images/convocation/SLIDE%202.JPG": "center 75%",
  "/images/convocation/SLIDE%203.JPG": "center 75%",
  "/images/convocation/SLIDE%204.jpg": "center 65%",
};

const slides = CONVOCATION_SLIDE_IMAGES.map((src, index) => ({
  id: index + 1,
  image: src,
  position: SLIDE_POSITIONS[src] || "center center",
}));

const DEFAULT_HERO_TITLE = "Kabod Bible College";
const DEFAULT_HERO_SUBTITLE = "What we believe, live by, preach and teach";

export default function HeroCarousel() {
  const [content, setContent] = useState<{
    heroTitle?: string;
    heroSubtitle?: string;
  }>({});

  useEffect(() => {
    let mounted = true;
    fetch("/api/settings")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (mounted && data?.content) setContent(data.content);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  const heroTitle = content.heroTitle ?? DEFAULT_HERO_TITLE;
  const heroSubtitle = content.heroSubtitle ?? DEFAULT_HERO_SUBTITLE;

  return (
    <section className="relative w-full overflow-hidden bg-brand-navy-dark">
      {/* High-priority preload for instant first-slide render */}
      {slides.length > 0 && (
        <img
          src={slides[0].image}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="sr-only"
          alt=""
          aria-hidden="true"
        />
      )}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".hero-swiper-next",
          prevEl: ".hero-swiper-prev",
        }}
        pagination={{
          clickable: true,
          el: ".hero-swiper-pagination",
          bulletClass:
            "hero-swiper-bullet w-2.5 h-2.5 rounded-full bg-white/50 transition-all duration-300 cursor-pointer",
          bulletActiveClass:
            "!bg-brand-gold !w-8 !rounded-full hero-swiper-bullet-active",
        }}
        className="!overflow-hidden"
        speed={700}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`relative w-full min-h-[82vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center bg-cover ${SLIDE_FALLBACK_CLASS}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: slide.position,
              }}
            >
              {/* Subtle architectural geometric pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 20V40H20'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              {/* Multi-layer gradient for deep contrast and cinematic aesthetic */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/65 to-brand-navy/50"
                aria-hidden="true"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="relative text-center px-4 sm:px-6 max-w-5xl mx-auto pt-16 sm:pt-8 lg:pt-0">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-forest/70 border border-brand-gold/40 text-brand-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-md pointer-events-auto shadow-md">
            <GraduationCap className="w-4 h-4 text-brand-gold" />
            <span>Theological Seminary &bull; Est. 2020</span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.08] tracking-tight drop-shadow-2xl pointer-events-auto">
            {heroTitle}
          </h1>

          {/* Decorative Divider */}
          <div className="my-5 sm:my-6 flex items-center justify-center gap-3 pointer-events-auto">
            <div className="h-px w-12 sm:w-20 bg-brand-gold/40" />
            <div className="h-2 w-2 rounded-full bg-brand-gold" />
            <div className="h-px w-12 sm:w-20 bg-brand-gold/40" />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md pointer-events-auto">
            {heroSubtitle}
          </p>

          {/* Call to Actions */}
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-4 pointer-events-auto">
            <Link
              href="/about"
              className="btn-gold text-sm sm:text-base px-7 py-3.5 shadow-xl hover:scale-105"
            >
              <span>About the College</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="btn-outline-white text-sm sm:text-base px-7 py-3.5 shadow-lg"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        className="hero-swiper-prev absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-brand-navy-dark/60 hover:bg-brand-navy-dark/90 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 hover:border-brand-gold hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="hero-swiper-next absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-brand-navy-dark/60 hover:bg-brand-navy-dark/90 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 hover:border-brand-gold hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Container */}
      <div className="hero-swiper-pagination absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex gap-2 justify-center" />

      {/* Architectural Bottom Divider into warm ivory background */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 text-brand-ivory"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48H1440V16C1200 40 960 48 720 48C480 48 240 40 0 16V48Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
