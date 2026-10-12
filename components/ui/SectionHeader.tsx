import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  center?: boolean;
  /** Use on dark backgrounds for light text */
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  center = false,
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(center && "text-center", className)}>
      {eyebrow && (
        <div className={cn("mb-3", center && "flex justify-center")}>
          <span
            className={cn(
              "inline-block text-xs font-bold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full",
              dark
                ? "bg-brand-forest/60 text-brand-gold border border-brand-gold/30"
                : "bg-brand-forest/10 text-brand-forest border border-brand-forest/20"
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight",
          dark ? "text-white drop-shadow-sm" : "text-brand-navy"
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            "text-base sm:text-lg max-w-2xl mt-4 leading-relaxed",
            dark ? "text-slate-200" : "text-brand-slate",
            center && "mx-auto"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
