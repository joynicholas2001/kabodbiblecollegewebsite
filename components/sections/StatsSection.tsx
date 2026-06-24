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
    <section className="py-[60px] bg-brand-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map(({ icon: Icon, value, label, description }) => (
            <div
              key={label}
              className="group relative rounded-2xl bg-brand-card border-0 shadow-card p-6 sm:p-8 text-center transition-all duration-300 ease-in-out hover:shadow-card-hover"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple/10 text-brand-purple mb-4 group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
                <Icon className="h-7 w-7" />
              </div>
              <p className="font-poppins font-bold text-3xl sm:text-4xl text-brand-purple leading-none">
                {value}
              </p>
              <p className="mt-2 font-semibold text-brand-purple text-lg">{label}</p>
              <p className="mt-2 text-brand-muted text-sm leading-relaxed max-w-xs mx-auto">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
