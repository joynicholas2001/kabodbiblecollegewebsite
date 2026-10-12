"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ensures every page shows the entry (top) only — no footer visible until user scrolls.
 * Disables browser scroll restoration and forces scroll to top on every navigation.
 */
function scrollToTop() {
  if (typeof window === "undefined") return;
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Stop the browser from restoring previous scroll position on navigation
    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    scrollToTop();

    const rafId = requestAnimationFrame(() => {
      scrollToTop();
      requestAnimationFrame(scrollToTop);
    });

    // Keep forcing top after redirects and paint (Admissions → Admission, etc.)
    const timeouts = [0, 50, 150, 350, 700].map((ms) =>
      setTimeout(scrollToTop, ms)
    );

    return () => {
      cancelAnimationFrame(rafId);
      timeouts.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
