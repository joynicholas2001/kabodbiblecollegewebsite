"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "relative w-full transition-all duration-300",
        scrolled
          ? "bg-brand-purple/95 backdrop-blur-md shadow-lg"
          : "bg-brand-purple"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-105">
              <Image 
                src="https://res.cloudinary.com/doxdubjgb/image/upload/v1772789866/KBC_LOGO_PNG_pejihp.png" 
                alt="KBC Logo" 
                fill
                className="object-contain scale-110"
                sizes="80px"
              />
            </div>
            <span className="text-white font-heading font-bold text-base tracking-wide uppercase">
              Kabod Bible College
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/admission" className="btn-primary text-sm">
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-300 bg-brand-purple-dark border-t border-white/10",
          mobileOpen ? "max-h-screen pb-6" : "max-h-0"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 pt-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 px-4">
            <Link
              href="/admission"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full text-center"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
