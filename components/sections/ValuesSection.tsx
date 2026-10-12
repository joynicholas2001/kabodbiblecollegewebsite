import { Shield, Flame, Globe, BookMarked, Star, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Biblical Authority",
    description:
      "We hold the Word of God as our highest authority in all matters of faith, life, and ministry.",
  },
  {
    icon: Flame,
    title: "Spirit-Led Living",
    description:
      "We cultivate a culture of prayer, worship, and dependence on the Holy Spirit in all we do.",
  },
  {
    icon: Globe,
    title: "Global Mission",
    description:
      "Every student is trained with a heart for the nations and a vision to reach the world for Christ.",
  },
  {
    icon: BookMarked,
    title: "Academic Excellence",
    description:
      "We pursue the highest standards of scholarship, critical thinking, and theological integrity.",
  },
  {
    icon: Star,
    title: "Character Formation",
    description:
      "We believe ministry flows from character. We invest deeply in shaping godly, humble leaders.",
  },
  {
    icon: HeartHandshake,
    title: "Community & Service",
    description:
      "We build a family of believers who love, serve, and sharpen one another in daily life.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-brand-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-forest font-bold text-xs uppercase tracking-[0.2em] mb-3 px-3.5 py-1 bg-brand-forest/10 rounded-full border border-brand-forest/20">
            Our Core Values
          </span>
          <h2 className="section-heading mx-auto">
            What We Stand For
          </h2>
          <p className="section-subheading mx-auto text-center mt-4">
            Our values are the foundation on which everything at Kabod Bible
            College is built — shaping every course, relationship, and ministry.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {values.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="group p-7 rounded-2xl bg-brand-ivory border border-brand-border/80 hover:border-brand-gold/50 hover:bg-white hover:shadow-card transition-all duration-300 flex gap-5"
            >
              <div className="shrink-0">
                <div className="h-13 w-13 rounded-2xl bg-brand-forest/10 border border-brand-forest/20 flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                  <Icon className="h-6 w-6 text-brand-forest group-hover:text-brand-gold transition-colors duration-300" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-brand-gold font-mono text-xs font-bold">
                    0{index + 1}
                  </span>
                  <h3 className="font-heading font-bold text-brand-navy text-base sm:text-lg">
                    {title}
                  </h3>
                </div>
                <p className="text-brand-slate text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
