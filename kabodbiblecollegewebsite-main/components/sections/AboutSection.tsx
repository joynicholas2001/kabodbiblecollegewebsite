import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Visual / Scripture block */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand-purple to-brand-purple-dark overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 sm:p-12 text-center">
                <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-brand-gold/20 border-4 border-brand-gold flex items-center justify-center mb-6">
                  <span className="text-brand-gold font-heading font-bold text-3xl sm:text-4xl">
                    K
                  </span>
                </div>
                <p className="text-white/95 text-base sm:text-lg font-medium italic font-heading leading-relaxed">
                  &ldquo;For the earth shall be filled with the knowledge of the
                  glory of the LORD&rdquo;
                </p>
                <p className="text-brand-gold text-sm font-semibold mt-4">
                  — Habakkuk 2:14
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
              About Kabod
            </p>
            <h2 className="section-heading pb-2 gold-underline mb-6">
              Our Founding Vision
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kabod Bible College was birthed in 2020 with a clear mandate: to
              raise up disciples who are filled with the Holy Spirit and
              grounded in the Word of God. We believe every believer is called
              to carry the glory of God — not only in worship, but in character,
              service, and mission.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our founding vision is to see men and women trained in sound
              doctrine, empowered by the Spirit, and sent into their families,
              churches, and nations as carriers of God&apos;s presence and truth.
            </p>

            {/* Kabod meaning callout */}
            <div className="rounded-2xl bg-white border border-brand-purple/10 p-6 shadow-sm">
              <h3 className="font-heading font-bold text-brand-purple text-lg mb-2">
                What does &ldquo;Kabod&rdquo; mean?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-brand-purple">Kabod</strong> (כָּבוֹד,
                <em className="text-gray-600"> Kāḇôḏ</em>) is the Hebrew word
                for <strong>glory</strong>. It literally carries the idea of{" "}
                <strong className="text-brand-purple">weight</strong> or{" "}
                <strong className="text-brand-purple">heaviness</strong> — the
                weight of God&apos;s presence, His honor, and His majesty. At
                Kabod Bible College, we train disciples to live and minister
                under that glory, so that the knowledge of the LORD fills the
                earth.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
