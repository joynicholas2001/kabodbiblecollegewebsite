"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-ivory flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="h-20 w-20 rounded-3xl bg-red-50 border border-red-200 flex items-center justify-center shadow-sm">
            <AlertTriangle className="h-10 w-10 text-red-500" />
          </div>
        </div>

        <h1 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy mb-3">
          Something Went Wrong
        </h1>
        <p className="text-brand-slate text-base leading-relaxed mb-8">
          An unexpected error occurred. Please try again or return to the
          homepage.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy-dark transition-colors shadow-md"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-brand-navy font-semibold text-sm border border-brand-border hover:border-brand-gold/50 hover:shadow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
