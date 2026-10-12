"use client";

import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

export default function RealLifeIssuesSection() {
  return (
    <section className="bg-brand-ivory py-16 sm:py-20 border-b border-brand-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-card flex flex-col sm:flex-row-reverse items-center gap-8 sm:gap-10 relative overflow-hidden group hover:border-brand-gold/50 hover:shadow-card-hover transition-all duration-300">
            {/* Edge highlight */}
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-brand-forest" />

            <div className="shrink-0">
              <div className="bg-brand-navy/5 border border-brand-navy/15 p-5 rounded-2xl group-hover:scale-105 group-hover:bg-brand-forest group-hover:text-white transition-all duration-300">
                <HeartHandshake className="h-10 w-10 sm:h-12 sm:w-12 text-brand-navy group-hover:text-brand-gold" />
              </div>
            </div>

            <div className="text-center sm:text-left flex-1">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-navy mb-4">
                We Address Real Life Issues
              </h2>

              <p className="text-brand-slate text-base sm:text-lg leading-relaxed">
                We address real life issues so that you can be helped personally
                as well as know how to help people face and overcome life&apos;s
                challenges with God&apos;s Word and His Spirit.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
