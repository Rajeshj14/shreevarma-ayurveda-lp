"use client";

import { useEffect } from "react";

const animationSelector =
  ".sv-animate-left, .sv-animate-right, .sv-animate-top, .sv-animate-bottom";

export default function PageAnimations() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(animationSelector));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("sv-in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sv-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    requestAnimationFrame(() => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add("sv-in-view");
          observer.unobserve(element);
        }
      });
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
