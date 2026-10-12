import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-brand-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual / Scripture Memorial Block */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-forest p-1 shadow-xl overflow-hidden group">
              {/* Subtle inner gold border */}
              <div className="rounded-[22px] border border-brand-gold/30 p-8 sm:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden bg-black/20 backdrop-blur-xs">
                {/* Decorative background watermark */}
                <div className="absolute -right-8 -bottom-8 opacity-10 text-white font-heading font-black text-9xl select-none pointer-events-none">
                  K
                </div>

                <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-brand-forest/60 border-2 border-brand-gold flex items-center justify-center mb-6 shadow-gold-glow">
                  <span className="text-brand-gold font-heading font-extrabold text-3xl sm:text-4xl">
                    K
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-brand-gold/80">
                  <BookOpen className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs uppercase tracking-widest font-semibold">
                    Foundational Scripture
                  </span>
                </div>

                <blockquote className="text-white text-lg sm:text-xl font-heading font-medium italic leading-relaxed">
                  &ldquo;For the earth shall be filled with the knowledge of the
                  glory of the LORD&rdquo;
                </blockquote>

                <cite className="text-brand-gold text-sm font-bold tracking-wider uppercase mt-4 block not-italic">
                  — Habakkuk 2:14
                </cite>
              </div>
            </div>
          </div>

          {/* Content Block */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="inline-block text-brand-forest font-bold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1 bg-brand-forest/10 rounded-full border border-brand-forest/20">
              About Kabod
            </span>

            <h2 className="section-heading mb-6 gold-underline pb-3">
              Our Founding Vision
            </h2>

            <div className="space-y-4 text-brand-slate leading-relaxed text-base sm:text-lg mb-8">
              <p>
                Kabod Bible College was birthed in 2020 with a clear mandate: to
                raise up disciples who are filled with the Holy Spirit and
                grounded in the Word of God. We believe every believer is called
                to carry the glory of God — not only in worship, but in character,
                service, and mission.
              </p>
              <p>
                Our founding vision is to see men and women trained in sound
                doctrine, empowered by the Spirit, and sent into their families,
                churches, and nations as carriers of God&apos;s presence and truth.
              </p>
            </div>

            {/* Kabod Meaning Callout */}
            <div className="rounded-2xl bg-brand-ivory border border-brand-border p-6 sm:p-7 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-gold" />
              <h3 className="font-heading font-bold text-brand-navy text-lg sm:text-xl mb-2 flex items-center gap-2">
                <span>What does &ldquo;Kabod&rdquo; mean?</span>
              </h3>
              <p className="text-brand-slate leading-relaxed text-sm sm:text-base">
                <strong className="text-brand-navy">Kabod</strong> (כָּבוֹד,
                <em className="text-brand-forest font-medium"> Kāḇôḏ</em>) is the
                Hebrew word for <strong>glory</strong>. It literally carries the
                idea of <strong className="text-brand-navy">weight</strong> or{" "}
                <strong className="text-brand-navy">heaviness</strong> — the
                weight of God&apos;s presence, His honor, and His majesty. At
                Kabod Bible College, we train disciples to live and minister
                under that glory, so that the knowledge of the LORD fills the
                earth.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/about" className="btn-primary">
                <span>Learn More About Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
