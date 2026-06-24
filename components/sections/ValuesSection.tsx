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
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Our Core Values
          </p>
          <h2 className="section-heading mx-auto">
            What We Stand For
          </h2>
          <p className="section-subheading mx-auto text-center">
            Our values are the foundation on which everything at Kabod Bible
            College is built — shaping every course, relationship, and ministry.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="group flex gap-5">
              <div className="shrink-0">
                <div className="h-12 w-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center group-hover:bg-brand-purple transition-colors duration-300">
                  <Icon className="h-6 w-6 text-brand-purple group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-brand-gold font-mono text-xs font-bold">
                    0{index + 1}
                  </span>
                  <h3 className="font-heading font-bold text-brand-purple-dark text-base">
                    {title}
                  </h3>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed">
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
