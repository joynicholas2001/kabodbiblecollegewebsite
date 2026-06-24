"use client";

import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-purple mb-6">
            About Us
          </h2>
          <div className="space-y-6 text-brand-muted leading-relaxed text-base sm:text-lg">
            <p>
              We provide Spirit-Filled anointed teaching to train &amp; equip for
              ministering in the Supernatural power of the Holy Spirit along
              with doctrinally Sound and Intelligence Stimulated Study of
              God&apos;s Word.
            </p>
            <p>
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
