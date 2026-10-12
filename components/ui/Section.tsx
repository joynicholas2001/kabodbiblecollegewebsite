import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Background variant */
  variant?: "white" | "gray" | "purple" | "ivory" | "navy" | "forest";
  /** Vertical padding size */
  padding?: "md" | "lg" | "xl";
  /** Optional ID for anchor links */
  id?: string;
}

const paddingMap = {
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-20",
  xl: "py-20 sm:py-28",
};

const variantMap = {
  white: "bg-white",
  gray: "bg-brand-ivory",
  ivory: "bg-brand-ivory",
  purple: "bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-forest text-white",
  navy: "bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-forest text-white",
  forest: "bg-gradient-to-br from-brand-forest-dark via-brand-forest to-brand-navy text-white",
};

export default function Section({
  children,
  className,
  variant = "white",
  padding = "lg",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        variantMap[variant],
        paddingMap[padding],
        "relative overflow-hidden",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}
