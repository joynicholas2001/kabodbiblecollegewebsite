"use client";

import { motion } from "framer-motion";
import { Heart, Calendar } from "lucide-react";

const PRAYER_DAYS = ["Tuesday", "Thursday", "Saturday"];

export default function AboutPrayerSection() {
  return (
    <section className="relative bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-forest py-16 sm:py-24 border-b border-brand-gold/20 overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-forest/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-14 sm:mb-16"
        >
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-forest/60 text-brand-gold text-xs font-bold uppercase tracking-[0.2em] border border-brand-gold/30">
              <Heart className="w-3.5 h-3.5 text-brand-gold" />
              <span>Intercession &amp; Fellowship</span>
            </span>
          </div>
          <h2 className="section-heading text-white mb-2 font-heading">
            Prayer &amp; Intercession
          </h2>
          <p className="text-brand-gold font-semibold text-lg tracking-wide uppercase">
            Covered in Prayer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 24/7 Prayer Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-7 sm:p-9 shadow-xl hover:border-brand-gold/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5 mb-5">
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-forest/60 text-brand-gold border border-brand-gold/30 shadow-md">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl sm:text-2xl">
                24/7 Prayer Team
              </h3>
            </div>
            <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
              A committed team interceding around the clock for the college,
              students, and the nations. Our mission and students are covered in
              prayer every hour.
            </p>
          </motion.div>

          {/* Prayer Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-7 sm:p-9 shadow-xl hover:border-brand-gold/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5 mb-5">
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-forest/60 text-brand-gold border border-brand-gold/30 shadow-md">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl sm:text-2xl">
                Prayer Sessions
              </h3>
            </div>
            <p className="text-slate-200 leading-relaxed text-sm sm:text-base mb-5">
              Join our corporate prayer sessions every week:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {PRAYER_DAYS.map((day) => (
                <span
                  key={day}
                  className="inline-flex items-center rounded-xl bg-black/30 border border-brand-gold/40 px-4 py-2 text-sm font-semibold text-brand-gold shadow-sm"
                >
                  {day}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
