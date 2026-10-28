"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LiquidEther from "../LiquidEther/LiquidEther";

const SplitChars = ({ text, className, id }) => {
  return (
    <span className={className} id={id} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="hero-char"
          aria-hidden="true"
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const loaderRef = useRef(null);
  const loaderCounterRef = useRef(null);
  const endLineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const headingChars =
      headingRef.current?.querySelectorAll(".hero-char");

    gsap.set(headingChars, {
      autoAlpha: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 60,
      force3D: true,
    });

    gsap.set(endLineRef.current, {
      autoAlpha: 0,
      scaleX: 0,
      transformOrigin: "left center",
    });

    const endLineAnimation = gsap.to(endLineRef.current, {
      autoAlpha: 1,
      scaleX: 1,
      ease: "none",
      paused: true,
    });

    const endLineTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=300",
      scrub: true,
      animation: endLineAnimation,
    });

    if (prefersReducedMotion) {
      gsap.set(loaderRef.current, { yPercent: -100 });
      gsap.set(headingChars, { autoAlpha: 1, y: 0 });
      gsap.set(endLineRef.current, {
        autoAlpha: 1,
        scaleX: 1,
      });

      return () => {
        endLineTrigger.kill();
        endLineAnimation.kill();
      };
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let cancelled = false;
    let context;

    const counter = { value: 0 };

    context = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = previousOverflow;
        },
      });

      timeline.to(
        counter,
        {
          value: 100,
          duration: 1.4,
          ease: "power2.inOut",
          onUpdate: () => {
            if (loaderCounterRef.current) {
              loaderCounterRef.current.innerText =
                `${Math.floor(counter.value)}`;
            }
          },
        },
        0
      );

      timeline.to(
        loaderRef.current,
        {
          yPercent: -100,
          duration: 1,
          ease: "power3.inOut",
        },
        1.5
      );

      timeline.to(
        loaderCounterRef.current,
        {
          autoAlpha: 0,
          duration: 0.3,
        },
        1.5
      );

      timeline.to(
        headingChars,
        {
          autoAlpha: 1,
          y: 0,
          stagger: {
            amount: 0.65,
            from: "start",
          },
          duration: 0.8,
          ease: "power3.out",
        },
        1.9
      );
    }, section);

    return () => {
      cancelled = true;
      context?.revert();
      endLineTrigger.kill();
      endLineAnimation.kill();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <>
      <div id="loader" ref={loaderRef}>
        <div id="loader-counter" ref={loaderCounterRef}>
          0
        </div>
      </div>

      <section
        id="hero-section"
        ref={sectionRef}
        aria-labelledby="hero-heading"
      >
        <div id="hero-bg-fluid" aria-hidden="true">
          <LiquidEther
            colors={["#D9E6FF"]}
            mouseForce={15}
            cursorSize={80}
            isViscous={false}
            viscous={30}
            iterationsViscous={8}
            iterationsPoisson={8}
            resolution={0.25}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={1.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">
            DEVELOPER <span aria-hidden="true">/</span> CYBERSECURITY
          </p>

          <h1 id="hero-heading" ref={headingRef}>
            <SplitChars
              text="NOMAAN KILLEDAR"
              className="hero-name"
            />
            <span className="hero-period" aria-hidden="true">
              .
            </span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-description">
              Building tools. Exploring systems. Learning security.
            </p>

            <a className="hero-cta" href="#projects-section">
              EXPLORE MY WORK <span aria-hidden="true">↘</span>
            </a>
          </div>

          <div className="hero-end-line" ref={endLineRef} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
