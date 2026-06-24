"use client";

import { motion } from "framer-motion";

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
    <section className="bg-brand-light py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-purple mb-3">
            Programs & Subjects
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Core subjects designed to ground you in Scripture, Spirit, and
            ministry practice.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {SUBJECTS.map((subject) => (
            <motion.div
              key={subject}
              variants={cardItem}
              className="rounded-xl border-2 border-brand-card bg-brand-card/35 p-5 shadow-card transition-all duration-300 hover:border-brand-purple/30 hover:shadow-card-hover"
            >
              <p className="font-heading font-semibold text-brand-purple-dark text-sm sm:text-base">
                {subject}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
