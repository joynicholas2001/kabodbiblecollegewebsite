"use client";

import { motion } from "framer-motion";
import { Heart, Calendar } from "lucide-react";

const PRAYER_DAYS = ["Tuesday", "Thursday", "Saturday"];

export default function AboutPrayerSection() {
  return (
    <section className="bg-gradient-to-br from-brand-purple to-brand-purple-dark py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
            Prayer & Intercession
          </h2>
          <p className="text-brand-gold font-semibold text-lg">
            Covered in Prayer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 24/7 Prayer Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/20 text-brand-gold">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl">
                24/7 Prayer Team
              </h3>
            </div>
            <p className="text-white/85 leading-relaxed text-sm sm:text-base">
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
            className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/20 text-brand-gold">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl">
                Prayer Sessions
              </h3>
            </div>
            <p className="text-white/85 leading-relaxed text-sm sm:text-base mb-5">
              Join our corporate prayer sessions every week.
            </p>
            <div className="flex flex-wrap gap-2">
              {PRAYER_DAYS.map((day) => (
                <span
                  key={day}
                  className="inline-flex items-center rounded-full bg-brand-gold/20 border border-brand-gold/40 px-4 py-2 text-sm font-semibold text-brand-gold"
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
