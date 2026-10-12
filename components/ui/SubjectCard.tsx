import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubjectCardProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

export default function SubjectCard({
  icon: Icon,
  title,
  className,
}: SubjectCardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-brand-border bg-white p-6 shadow-card transition-all duration-300 ease-in-out hover:shadow-card-hover hover:border-brand-gold/50 hover:-translate-y-0.5",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-forest/10 text-brand-forest border border-brand-forest/20 transition-all duration-300 group-hover:bg-brand-navy group-hover:text-brand-gold group-hover:scale-105">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-heading font-bold text-brand-navy text-base sm:text-lg group-hover:text-brand-navy-dark transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
}
