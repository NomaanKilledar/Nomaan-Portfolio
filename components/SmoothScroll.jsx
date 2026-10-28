"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      autoRaf: false,
    });

    window.__lenis = lenis;

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    const updateScroll = () => {
      ScrollTrigger.update();
    };

    const refreshScroll = () => {
      ScrollTrigger.refresh();
    };

    lenis.on("scroll", updateScroll);
    gsap.ticker.add(updateLenis);

    // Prevent GSAP lag smoothing from desynchronizing Lenis.
    gsap.ticker.lagSmoothing(0);

    // Refresh after the initial layout has settled.
    const refreshTimer = window.setTimeout(refreshScroll, 500);
    window.addEventListener("load", refreshScroll);

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("load", refreshScroll);

      lenis.off("scroll", updateScroll);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();

      if (window.__lenis === lenis) {
        delete window.__lenis;
      }
    };
  }, []);

  return <>{children}</>;
}
