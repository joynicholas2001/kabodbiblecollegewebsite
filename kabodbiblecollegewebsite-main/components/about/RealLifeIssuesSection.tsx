"use client";

import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

export default function RealLifeIssuesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-brand-purple/5 rounded-3xl p-8 sm:p-12 border border-brand-purple/10 flex flex-col sm:flex-row-reverse items-center gap-8 sm:gap-12 relative overflow-hidden group hover:bg-brand-purple/10 transition-colors duration-300">
            {/* Edge highlight */}
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-brand-purple" />
            
            <div className="flex-shrink-0">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-brand-purple/10 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <HeartHandshake className="h-12 w-12 text-brand-purple" />
              </div>
            </div>
            
            <div className="text-center sm:text-left flex-1">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-purple mb-4">
                We Address Real Life Issues
              </h2>
              
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
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
