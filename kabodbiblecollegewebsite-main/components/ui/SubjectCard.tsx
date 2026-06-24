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
        "group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-brand-purple/20 hover:shadow-lg hover:shadow-brand-purple/5",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple transition-colors duration-300 group-hover:bg-brand-purple group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-heading font-bold text-gray-900 text-base sm:text-lg">
          {title}
        </h3>
      </div>
    </div>
  );
}
