"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close mobile menu on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className={clsx(
        "relative w-full transition-all duration-300 ease-in-out border-b",
        scrolled
          ? "bg-brand-navy/95 backdrop-blur-md shadow-lg border-brand-gold/20"
          : "bg-brand-navy border-white/10"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-24 items-center justify-between gap-4">
          {/* Logo & Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 sm:gap-4 group shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 shrink-0 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
              <Image
                src="/images/KBC LOGO White label.png"
                alt="Kabod Bible College Logo"
                fill
                priority
                className="object-contain scale-[1.9] sm:scale-[2.2]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-xl lg:text-2xl text-white tracking-wider uppercase leading-none drop-shadow-sm group-hover:text-brand-gold-light transition-colors">
                Kabod Bible College
              </span>
              <span className="text-[11px] sm:text-xs font-medium tracking-[0.2em] text-brand-gold uppercase mt-1">
                Equipping for His Glory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 relative",
                    isActive
                      ? "text-brand-gold bg-white/10 shadow-sm"
                      : "text-white/90 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl text-white hover:text-brand-gold hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors duration-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Hovers over website content below without shifting layout) */}
      <div
        className={clsx(
          "absolute top-full left-0 right-0 w-full lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0E1D2F] border-t border-brand-gold/20 border-b border-brand-gold/30 shadow-2xl z-50",
          mobileOpen
            ? "max-h-[360px] opacity-100 visible pointer-events-auto"
            : "max-h-0 opacity-0 invisible pointer-events-none"
        )}
        style={{ backgroundColor: "#0E1D2F" }}
      >
        <nav className="mx-auto max-w-7xl px-4 py-5 flex flex-col gap-1.5">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-colors",
                  isActive
                    ? "bg-brand-navy text-brand-gold border border-brand-gold/30"
                    : "text-white/90 hover:bg-white/5 hover:text-white"
                )}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
