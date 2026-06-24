"use client";

import { motion } from "framer-motion";

export default function MeaningSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-purple mb-6">
            What does Kabod mean?
          </h2>
          <div className="space-y-4 text-brand-muted leading-relaxed text-base sm:text-lg">
            <p>
              <span className="text-brand-gold font-semibold">Kabod</span> (
              <span className="font-medium text-brand-purple-dark">קאבוד</span>,{" "}
              <em className="text-brand-muted">Kāḇôḏ</em>) is the Hebrew word for
              glory. It literally carries the idea of weight or heaviness — the
              weight of God&apos;s presence, His honor, and His majesty.
            </p>
            <p>
              At Kabod Bible College, we train disciples to live and minister
              under that glory, so that the knowledge of the LORD fills the
              earth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
