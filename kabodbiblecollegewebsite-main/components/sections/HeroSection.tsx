import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

const stats = [
  { icon: BookOpen, value: "20+", label: "Years of Excellence" },
  { icon: Users, value: "5,000+", label: "Alumni Worldwide" },
  { icon: Award, value: "15+", label: "Accredited Programs" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-brand pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-brand-gold blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-gold blur-3xl" />
      </div>

      {/* Decorative Cross Pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5B800' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 border border-brand-gold/40 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-brand-gold text-sm font-medium">
                Admissions Open — 2026 Intake
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Walk in the{" "}
              <span className="text-brand-gold relative">
                Glory
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6C50 2 150 2 198 6"
                    stroke="#F5B800"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              of His Word
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
              Kabod Bible College equips believers with deep biblical knowledge,
              spiritual wisdom, and practical ministry skills — preparing you for
              a life of purpose, service, and Kingdom impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/admission" className="btn-primary">
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/programs" className="btn-outline-white">
                Explore Programs
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="mx-auto h-20 w-20 rounded-full bg-brand-gold flex items-center justify-center shadow-lg mb-4">
                  <BookOpen className="h-10 w-10 text-brand-purple-dark" />
                </div>
                <p className="text-brand-gold font-heading font-bold text-xl">
                  &ldquo;Kabod&rdquo; — the Glory of God
                </p>
                <p className="text-white/60 text-sm mt-1">
                  Hebrew: כָּבוֹד (Kāḇôḏ)
                </p>
              </div>

              <div className="space-y-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10"
                  >
                    <div className="h-10 w-10 rounded-xl bg-brand-gold/20 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-xl leading-none">
                        {value}
                      </p>
                      <p className="text-white/60 text-xs mt-1">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
