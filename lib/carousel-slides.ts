/**
 * Hero carousel slide images from Convocation 24.
 * Images in public/images/convocation/
 * (Spaces encoded as %20 for reliable loading.)
 */
export const CONVOCATION_SLIDE_IMAGES = [
  "/images/convocation/20260620_151128.jpg",
  "/images/convocation/IMG_20260620_140806.jpg",
  "/images/convocation/20260620_152158.jpg",
  "/images/convocation/IMG-20260621-WA0045%281%29.jpg",
  "/images/convocation/IMG_20260620_140711.jpg",
  "/images/convocation/IMG_20260620_140750.jpg",
  "/images/convocation/IMG_20260620_142326.jpg",
  "/images/convocation/SLIDE%201.JPG",
  "/images/convocation/SLIDE%202.JPG",
  "/images/convocation/SLIDE%203.JPG",
  "/images/convocation/SLIDE%204.jpg",
] as const;

/** Fallback gradient when image is missing or fails to load */
export const SLIDE_FALLBACK_CLASS =
  "bg-gradient-to-br from-brand-purple via-brand-purple-dark to-brand-purple";
