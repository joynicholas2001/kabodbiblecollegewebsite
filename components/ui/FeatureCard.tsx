import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  className?: string;
  iconClassName?: string;
  /** Use for dark backgrounds (e.g. purple section) */
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
        "rounded-2xl border p-6 sm:p-8 transition-all duration-300",
        dark
          ? "border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/15 hover:border-brand-soft/30 transition-all duration-300 ease-in-out"
          : "border-0 bg-brand-card shadow-card hover:shadow-card-hover",
        className
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl mb-4",
          dark
            ? "bg-brand-gold/20 text-brand-gold"
            : "bg-brand-purple/10 text-brand-purple",
          iconClassName
        )}
      >
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>
      <h3
        className={cn(
          "font-heading font-bold text-lg sm:text-xl",
          dark ? "text-white" : "text-brand-purple"
        )}
      >
        {title}
      </h3>
      {description && (
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            dark ? "text-brand-soft/90" : "text-brand-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
