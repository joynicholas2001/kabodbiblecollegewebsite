"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function VisionSection() {
  const visionItems = [
    {
      number: "01",
      title: "Grow In Christlikeness",
      description:
        "We focus on developing the whole person, because who you are is more important than the ministry you do.",
    },
    {
      number: "02",
      title: "Passion For His Presence",
      description:
        "We focus on developing intimacy with the Lord, because all of life and genuine ministry flows from Him through us and nothing can replace that.",
    },
    {
      number: "03",
      title: "Be Established In God's Word",
      description:
        "We focus on doctrinally sound and intellectually stimulating study of God’s Word, to establish both heart and mind, deep in God’s powerful Word.",
    },
    {
      number: "04",
      title: "Be Holy Spirit Empowered",
      description:
        "We focus on depending on the Holy Spirit and expecting demonstrations of signs, wonders and miracles, because if Jesus did it this way, so must we. We have no other alternative",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-brand-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-2 text-brand-forest font-bold text-xs uppercase tracking-[0.2em] px-3.5 py-1 bg-brand-forest/10 rounded-full border border-brand-forest/20">
              <Compass className="w-3.5 h-3.5 text-brand-gold" />
              <span>Foundational Pillars</span>
            </span>
          </div>
          <h2 className="section-heading mb-4 gold-underline-center pb-4 mx-auto">
            Our Vision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {visionItems.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-ivory p-8 sm:p-10 rounded-3xl shadow-card border border-brand-border hover:shadow-card-hover hover:border-brand-gold/50 hover:bg-white transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading font-black text-4xl sm:text-5xl text-brand-gold/60 group-hover:text-brand-gold transition-colors">
                  {item.number}
                </span>
                <div className="h-2 w-12 bg-brand-forest/20 group-hover:bg-brand-forest rounded-full transition-colors" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy mb-3 group-hover:text-brand-navy-dark transition-colors">
                {item.title}
              </h3>
              <p className="text-brand-slate leading-relaxed text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
