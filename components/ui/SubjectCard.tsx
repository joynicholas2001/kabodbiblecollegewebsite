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
        "group rounded-2xl border-0 bg-brand-card p-6 shadow-card transition-all duration-300 ease-in-out hover:shadow-card-hover",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple transition-colors duration-300 group-hover:bg-brand-purple group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-heading font-bold text-brand-purple text-base sm:text-lg">
          {title}
        </h3>
      </div>
    </div>
  );
}
