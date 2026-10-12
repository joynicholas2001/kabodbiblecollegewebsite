"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-brand-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 text-brand-forest font-bold text-xs uppercase tracking-[0.2em] px-3.5 py-1 bg-brand-forest/10 rounded-full border border-brand-forest/20">
              <BookOpen className="w-3.5 h-3.5 text-brand-gold" />
              <span>Equipping Disciples</span>
            </span>
          </div>

          <h2 className="section-heading mb-6 gold-underline-center pb-4 mx-auto">
            About Us
          </h2>

          <div className="space-y-6 text-brand-slate leading-relaxed text-base sm:text-xl font-normal mt-8">
            <p>
              We provide Spirit-Filled anointed teaching to train &amp; equip for
              ministering in the Supernatural power of the Holy Spirit along
              with doctrinally Sound and Intelligence Stimulated Study of
              God&apos;s Word.
            </p>
            <p className="text-brand-navy font-medium">
              Lets learn, grow &amp; be equipped together with love and
              fellowship to fulfil God&apos;s call on our lives. We look forward
              in welcoming you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
