"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function MeaningSection() {
  return (
    <section className="bg-brand-ivory py-16 sm:py-24 border-b border-brand-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-brand-forest font-bold text-xs uppercase tracking-[0.2em] mb-3 px-3.5 py-1 bg-brand-forest/10 rounded-full border border-brand-forest/20">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Biblical Roots</span>
            </span>
            <h2 className="section-heading mb-4 gold-underline-center pb-4 mx-auto">
              What does Kabod mean?
            </h2>
          </div>

          <div className="rounded-3xl bg-white border border-brand-border p-8 sm:p-12 shadow-card text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-brand-navy font-semibold text-sm mb-6">
              <span className="text-xl font-serif text-brand-forest">כָּבוֹד</span>
              <span className="text-slate-400">&bull;</span>
              <span className="italic text-brand-gold-dark font-heading">Kāḇôḏ</span>
              <span className="text-slate-400">&bull;</span>
              <span className="uppercase tracking-wider text-xs font-bold text-brand-navy">Glory & Weight</span>
            </div>

            <div className="space-y-4 text-brand-slate leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
              <p>
                <span className="text-brand-navy font-bold text-xl">Kabod</span> (
                <span className="font-medium text-brand-navy-dark">קאבוד</span>,{" "}
                <em className="text-brand-forest font-semibold">Kāḇôḏ</em>) is the Hebrew word for
                glory. It literally carries the idea of weight or heaviness — the
                weight of God&apos;s presence, His honor, and His majesty.
              </p>
              <p className="text-brand-navy font-medium">
                At Kabod Bible College, we train disciples to live and minister
                under that glory, so that the knowledge of the LORD fills the
                earth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
