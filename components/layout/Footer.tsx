import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Instagram,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/kabodbibleclass?igsh=MWt3OWkyODJ5Z2o5Yw==", label: "Instagram" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-purple text-brand-soft">
      {/* Accent top stripe */}
      <div className="h-1 bg-brand-gold" />

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/doxdubjgb/image/upload/f_auto,q_auto,w_160/v1772789866/KBC_LOGO_PNG_pejihp.png"
                  alt="KBC Logo"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain scale-110"
                />
              </div>
              <span className="text-brand-soft font-heading font-bold text-base tracking-wide uppercase">
                Kabod Bible College
              </span>
            </Link>
            <p className="text-brand-soft/85 text-sm leading-relaxed mb-6">
              Equipping believers with biblical knowledge, spiritual wisdom, and
              ministry skills for a life of purpose and service to God and
              humanity.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-cta-text text-brand-soft/90 transition-all duration-300 ease-in-out"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-brand-gold mb-5 text-base tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-brand-soft/80 hover:text-brand-gold text-sm transition-colors duration-300 ease-in-out flex items-center gap-2 group"
                  >
                    <span className="h-px w-4 bg-brand-gold/40 group-hover:w-6 group-hover:bg-brand-gold transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-brand-gold mb-5 text-base">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+91 9963416422"
                  className="flex items-center gap-3 text-sm text-brand-soft/80 hover:text-brand-gold transition-colors duration-300 ease-in-out"
                >
                  <Phone className="h-4 w-4 text-brand-gold shrink-0" />
                  +91 9963416422
                </a>
              </li>
              <li>
                <a
                  href="mailto:kabodbiblecollege@gmail.com"
                  className="flex items-center gap-3 text-sm text-brand-soft/80 hover:text-brand-gold transition-colors duration-300 ease-in-out"
                >
                  <Mail className="h-4 w-4 text-brand-gold shrink-0" />
                  kabodbiblecollege@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-brand-soft/65 text-xs text-center sm:text-left">
            &copy; {currentYear} Kabod Bible College. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-brand-soft/65 hover:text-brand-gold text-xs transition-colors duration-300 ease-in-out"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
