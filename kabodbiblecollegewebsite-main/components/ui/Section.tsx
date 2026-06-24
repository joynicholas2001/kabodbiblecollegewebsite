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
  md: "py-14 sm:py-16",
  lg: "py-20 sm:py-24",
  xl: "py-24 sm:py-28",
};

const variantMap = {
  white: "bg-white",
  gray: "bg-gray-50",
  purple: "bg-gradient-to-br from-brand-purple to-brand-purple-dark",
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
