import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/kabodbibleclass?igsh=MWt3OWkyODJ5Z2o5Yw==",
    label: "Instagram",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-white border-t border-brand-gold/30 relative overflow-hidden">
      {/* Decorative top accent line with gold shimmer */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-forest via-brand-gold to-brand-forest" />

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Institutional Identity Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3.5 mb-6 group w-fit">
              <div className="relative h-14 w-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/KBC LOGO White label.png"
                  alt="Kabod Bible College Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading font-bold text-xl tracking-wider uppercase">
                  Kabod Bible College
                </span>
                <span className="text-xs text-brand-gold tracking-[0.2em] uppercase font-medium">
                  Theological & Ministry Training
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-md">
              Equipping believers with biblical knowledge, spiritual wisdom, and
              ministry skills for a life of purpose and service to God and
              humanity.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-brand-gold hover:text-brand-navy text-white transition-all duration-300 shadow-sm border border-white/10 hover:border-brand-gold"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-semibold text-brand-gold mb-5 text-base tracking-wider uppercase flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-gold" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-300 hover:text-brand-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="h-px w-3 bg-brand-gold/40 group-hover:w-5 group-hover:bg-brand-gold transition-all duration-200" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="font-heading font-semibold text-brand-gold mb-5 text-base tracking-wider uppercase flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-gold" />
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919963416422"
                  className="flex items-center gap-3.5 text-sm text-slate-300 hover:text-white p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/40 transition-all duration-200 group"
                >
                  <div className="h-8 w-8 rounded-lg bg-brand-forest/60 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      Call Us
                    </span>
                    <span className="font-semibold text-white group-hover:text-brand-gold transition-colors">
                      +91 9963416422
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kabodbiblecollege@gmail.com"
                  className="flex items-center gap-3.5 text-sm text-slate-300 hover:text-white p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/40 transition-all duration-200 group"
                >
                  <div className="h-8 w-8 rounded-lg bg-brand-forest/60 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      Email Address
                    </span>
                    <span className="font-semibold text-white group-hover:text-brand-gold transition-colors break-all">
                      kabodbiblecollege@gmail.com
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            &copy; {currentYear} Kabod Bible College. All rights reserved.
          </p>

          <div className="text-center">
            <a
              href="https://visionbreathsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-brand-gold transition-colors duration-200 inline-flex items-center gap-1.5 group"
            >
              <span>Powered By —</span>
              <span className="font-semibold text-brand-gold group-hover:underline">
                Vision Breath Solutions Pvt. Ltd.
              </span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="hover:text-brand-gold transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600">&bull;</span>
            <Link
              href="#"
              className="hover:text-brand-gold transition-colors duration-200"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
