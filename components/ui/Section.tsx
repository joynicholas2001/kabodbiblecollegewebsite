import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Background: white | gray | purple */
  variant?: "white" | "gray" | "purple";
  /** Vertical padding size */
  padding?: "md" | "lg" | "xl";
  /** Optional ID for anchor links */
  id?: string;
}

const paddingMap = {
  md: "py-[40px] sm:py-[44px]",
  lg: "py-[48px] sm:py-[56px]",
  xl: "py-[56px] sm:py-[64px]",
};

const variantMap = {
  white: "bg-brand-light",
  gray: "bg-brand-soft",
  purple: "bg-gradient-to-br from-brand-purple to-brand-purple-light",
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
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
