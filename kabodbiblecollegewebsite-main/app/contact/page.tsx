import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kabod Bible College for details about our programs, admission, and ministry training.",
};

const CALL_NUMBER = "9963416422";
const WHATSAPP_NUMBER = "7358424266";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-brand-purple mb-3">
            Contact Us
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Get in touch to know about the details of the Bible College — programs,
            admission, and ministry training.
          </p>
        </div>

        <div className="rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-8 space-y-6">
            <a
              href={`tel:+91${CALL_NUMBER}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-brand-purple/5 border border-gray-100 hover:border-brand-purple/20 transition-colors group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                <Phone className="h-6 w-6" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-0.5">
                  Calls
                </p>
                <p className="font-heading font-bold text-lg text-brand-purple">
                  {CALL_NUMBER.replace(/(\d{5})(\d{5})/, "$1 $2")}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Tap to call
                </p>
              </div>
            </a>

            <a
              href={`https://wa.me/91${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 transition-colors group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-0.5">
                  WhatsApp
                </p>
                <p className="font-heading font-bold text-lg text-brand-purple">
                  {WHATSAPP_NUMBER.replace(/(\d{5})(\d{5})/, "$1 $2")}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Message us on WhatsApp
                </p>
              </div>
            </a>
          </div>
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-brand-purple hover:text-brand-purple-dark hover:underline"
          >
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
