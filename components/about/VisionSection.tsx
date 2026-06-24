"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section className="bg-brand-light py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-purple mb-6">
            Our Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
            {[
              {
                number: "01",
                title: "Grow In Christlikeness",
                description: "We focus on developing the whole person, because who you are is more important than the ministry you do."
              },
              {
                number: "02",
                title: "Passion For His Presence",
                description: "We focus on developing intimacy with the Lord, because all of life and genuine ministry flows from Him through us and nothing can replace that."
              },
              {
                number: "03",
                title: "Be Established In God's Word",
                description: "We focus on doctrinally sound and intellectually stimulating study of God’s Word, to establish both heart and mind, deep in God’s powerful Word."
              },
              {
                number: "04",
                title: "Be Holy Spirit Empowered",
                description: "We focus on depending on the Holy Spirit and expecting demonstrations of signs, wonders and miracles, because if Jesus did it this way, so must we. We have no other alternative"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-card/35 p-8 rounded-2xl shadow-card border border-brand-card hover:shadow-card-hover transition-shadow group"
              >
                <div className="text-brand-purple-dark group-hover:text-brand-purple transition-colors font-heading font-black text-5xl mb-4 leading-none">
                  {item.number}
                </div>
                <h3 className="text-xl font-bold text-brand-purple mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-muted leading-relaxed text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
