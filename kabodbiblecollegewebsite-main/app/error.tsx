"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="h-24 w-24 rounded-full bg-red-100 flex items-center justify-center mb-8">
        <span className="font-heading font-bold text-red-500 text-4xl">!</span>
      </div>
      <h1 className="font-heading font-bold text-gray-900 text-3xl mb-4">
        Something Went Wrong
      </h1>
      <p className="text-gray-600 max-w-md mb-8">
        We encountered an unexpected error. Please try again or return to the
        home page.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={reset} className="btn-primary">
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>
        <Link href="/" className="btn-secondary">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
