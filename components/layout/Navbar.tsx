"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Gallery", href: "/gallery" },
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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-brand-purple/95 backdrop-blur-md shadow-lg"
          : "bg-brand-purple"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 lg:gap-2 flex-nowrap group -ml-9"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/images/KBC LOGO White label.png"
              alt="KBC Logo"
              width={120}
              height={120}
              priority
              className="h-55 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-[#F5D6B3] font-heading font-bold text-base tracking-wide uppercase whitespace-nowrap -ml-5">
              Kabod Bible College
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-white hover:text-brand-gold text-sm font-medium transition-colors duration-300 ease-in-out"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:text-brand-gold transition-colors duration-300 ease-in-out"
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
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-brand-purple border-t border-white/10",
          mobileOpen ? "max-h-screen pb-6" : "max-h-0"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 pt-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-white hover:text-brand-gold text-sm font-medium transition-colors duration-300 ease-in-out"
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
