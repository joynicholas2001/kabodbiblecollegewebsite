"use client";

import Link from "next/link";
import { Home, Construction } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="h-24 w-24 rounded-full bg-brand-purple/10 flex items-center justify-center mb-8">
        <Construction className="h-12 w-12 text-brand-purple" />
      </div>
      <h1 className="font-heading font-bold text-brand-purple text-4xl sm:text-5xl mb-4">
        Page Under Development
      </h1>
      <p className="text-gray-600 max-w-md mb-8">
        This page is currently under development. Please check back later or
        return to the homepage.
      </p>
      <Link href="/" className="btn-primary">
        <Home className="h-4 w-4" />
        Back to Home
      </Link>
    </div>
  );
}
