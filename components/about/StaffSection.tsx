"use client";

import { motion } from "framer-motion";
import { User, GraduationCap } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";

type StaffMember = {
  name: string;
  role: string;
  description: string;
  image: string | null;
  circleSize?: "24" | "28" | "32" | "36";
  scale?: number;
  scaleHover?: number;
  translateY?: number;
  objectPosition?: "top" | "center" | "center_20%";
};

const staffMembers: StaffMember[] = [
  {
    name: "Pas. Prasanth Jose",
    role: "Founder of The KABOD BIBLE COLLEGE",
    description:
      "Bro. Prasanth Jose, founder of Kabod Bible College, encountered the Lord at age seven, was filled with the Holy Spirit, and began preaching, teaching, worshipping, and moving in the prophetic. Through a divine vision, God revealed a Bible filled with fire and the Holy Spirit, calling him to raise disciples for His Kingdom. This vision led to the establishment of Kabod Bible College in 2020. It trains believers in God’s Word and empowers them through the Holy Spirit for effective ministry.",
    image: "/images/founder.jpg.jpg",
  },
  {
    name: "Pas. Sunu K George",
    role: "Principal of the KABOD BIBLE COLLEGE",
    description:
      "Equipping the next generation for leadership and spiritual growth, helping them mature in faith and serve the Lord through a deeper understanding of Scripture. Dedicated to teaching the biblical revelation and spiritual truths contained in every verse of God's Word, he encourages believers to study the Bible with accuracy, depth, and the illumination of the Holy Spirit.",
    image:
      "https://res.cloudinary.com/dmex5jycs/image/upload/v1773643366/Kaagaz_20231223_222622621661-1_ossqgu.png",
  },
  {
    name: "Sis. Anila Abraham",
    role: "Theology Teacher",
    description:
      "Dedicated to teaching the Person and Work of the Holy Spirit with biblical clarity and spiritual insight, equipping believers to understand His role, ministry, and active presence in the life of the Church and every believer.",
    image:
      "https://res.cloudinary.com/dmex5jycs/image/upload/c_thumb,g_center,w_1400,h_1400,f_auto,q_auto:best,e_sharpen:100/v1773643524/dp0011__58__kphva7.jpg",
    scale: 1.55,
    scaleHover: 1.45,
    objectPosition: "center",
  },
  {
    name: "Sis. Joby Sam",
    role: "Theology Teacher",
    description:
      "Specializing in teaching Christology, she helps believers gain a deeper understanding of the person, nature, and work of Jesus Christ, strengthening their faith through sound biblical doctrine.",
    image:
      "https://res.cloudinary.com/dmex5jycs/image/upload/v1773641573/WhatsApp_Image_2024-08-17_at_5.07.36_PM_r3qqz8.jpg",
  },
  {
    name: "Sis. Stella Kalyan",
    role: "Theology Teacher",
    description:
      "Specializing in discipleship, she equips and mentors believers to mature in their faith, deepen their relationship with Christ, and faithfully follow His teachings.",
    image:
      "https://res.cloudinary.com/dmex5jycs/image/upload/v1773641572/IMG-20260306-WA0019.jpg_hutgnr.jpg",
  },
  {
    name: "Bro. Paul Praneeth",
    role: "Theology Teacher",
    description:
      "Specializing in New Testament studies, he teaches the Word of God with depth and clarity, helping believers gain a deeper understanding of Scripture through the revelation and guidance of the Holy Spirit and the true message of Jesus Christ.",
    image:
      "https://res.cloudinary.com/dmex5jycs/image/upload/v1773641573/IMG-20260306-WA0012.jpg_vpdvro.jpg",
  },
  {
    name: "Bro. Joy Nicholas",
    role: "Theology Teacher",
    description:
      "Focusing on global missions, spreading the Gospel across nations, and teaching, writing, and singing songs to glorify the name of Jesus Christ. Also teaching real-time evangelism and inspiring missionary biographies to equip those called to ministry, guiding them in biblical ways under the guidance of the Holy Spirit.",
    image:
      "https://res.cloudinary.com/dmex5jycs/image/upload/v1773645308/joynicholas_offl_b20faea7aa994410b4825a68482bdb39.jpg_ift2sx.webp",
  },
  {
    name: "Sis. Mallika Srinivas",
    role: "Ministry Translator",
    description:
      "Specializing in English-to-Telugu translation, faithfully interpreting and communicating the Word of God during preaching and teaching sessions. She is also dedicated to teaching the biblical meaning, significance, and proper understanding of the Benediction, equipping believers with a deeper understanding of God's blessing and grace.",
    image:
      "https://res.cloudinary.com/dmex5jycs/image/upload/v1773641651/WhatsApp_Image_2026-03-06_at_4.35.17_PM_lbjp28.jpg",
  },
  {
    name: "Sis. Sharon Shravan",
    role: "Ministry Translator",
    description:
      "Specializing in English-to-Telugu translation, helping interpret and communicate the Word of God clearly during preaching.",
    image:
      "https://res.cloudinary.com/doxdubjgb/image/upload/v1773659345/WhatsApp_Image_2026-03-16_at_4.20.15_PM_m8gtvs.jpg",
    scale: 1.5,
    scaleHover: 1.8,
    translateY: -2,
    objectPosition: "top",
  },
];

