"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

export default function PracticalMinistrySection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-8 sm:gap-12 relative overflow-hidden group hover:border-brand-gold/30 transition-colors">
            {/* Edge highlight */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-brand-gold" />
            
            <div className="flex-shrink-0">
              <div className="bg-brand-gold/10 p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Wrench className="h-12 w-12 text-brand-gold" />
              </div>
            </div>
            
            <div className="text-center sm:text-left">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-purple mb-4">
                We Focus on Practical Ministry
              </h2>
              
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                Our training prepares you with the know-how to actually do the
                work of the ministry. It is not just theory you will receive,
                but equipping to do the work of the ministry.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
