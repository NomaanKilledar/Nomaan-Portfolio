"use client";

import { Suspense, useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import FeaturedVideo from "@/components/Featured/FeaturedVideo";
import Header from "@/components/Featured/Header";
import Skiggle from "@/components/Featured/Skiggle";
import SubHeader from "@/components/Featured/SubHeader";
import HeroSection from "@/components/HeroSection/HeroSection";
import SmoothScroll from "@/components/SmoothScroll";
import GradualBlur from "@/components/GradualBlur/GradualBlur";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Connect/Connect";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
const aboutRef = useRef(null);
const blurRef = useRef(null);

useEffect(() => {
console.clear();

console.log(
  "%cNOMAAN KILLEDAR",
  "background: #D9E6FF; color: #0f172a; font-size: 16px; font-weight: 800; padding: 10px 16px; border-radius: 10px; letter-spacing: 2px;"
);

}, []);

useEffect(() => {
gsap.registerPlugin(ScrollTrigger);

const blur = blurRef.current;
const footer = document.getElementById("main-footer");

if (!blur || !footer) return;

const setVisible = (visible) =>
  gsap.to(blur, {
    autoAlpha: visible ? 1 : 0,
    duration: 0.3,
  });

const footerInView =
  footer.getBoundingClientRect().top < window.innerHeight;

gsap.set(blur, {
  autoAlpha: footerInView ? 0 : 1,
});

const trigger = ScrollTrigger.create({
  trigger: footer,
  start: "top bottom",
  end: "bottom top",
  onEnter: () => setVisible(false),
  onEnterBack: () => setVisible(false),
  onLeave: () => setVisible(false),
  onLeaveBack: () => setVisible(true),
});

return () => {
  trigger.kill();
};

}, []);

return ( <SmoothScroll>
<Suspense
fallback={ <div className="flex h-screen w-screen items-center justify-center bg-black text-4xl text-white md:text-7xl lg:text-9xl">
Loading... </div>
}
> <div className="h-auto w-screen overflow-x-hidden bg-bg text-fg"> <Navbar />

      {/* Hero: animated background and heading, without portrait */}
      <HeroSection />

      {/* About section */}
      <section
        id="about"
        ref={aboutRef}
        className="relative mt-16 h-auto w-full px-5 pb-20 sm:px-8 md:mt-32 md:px-10 lg:px-16"
      >
        <Skiggle />

        <div className="relative z-10 grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left column: portrait and heading */}
          <div className="flex min-w-0 flex-col gap-8">
            <Header />

            <div className="w-full">
              <FeaturedVideo refForward={aboutRef} />
            </div>
          </div>

          {/* Right column: introduction and skills */}
          <div className="min-w-0 md:pt-10 lg:pt-16">
            <SubHeader />
          </div>
        </div>
      </section>

      <Projects />

      <HorizontalScroll />

      <Contact />

      <SiteFooter />

      {/* Gradual blur overlay */}
      <div
        ref={blurRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 99999,
        }}
      >
        <GradualBlur
          target="parent"
          position="bottom"
          height="4rem"
          strength={1}
          divCount={3}
          curve="bezier"
          exponential={false}
          opacity={0.7}
          zIndex={1}
        />
      </div>
    </div>
  </Suspense>
</SmoothScroll>

);
}
