import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Mail, ArrowLeft, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kabod Bible College for details about our programs and ministry training.",
};

const CALL_NUMBER = "9963416422";
const WHATSAPP_NUMBER = "7358484266";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-ivory">
      {/* Page Hero Banner - reduced height */}
      <div className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-forest py-8 sm:py-10 border-b border-brand-gold/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-forest/20 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-forest/60 text-brand-gold text-[11px] font-bold uppercase tracking-[0.2em] border border-brand-gold/30 mb-2.5">
            <Phone className="w-3 h-3" />
            <span>Reach Out</span>
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1 mb-2.5 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Get in touch to know about the details of the Bible College —
            programs and ministry training.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="space-y-5">
          {/* Phone Call */}
          <a
            href={`tel:+91${CALL_NUMBER}`}
            className="flex items-center gap-5 p-6 sm:p-7 rounded-2xl bg-white border border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-gold/50 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-brand-gold border border-brand-navy/20 group-hover:bg-brand-forest group-hover:text-brand-gold transition-all duration-300 shadow-sm shrink-0">
              <Phone className="h-7 w-7" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-bold text-brand-slate uppercase tracking-wider mb-1">
                Phone — Calls
              </p>
              <p className="font-heading font-bold text-xl sm:text-2xl text-brand-navy group-hover:text-brand-navy-dark">
                {CALL_NUMBER.replace(/(\d{5})(\d{5})/, "$1 $2")}
              </p>
              <p className="text-sm text-brand-slate mt-1">
                Tap to call directly
              </p>
            </div>
            <div className="shrink-0 text-brand-border group-hover:text-brand-gold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/91${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-6 sm:p-7 rounded-2xl bg-white border border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-gold/50 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-forest text-white group-hover:bg-brand-navy transition-all duration-300 shadow-sm shrink-0">
              <MessageCircle className="h-7 w-7" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-bold text-brand-slate uppercase tracking-wider mb-1">
                WhatsApp — Chat
              </p>
              <p className="font-heading font-bold text-xl sm:text-2xl text-brand-navy group-hover:text-brand-navy-dark">
                {WHATSAPP_NUMBER.replace(/(\d{5})(\d{5})/, "$1 $2")}
              </p>
              <p className="text-sm text-brand-slate mt-1">
                Message us on WhatsApp
              </p>
            </div>
            <div className="shrink-0 text-brand-border group-hover:text-brand-gold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:kabodbiblecollege@gmail.com"
            className="flex items-center gap-5 p-6 sm:p-7 rounded-2xl bg-white border border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-gold/50 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/20 text-brand-gold-dark border border-brand-gold/30 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300 shadow-sm shrink-0">
              <Mail className="h-7 w-7" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-bold text-brand-slate uppercase tracking-wider mb-1">
                Email Address
              </p>
              <p className="font-heading font-bold text-lg sm:text-xl text-brand-navy break-all group-hover:text-brand-navy-dark">
                kabodbiblecollege@gmail.com
              </p>
              <p className="text-sm text-brand-slate mt-1">
                Send us an email
              </p>
            </div>
            <div className="shrink-0 text-brand-border group-hover:text-brand-gold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>

        {/* Back Link */}
        <p className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-forest transition-colors underline-offset-2 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
