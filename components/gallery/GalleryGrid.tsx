"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryGridProps = {
  images: string[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number>(-1);

  const openLightbox = (src: string, idx: number) => {
    setLightboxSrc(src);
    setLightboxIdx(idx);
  };

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
    setLightboxIdx(-1);
  }, []);

  const prev = useCallback(() => {
    setLightboxIdx((curr) => {
      if (curr > 0) {
        const nextIdx = curr - 1;
        setLightboxSrc(images[nextIdx]);
        return nextIdx;
      }
      return curr;
    });
  }, [images]);

  const next = useCallback(() => {
    setLightboxIdx((curr) => {
      if (curr < images.length - 1) {
        const nextIdx = curr + 1;
        setLightboxSrc(images[nextIdx]);
        return nextIdx;
      }
      return curr;
    });
  }, [images]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIdx === -1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIdx, closeLightbox, prev, next]);

  return (
    <>
      {/* Masonry Columns: Display whole image naturally according to its actual size/ratio without cropping */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {images.map((src, idx) => (
          <div key={idx} className="break-inside-avoid mb-4">
            <button
              type="button"
              onClick={() => openLightbox(src, idx)}
              className="group relative w-full overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card hover:shadow-card-hover hover:border-brand-gold/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 block text-left"
              aria-label={`View image ${idx + 1}`}
            >
              <img
                src={src}
                alt={`Gallery photo ${idx + 1}`}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                loading={idx < 8 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={idx < 4 ? "high" : "auto"}
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              {/* Hover overlay with zoom button */}
              <div className="absolute inset-0 bg-brand-navy-dark/0 group-hover:bg-brand-navy-dark/35 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30 shadow-lg transform scale-75 group-hover:scale-100">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[200] bg-brand-navy-dark/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          {/* Close button */}
          <button
            type="button"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          {lightboxIdx > 0 && (
            <button
              type="button"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/25 hover:border-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next button */}
          {lightboxIdx < images.length - 1 && (
            <button
              type="button"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/25 hover:border-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Whole Image Modal Container */}
          <div
            className="relative flex items-center justify-center max-w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxSrc}
              alt={`Gallery photo ${lightboxIdx + 1}`}
              className="max-w-[92vw] max-h-[85vh] sm:max-h-[88vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 block"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>

          {/* Counter pill */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-navy-dark/85 border border-white/20 backdrop-blur-md text-white text-xs px-4 py-1.5 rounded-full font-medium shadow-md">
            {lightboxIdx + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
