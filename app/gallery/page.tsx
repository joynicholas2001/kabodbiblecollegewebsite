import { Metadata } from "next";
import { CONVOCATION_SLIDE_IMAGES } from "@/lib/carousel-slides";
import { CERTIFICATION_SLIDE_IMAGES } from "@/lib/certification-images";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Gallery – Kabod Bible College",
  description:
    "All convocation and certification photos displayed in a responsive gallery.",
};

// Filter out any URLs whose file does not exist in the public folder
const ALL_IMAGES = [...CONVOCATION_SLIDE_IMAGES, ...CERTIFICATION_SLIDE_IMAGES].filter((src) => {
  try {
    const filePath = path.join(process.cwd(), "public", src);
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
});

export default function GalleryPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-12 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center font-heading text-yellow-400 mb-8">
          Gallery
        </h1>
        <GalleryGrid images={ALL_IMAGES} />
      </div>
    </section>
  );
}
