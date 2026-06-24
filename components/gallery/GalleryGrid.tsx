"use client";
import React from "react";

type GalleryGridProps = {
  images: string[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {images.map((src, idx) => (
        <div key={idx} className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
            <img
              src={src}
              alt={`Image ${idx + 1}`}
              style={{ objectFit: "contain", userSelect: "none", width: "100%", height: "auto" }}
              className="object-contain"
              draggable={false}
              loading="lazy"
              decoding="async"
              onContextMenu={(e) => e.preventDefault()}
            />
        </div>
      ))}
    </div>
  );
}
