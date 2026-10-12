import { Calendar, GraduationCap, Users, Heart } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "2020",
    label: "Founded",
    description: "Established in faith for such a time as this",
  },
  {
    icon: GraduationCap,
    value: "6",
    label: "Batches Completed",
    description: "Graduating equipped ministers and leaders",
  },
  {
    icon: Users,
    value: "90+",
    label: "Students Trained",
    description: "Disciples sent into the harvest field",
  },
  {
    icon: Heart,
    value: "24/7",
    label: "Prayer Team",
    description: "Round-the-clock intercession and support",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-brand-ivory relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map(({ icon: Icon, value, label, description }) => (
            <div
              key={label}
              className="group relative rounded-2xl bg-white border border-brand-border p-7 sm:p-8 text-center shadow-card hover:shadow-card-hover hover:border-brand-gold/50 transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-forest/10 text-brand-forest mb-5 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors duration-300 border border-brand-forest/15">
                <Icon className="h-7 w-7" />
              </div>

              <p className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy leading-none tracking-tight">
                {value}
              </p>

              <div className="h-0.5 w-8 bg-brand-gold/40 mx-auto my-3 group-hover:w-12 group-hover:bg-brand-gold transition-all duration-300" />

              <p className="font-heading font-bold text-brand-navy text-base tracking-wide">
                {label}
              </p>

              <p className="mt-2 text-brand-slate text-sm leading-relaxed max-w-xs mx-auto">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
