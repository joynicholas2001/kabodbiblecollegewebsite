import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  center?: boolean;
  /** Use on dark backgrounds (e.g. purple section) for light text */
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
        <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold mb-4 font-heading",
          dark ? "text-white" : "text-brand-purple"
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            "text-lg max-w-2xl mt-4",
            dark ? "text-white/80" : "text-gray-600",
            center && "mx-auto"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
