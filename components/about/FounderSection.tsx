"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

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
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image - Left: served from /api/founder-image (app/assets), fallback /founder.jpg */}
          <motion.div variants={item} className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-lg bg-brand-purple/10 min-h-[280px]">
              {imgError ? (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-brand-purple/60 p-8 text-center"
                  aria-label="Founder photo placeholder"
                >
                  <span className="text-4xl font-heading font-bold mb-2">PJ</span>
                  <span className="text-sm font-medium">Bro. Prasanth Jose</span>
                  <span className="text-xs mt-1 text-center px-2">Copy founder.jpg into the public folder (same folder as images), then restart the server.</span>
                </div>
              ) : (
                <Image
                  key={imgSrc}
                  src={imgSrc}
                  alt="Bro. Prasanth Jose - Founder of Kabod Bible College"
                  fill
                  sizes="(max-width: 1024px) 100vw, 448px"
                  className="absolute inset-0 w-full h-full object-cover object-top block"
                  onError={handleImgError}
                  priority
                  loading="eager"
                />
              )}
            </div>
          </motion.div>

          {/* Text - Right */}
          <motion.div variants={item} className="order-1 lg:order-2">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-purple mb-3">
              Our Founder – Bro. Prasanth Jose
            </h2>
            <div className="h-1 w-16 bg-brand-gold rounded-full mb-6" />
            <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-6">
              A Vision Given by God
            </p>
            <div className="space-y-4 text-brand-muted leading-relaxed">
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
