import Link from "next/link";
import { BookOpen, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-ivory flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="h-24 w-24 rounded-3xl bg-brand-navy flex items-center justify-center shadow-lg border border-brand-gold/20">
              <BookOpen className="h-12 w-12 text-brand-gold" />
            </div>
            <div className="absolute -top-2 -right-2 h-8 w-8 rounded-xl bg-brand-gold flex items-center justify-center text-brand-navy font-bold text-sm font-heading shadow-md">
              ?
            </div>
          </div>
        </div>

        {/* Error Code */}
        <div className="font-heading font-extrabold text-8xl sm:text-9xl text-brand-navy/10 leading-none select-none mb-6">
          404
        </div>

        <h1 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy mb-3 -mt-4">
          Page Not Found
        </h1>
        <p className="text-brand-slate text-base leading-relaxed mb-8">
          The page you are looking for may have been moved, deleted, or does
          not exist. Please return to the homepage.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy-dark transition-colors shadow-md"
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-brand-navy font-semibold text-sm border border-brand-border hover:border-brand-gold/50 hover:shadow-sm transition-all"
          >
            <Search className="w-4 h-4" />
            About KBC
          </Link>
        </div>
      </div>
    </div>
  );
}
