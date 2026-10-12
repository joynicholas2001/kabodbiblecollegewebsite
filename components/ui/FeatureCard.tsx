import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  className?: string;
  iconClassName?: string;
  /** Use for dark backgrounds */
  dark?: boolean;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
  dark = false,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-7 sm:p-8 transition-all duration-300 relative group",
        dark
          ? "border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:border-brand-gold/50 shadow-lg text-white"
          : "border border-brand-border bg-white shadow-card hover:shadow-card-hover hover:border-brand-gold/40 hover:-translate-y-1",
        className
      )}
    >
      <div
        className={cn(
          "flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-105",
          dark
            ? "bg-brand-forest/60 text-brand-gold border border-brand-gold/30 shadow-md"
            : "bg-brand-forest/10 text-brand-forest border border-brand-forest/20 group-hover:bg-brand-navy group-hover:text-brand-gold",
          iconClassName
        )}
      >
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>
      <h3
        className={cn(
          "font-heading font-bold text-lg sm:text-xl mb-2 tracking-normal",
          dark ? "text-white" : "text-brand-navy"
        )}
      >
        {title}
      </h3>
      {description && (
        <p
          className={cn(
            "text-sm leading-relaxed",
            dark ? "text-slate-200" : "text-brand-slate"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
