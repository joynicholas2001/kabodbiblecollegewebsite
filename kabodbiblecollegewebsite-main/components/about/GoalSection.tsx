"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function GoalSection() {
  const goals = [
    "Prepare Disciples",
    "Christ-Likeness",
    "Establish in God's Word",
    "Empower by The Holy Spirit",
  ];

  return (
    <section className="bg-white py-12 sm:py-16 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-purple mb-4">
              Our Goal
            </h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {goals.map((goal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-sm transition-all group"
              >
                <div className="bg-brand-gold/10 p-2 rounded-lg group-hover:bg-brand-gold/20 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                </div>
                <span className="text-lg font-semibold text-gray-800">
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
