"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, GraduationCap } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const staffMembers = [
  {
    name: "Pas. Prasanth Jose",
    role: "Founder of The KABOD BIBLE COLLEGE",
    description: "Deeply involved in Christian ministry, focusing on teaching about the person and work of the Holy Spirit and real-time preaching.",
    image: "/images/founder.jpg.jpg",
  },
  {
    name: "Pas. Sunu K Gerorge",
    role: "Principal of the KABOD BIBLE COLLEGE",
    description: "Passionate about practical ministry and helping students navigate their spiritual walk.",
    image: "https://res.cloudinary.com/dmex5jycs/image/upload/v1773643366/Kaagaz_20231223_222622621661-1_ossqgu.png",
  },
  {
    name: "Sis. Anila Abraham",
    role: "Theology Teacher",
    description: "Dedicated to teaching the Word of God with wisdom and the guidance of the Holy Spirit.",
    image: "https://res.cloudinary.com/dmex5jycs/image/upload/c_fill,g_center,w_800,h_200/v1773643524/dp0011__58__kphva7.jpg",
  },
  {
    name: "Sis. Jobi Sam",
    role: "Worship Leader",
    description: "Specializing in praise and worship leadership and the theology of worship.",
    image: "https://res.cloudinary.com/dmex5jycs/image/upload/v1773641573/WhatsApp_Image_2024-08-17_at_5.07.36_PM_r3qqz8.jpg",
  },
  {
    name: "Sis. Stella Kalyan",
    role: "Clinical Chaplain",
    description: "Providing spiritual care and counseling within the college and community.",
    image: "https://res.cloudinary.com/dmex5jycs/image/upload/v1773641572/IMG-20260306-WA0019.jpg_hutgnr.jpg",
  },
  {
    name: "Bro. Paul Praneeth",
    role: "Youth Ministry Director",
    description: "Equipping the next generation for leadership and spiritual growth, helping them grow in faith and serve the Lord by teaching deep revelations to the world through the divine guidance of the Holy Spirit.",
    image: "https://res.cloudinary.com/dmex5jycs/image/upload/v1773641573/IMG-20260306-WA0012.jpg_vpdvro.jpg",
  },
  {
    name: "Bro. Joy Nicholas",
    role: "Missions Coordinator",
    description: "Focusing on global missions, spreading the Gospel across nations, and teaching, writing, and singing songs to glorify the name of Jesus Christ. Also teaching real-time evangelism and inspiring missionary biographies to equip those called to ministry, guiding them in biblical ways under the guidance of the Holy Spirit.",
    image: "https://res.cloudinary.com/dmex5jycs/image/upload/v1773645308/joynicholas_offl_b20faea7aa994410b4825a68482bdb39.jpg_ift2sx.webp",
  },
  {
    name: "Sis. Mallika Srinivas",
    role: "Ministry Translator",
    description: "Specializing in English-to-Telugu translation, helping interpret and communicate the Word of God clearly during preaching.",
    image: "https://res.cloudinary.com/dmex5jycs/image/upload/v1773641651/WhatsApp_Image_2026-03-06_at_4.35.17_PM_lbjp28.jpg",
  },
  {
    name: "Sis. Sharon Sharavan", 
    role: "Ministry Translator",
    description: "Specializing in English-to-Telugu translation, helping interpret and communicate the Word of God clearly during preaching.",
    image: null,
  },
];

export default function StaffSection() {
  return (
    <section className="bg-[#fbfcff] py-20 sm:py-28 relative overflow-hidden">
      {/* Soft Decorative Glows */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 h-[500px] w-[500px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-[500px] w-[500px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/5 text-brand-purple text-xs font-bold uppercase tracking-wider border border-brand-purple/10">
              <GraduationCap className="h-4 w-4" />
              Academic Excellence
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 tracking-tight">
            Spiritually Trained Staff
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium opacity-80">
            Learn from practitioners who are active in ministry and led by the Holy Spirit.
          </p>
        </motion.div>

        <div className="staff-swiper-container">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            initialSlide={0}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-20"
          >
            {staffMembers.map((staff, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-white rounded-[2.5rem] p-10 text-center flex flex-col items-center group h-full transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(88,28,135,0.08)] border border-gray-100/50 relative"
                >
                  <div className="relative mb-8">
                    <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100 group-hover:border-brand-gold/30 transition-all duration-500 shadow-inner">
                      {staff.image ? (
                        <Image src={staff.image!} alt={staff.name} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 112px, 144px" />
                      ) : (
                        <User className="h-14 w-14 sm:h-18 sm:w-18 text-gray-300" />
                      )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-white p-2.5 rounded-2xl shadow-md border border-gray-50 transform group-hover:rotate-12 transition-all duration-500">
                      <GraduationCap className="h-5 w-5 text-brand-gold" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2 group-hover:text-brand-purple transition-colors duration-300">
                    {staff.name}
                  </h3>
                  <div className="h-1 w-8 bg-brand-gold/30 rounded-full mb-4 group-hover:w-12 transition-all duration-500 group-hover:bg-brand-gold" />
                  <p className="text-brand-purple font-bold text-sm uppercase tracking-widest mb-6">
                    {staff.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    {staff.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .staff-swiper-container .swiper-pagination-bullet {
          background: #e2e8f0;
          opacity: 1;
        }
        .staff-swiper-container .swiper-pagination-bullet-active {
          background: #581c87 !important;
          width: 24px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}