const optimizeCloudinary = (url: string) => {
  if (!url.includes("res.cloudinary.com") || !url.includes("/upload/")) {
    return url;
  }
  return url.replace("/upload/", "/upload/f_auto,q_auto:best,w_1400/");
};

export default function StaffSection() {
  return (
    <section className="staff-section bg-brand-ivory py-20 sm:py-28 relative overflow-hidden border-b border-brand-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-forest/10 text-brand-forest text-xs font-bold uppercase tracking-[0.2em] border border-brand-forest/20">
              <GraduationCap className="h-3.5 w-3.5 text-brand-gold" />
              <span>Academic &amp; Ministry Faculty</span>
            </span>
          </div>
          <h2 className="section-heading mb-4 gold-underline-center pb-4 mx-auto">
            Spiritually Trained Staff
          </h2>
          <p className="section-subheading max-w-2xl mx-auto mt-4 text-center">
            Learn from practitioners who are active in ministry and led by the
            Holy Spirit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((staff, index) => (
            <motion.div
              key={staff.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-3xl p-8 sm:p-9 text-center flex flex-col items-center group h-full transition-all duration-300 border border-brand-border relative hover:shadow-card-hover hover:border-brand-gold/50 hover:-translate-y-1 shadow-card"
              style={
                {
                  ["--scale-hover" as string]: staff.scaleHover ?? 1.1,
                  ["--translate-y" as string]: `${(staff.translateY ?? 0) * 4}px`,
                } as CSSProperties
              }
            >
              {/* Avatar Container with Gold Crest Badge */}
              <div className="relative mb-6">
                <div
                  className={`staff-img-wrapper relative rounded-full bg-brand-ivory flex items-center justify-center overflow-hidden border-2 border-brand-border group-hover:border-brand-gold transition-all duration-500 shadow-md ${
                    staff.circleSize === "32"
                      ? "h-32 w-32 sm:h-36 sm:w-36"
                      : staff.circleSize === "24"
                      ? "h-24 w-24 sm:h-28 sm:w-28"
                      : staff.circleSize === "36"
                      ? "h-36 w-36 sm:h-40 sm:w-40"
                      : "h-28 w-28 sm:h-32 sm:w-32"
                  }`}
                >
                  {staff.image ? (
                    <Image
                      src={optimizeCloudinary(staff.image)}
                      alt={staff.name}
                      fill
                      sizes="(max-width: 640px) 112px, 144px"
                      className="h-full w-full object-cover transition-transform duration-700 staff-img"
                      style={{
                        transform: `scale(${staff.scale ?? 1}) translateY(${
                          (staff.translateY ?? 0) * 4
                        }px)`,
                        objectPosition:
                          staff.objectPosition === "center_20%"
                            ? "center 20%"
                            : staff.objectPosition ?? "top",
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <User className="h-14 w-14 text-slate-300" />
                  )}
                </div>
                <div className="absolute -bottom-1 -right-1 bg-brand-navy p-2 rounded-xl shadow-md border border-brand-gold/40 transform group-hover:rotate-12 transition-all duration-300">
                  <GraduationCap className="h-4 w-4 text-brand-gold" />
                </div>
              </div>

              {/* Staff Details */}
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy mb-2 group-hover:text-brand-navy-dark transition-colors">
                {staff.name}
              </h3>

              <div className="h-0.5 w-8 bg-brand-gold/40 rounded-full mb-3 group-hover:w-12 group-hover:bg-brand-gold transition-all duration-300" />

              <p className="text-brand-forest font-bold text-xs uppercase tracking-wider mb-4 min-h-[32px] flex items-center justify-center">
                {staff.role}
              </p>

              <p className="text-brand-slate text-sm leading-relaxed text-center">
                {staff.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .staff-section .group:hover .staff-img-wrapper .staff-img {
          transform: scale(var(--scale-hover, 1.1))
            translateY(var(--translate-y, 0px)) !important;
        }
      `}</style>
    </section>
  );
}
