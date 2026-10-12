"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Sparkles, Award } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FounderSection() {
  const [imgError, setImgError] = useState(false);
  const [useApi, setUseApi] = useState(false);

  const handleImgError = () => {
    if (!useApi) {
      setUseApi(true);
    } else {
      setImgError(true);
    }
  };

  // Prefer API route (serves app/assets/founder.jpg.jpg); fallback to public /founder.jpg
  const imgSrc = useApi ? "/founder.jpg" : "/api/founder-image";

  return (
    <section className="bg-brand-ivory py-16 sm:py-24 border-b border-brand-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center"
        >
          {/* Mobile-Only Heading (shown only on mobile above the portrait) */}
          <motion.div variants={item} className="lg:hidden">
            <span className="inline-flex items-center gap-2 text-brand-forest font-bold text-xs uppercase tracking-[0.2em] mb-3 px-3.5 py-1 bg-brand-forest/10 rounded-full border border-brand-forest/20">
              <Award className="w-3.5 h-3.5 text-brand-gold" />
              <span>A Vision Given by God</span>
            </span>

            <h2 className="section-heading mb-4 gold-underline pb-3">
              Our Founder – Bro. Prasanth Jose
            </h2>
          </motion.div>

          {/* Portrait Column */}
          <motion.div variants={item} className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Gold decorative backdrop offset */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-forest via-brand-gold to-brand-navy opacity-30 blur-sm transform -rotate-1" />

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-brand-navy-dark border-2 border-brand-gold/40">
                {imgError ? (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center bg-brand-navy"
                    aria-label="Founder photo placeholder"
                  >
                    <span className="text-4xl font-heading font-bold mb-2 text-brand-gold">
                      PJ
                    </span>
                    <span className="text-base font-semibold">
                      Bro. Prasanth Jose
                    </span>
                    <span className="text-xs text-slate-300 mt-2">
                      Founder, Kabod Bible College
                    </span>
                  </div>
                ) : (
                  <Image
                    key={imgSrc}
                    src={imgSrc}
                    alt="Bro. Prasanth Jose - Founder of Kabod Bible College"
                    fill
                    sizes="(max-width: 1024px) 100vw, 448px"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={handleImgError}
                    priority
                  />
                )}

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent pointer-events-none" />

                {/* Founder Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-navy-dark/90 backdrop-blur-md border border-brand-gold/30 rounded-xl p-3 text-center">
                  <p className="font-heading font-bold text-white text-base">
                    Bro. Prasanth Jose
                  </p>
                  <p className="text-brand-gold text-xs font-semibold tracking-wider uppercase mt-0.5">
                    Founder & Visionary
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biography Column (Matter) */}
          <motion.div variants={item} className="lg:col-span-7">
            {/* Desktop-Only Heading */}
            <div className="hidden lg:block">
              <span className="inline-flex items-center gap-2 text-brand-forest font-bold text-xs uppercase tracking-[0.2em] mb-3 px-3.5 py-1 bg-brand-forest/10 rounded-full border border-brand-forest/20">
                <Award className="w-3.5 h-3.5 text-brand-gold" />
                <span>A Vision Given by God</span>
              </span>

              <h2 className="section-heading mb-4 gold-underline pb-3">
                Our Founder – Bro. Prasanth Jose
              </h2>
            </div>

            <p className="text-brand-forest-dark font-medium text-base sm:text-lg mb-6">
              Called and anointed to raise a generation grounded in the Word and walking in the Supernatural power of the Holy Spirit.
            </p>

            <div className="space-y-4 text-brand-slate leading-relaxed text-base sm:text-lg">
              <p>
                Prasanth Jose, the founder of Kabod Bible College, experienced a
                profound encounter with the Lord at the age of seven. During
                this early stage of his life, he was filled with the Holy
                Spirit, which marked the beginning of his spiritual journey in
                ministry.
              </p>
              <p>
                From a young age, he demonstrated a deep passion for the Kingdom
                of God—actively engaging in preaching, worship, teaching, and
                moving in the prophetic. His life became a vessel through which
                God began to work powerfully, revealing His purpose and calling.
              </p>
              <p>
                In a significant divine vision, the Lord revealed a Bible filled
                with fire and the presence of the Holy Spirit. Through this
                vision, God clearly spoke about raising and equipping disciples
                for the expansion of His Kingdom.
              </p>
              <p>
                This heavenly encounter became the foundational vision for Kabod
                Bible College, which was established in 2020. The institution is
                committed to training believers in the Word of God, nurturing
                spiritual growth, and empowering individuals through the Holy
                Spirit to fulfill their divine calling.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
