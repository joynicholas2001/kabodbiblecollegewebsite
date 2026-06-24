"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CONVOCATION_SLIDE_IMAGES,
  SLIDE_FALLBACK_CLASS,
} from "@/lib/carousel-slides";

const slides = CONVOCATION_SLIDE_IMAGES.map((src, index) => ({
  id: index + 1,
  image: src,
}));

const DEFAULT_HERO_TITLE = "Kabod Bible College";
const DEFAULT_HERO_SUBTITLE = "What we believe, live by, preach and teach";

export default function HeroCarousel() {
  const [content, setContent] = useState<{ heroTitle?: string; heroSubtitle?: string }>({});
  useEffect(() => {
    let mounted = true;
    fetch("/api/settings")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (mounted && data?.content) setContent(data.content);
      })
      .catch(() => { });
    return () => { mounted = false; };
  }, []);

  const heroTitle = content.heroTitle ?? DEFAULT_HERO_TITLE;
  const heroSubtitle = content.heroSubtitle ?? DEFAULT_HERO_SUBTITLE;

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
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
        speed={600}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`relative w-full min-h-[78vh] sm:min-h-[84vh] lg:min-h-[90vh] flex items-center justify-center bg-cover bg-center ${SLIDE_FALLBACK_CLASS}`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Subtle pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 20V40H20'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              {/* Dark overlay for text readability */}
              <div
                className="absolute inset-0 bg-black/55 sm:bg-black/50"
                aria-hidden
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static overlay text - outside Swiper to stay fixed */}
      <div className="absolute inset-0 z-10 flex items-start sm:items-center justify-center pointer-events-none">
        <div className="relative text-center px-4 sm:px-6 max-w-4xl mx-auto pt-28 sm:pt-16 lg:pt-0">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg pointer-events-auto">
            {heroTitle}
          </h1>
          <p className="mt-3 sm:mt-5 text-lg sm:text-xl md:text-2xl text-brand-soft font-medium max-w-2xl mx-auto leading-relaxed pointer-events-auto">
            {heroSubtitle}
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 pointer-events-auto">
            <Link
              href="/admission"
              className="btn-primary text-base px-8 py-3.5"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="btn-outline-white text-base px-8 py-3.5"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Custom navigation arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        className="hero-swiper-prev absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-gold"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="hero-swiper-next absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-gold"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Pagination dots container - Swiper will inject bullets here */}
      <div className="hero-swiper-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2 justify-center" />

      {/* Wave divider into next section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            fill="#FFFEFB"
          />
        </svg>
      </div>
    </section>
  );
}
