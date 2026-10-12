"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target } from "lucide-react";

export default function GoalSection() {
  const goals = [
    "Prepare Disciples",
    "Christ-Likeness",
    "Establish in God's Word",
    "Empower by The Holy Spirit",
  ];

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
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-brand-forest font-bold text-xs uppercase tracking-[0.2em] mb-3 px-3.5 py-1 bg-brand-forest/10 rounded-full border border-brand-forest/20">
              <Target className="w-3.5 h-3.5 text-brand-gold" />
              <span>Institutional Purpose</span>
            </span>
            <h2 className="section-heading mb-4 gold-underline-center pb-4 mx-auto">
              Our Goal
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {goals.map((goal, i) => (
              <motion.div
                key={goal}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white p-6 sm:p-7 rounded-2xl border border-brand-border shadow-card hover:border-brand-gold/50 hover:shadow-card-hover hover:-translate-y-0.5 transition-all group"
              >
                <div className="bg-brand-forest/10 p-3 rounded-xl border border-brand-forest/20 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-brand-forest group-hover:text-brand-gold" />
                </div>
                <span className="text-lg sm:text-xl font-heading font-bold text-brand-navy group-hover:text-brand-navy-dark transition-colors">
                  {goal}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
