import { Metadata } from "next";
import { CONVOCATION_SLIDE_IMAGES } from "@/lib/carousel-slides";
import { CERTIFICATION_SLIDE_IMAGES } from "@/lib/certification-images";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import fs from "fs";
import path from "path";
import { Images } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery – Kabod Bible College",
  description:
    "Convocation and certification ceremony photographs from Kabod Bible College, celebrating the journey of our graduates.",
};

// Filter out any URLs whose file does not exist in the public folder
const ALL_IMAGES = [
  ...CONVOCATION_SLIDE_IMAGES,
  ...CERTIFICATION_SLIDE_IMAGES,
].filter((src) => {
  try {
    const filePath = path.join(process.cwd(), "public", src);
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
});

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-brand-ivory">
      {/* Page Hero Banner - reduced height */}
      <div className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-forest py-8 sm:py-10 border-b border-brand-gold/30 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-brand-forest/20 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-forest/60 text-brand-gold text-[11px] font-bold uppercase tracking-[0.2em] border border-brand-gold/30 mb-2.5">
            <Images className="w-3 h-3" />
            <span>Photo Archive</span>
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-1 mb-2.5 tracking-normal drop-shadow-lg">
            Photo Gallery
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Celebrating milestones, ministry moments, and the journey of our
            students at Kabod Bible College convocation and certification
            ceremonies.
          </p>
          {ALL_IMAGES.length > 0 && (
            <p className="mt-2 text-brand-gold text-xs sm:text-sm font-semibold">
              {ALL_IMAGES.length} photographs
            </p>
          )}
        </div>
      </div>

      {/* Gallery Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {ALL_IMAGES.length === 0 ? (
          <div className="text-center py-20 text-brand-slate">
            <Images className="w-16 h-16 mx-auto mb-4 text-brand-border" />
            <p className="text-lg font-medium">No images found.</p>
            <p className="text-sm mt-2 text-brand-slate/70">
              Gallery images will appear here once uploaded.
            </p>
          </div>
        ) : (
          <GalleryGrid images={ALL_IMAGES} />
        )}
      </div>
    </div>
  );
}
