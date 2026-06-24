import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kabod Bible College for details about our programs, admission, and ministry training.",
};

const CALL_NUMBER = "9963416422";
const WHATSAPP_NUMBER = "7358484266";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-soft pt-[80px] pb-[60px]">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-brand-purple mb-3">
            Contact Us
          </h1>
          <p className="text-brand-muted leading-relaxed">
            Get in touch to know about the details of the Bible College — programs,
            admission, and ministry training.
          </p>
        </div>

        <div className="rounded-2xl bg-brand-light shadow-card-hover border-0 overflow-hidden">
          <div className="p-6 sm:p-8 space-y-6">
            <a
              href={`tel:+91${CALL_NUMBER}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-brand-soft/80 hover:bg-brand-card/60 border border-brand-card/80 hover:border-brand-purple/25 transition-all duration-300 ease-in-out group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 ease-in-out">
                <Phone className="h-6 w-6" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs font-medium text-brand-muted uppercase tracking-wider mb-0.5">
                  Calls
                </p>
                <p className="font-heading font-bold text-lg text-brand-purple">
                  {CALL_NUMBER.replace(/(\d{5})(\d{5})/, "$1 $2")}
                </p>
                <p className="text-sm text-brand-muted mt-1">
                  Tap to call
                </p>
              </div>
            </a>

            <a
              href={`https://wa.me/91${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-brand-soft/80 hover:bg-brand-card/60 border border-brand-card/80 hover:border-brand-purple-light/40 transition-all duration-300 ease-in-out group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple-light/20 text-brand-purple group-hover:bg-brand-purple-light group-hover:text-white transition-all duration-300 ease-in-out">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs font-medium text-brand-muted uppercase tracking-wider mb-0.5">
                  WhatsApp
                </p>
                <p className="font-heading font-bold text-lg text-brand-purple">
                  {WHATSAPP_NUMBER.replace(/(\d{5})(\d{5})/, "$1 $2")}
                </p>
                <p className="text-sm text-brand-muted mt-1">
                  Message us on WhatsApp
                </p>
              </div>
            </a>
          </div>
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-brand-purple hover:text-brand-gold underline-offset-2 hover:underline transition-colors duration-300 ease-in-out"
          >
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
