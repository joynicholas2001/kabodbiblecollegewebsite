"use client";

import { useState, useEffect } from "react";

/**
 * Returns the current vertical scroll position.
 */
export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}

/**
 * Returns true when the page has scrolled past the given threshold.
 */
export function useScrolled(threshold = 20): boolean {
  const scrollY = useScrollPosition();
  return scrollY > threshold;
}
