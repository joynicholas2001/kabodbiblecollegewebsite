"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";

const SUBJECTS = [
  "Old Testament Survey",
  "New Testament Survey",
  "Missions and Evangelism",
  "Discipleship",
  "Person and Work of Holy Spirit",
  "Understanding Prophetic",
  "Christology",
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutProgramsSection() {
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-brand-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-2 text-brand-forest font-bold text-xs uppercase tracking-[0.2em] px-3.5 py-1 bg-brand-forest/10 rounded-full border border-brand-forest/20">
              <GraduationCap className="w-3.5 h-3.5 text-brand-gold" />
              <span>Curriculum Overview</span>
            </span>
          </div>
          <h2 className="section-heading mb-4 gold-underline-center pb-4 mx-auto">
            Programs &amp; Subjects
          </h2>
          <p className="section-subheading max-w-2xl mx-auto mt-4 text-center">
            Core subjects designed to ground you in Scripture, Spirit, and
            ministry practice.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          {SUBJECTS.map((subject) => (
            <motion.div
              key={subject}
              variants={cardItem}
              className="rounded-2xl border border-brand-border bg-brand-ivory p-6 shadow-card transition-all duration-300 hover:border-brand-gold/50 hover:bg-white hover:shadow-card-hover hover:-translate-y-0.5 group flex items-start gap-3.5"
            >
              <div className="h-9 w-9 rounded-xl bg-brand-forest/10 text-brand-forest border border-brand-forest/20 flex items-center justify-center shrink-0 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                <BookOpen className="h-4 w-4" />
              </div>
              <p className="font-heading font-bold text-brand-navy text-base group-hover:text-brand-navy-dark transition-colors pt-1">
                {subject}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
