import { useEffect, useRef, useState } from "react";

/**
 * Wraps a block of content so it slides in from the given side and fades in
 * as it scrolls into view, then slides back out and fades as it scrolls away —
 * re-triggering both directions on every crossing, not just once.
 *
 * Built on IntersectionObserver + CSS transitions rather than an animation
 * library: it's the lightest option for a small static site, adds no
 * dependency, and honors prefers-reduced-motion automatically (see globals.css).
 */
export default function SlideSection({ children, direction = "left", className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass = direction === "right" ? "slide-right" : "slide-left";

  return (
    <div
      ref={ref}
      className={`slide-section ${dirClass} ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
