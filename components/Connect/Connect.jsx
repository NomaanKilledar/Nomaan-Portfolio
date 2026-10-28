"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EMAIL = "[nomaankilledar08@gmail.com](mailto:nomaankilledar08@gmail.com)";
const GITHUB_URL = "https://github.com/NomaanKilledar";
const TRYHACKME_URL = "https://tryhackme.com/p/NomaanKilledar";

function ArrowUpRight() {
return ( <svg
   width="18"
   height="18"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
   aria-hidden="true"
 > <path d="M7 17 17 7" /> <path d="M7 7h10v10" /> </svg>
);
}

export default function Contact() {
const sectionRef = useRef(null);
const eyebrowRef = useRef(null);
const headlineRef = useRef(null);
const ctaRef = useRef(null);

useEffect(() => {
gsap.registerPlugin(ScrollTrigger);

const ctx = gsap.context(() => {
  const eyebrowChars =
    eyebrowRef.current?.querySelectorAll(".ct-char") ?? [];

  const headlineChars =
    headlineRef.current?.querySelectorAll(".ct-char") ?? [];

  gsap.from(eyebrowChars, {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: { amount: 0.4, from: "start" },
    ease: "power3.out",
    scrollTrigger: {
      trigger: eyebrowRef.current,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(headlineChars, {
    opacity: 0,
    y: 200,
    duration: 1.4,
    stagger: { amount: 0.6, from: "start" },
    ease: "power3.out",
    scrollTrigger: {
      trigger: headlineRef.current,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(ctaRef.current?.children ?? [], {
    autoAlpha: 0,
    y: 50,
    duration: 1,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ctaRef.current,
      start: "top 95%",
      toggleActions: "play none none reverse",
    },
  });
}, sectionRef);

return () => ctx.revert();

}, []);

const splitChars = (text) =>
text.split("").map((char, index) => (
<span
key={`${char}-${index}`}
className="ct-char"
style={{ display: "inline-block" }}
>
{char === " " ? "\u00A0" : char} </span>
));

return ( <section id="contact-section" ref={sectionRef}> <div id="ct-eyebrow" ref={eyebrowRef}>
{splitChars("LET'S CONNECT")} </div>

  <h2 id="ct-headline" ref={headlineRef}>
    {splitChars("Connect")}
  </h2>

  <div id="ct-actions" ref={ctaRef}>
<a
id="ct-btn"
href="https://mail.google.com/mail/?view=cm&fs=1&to= nomaankilledar08%40gmail.com"
target="_blank"
rel="noopener noreferrer"
aria-label="Send me an email through Gmail"

>

<span>EMAIL</span> <ArrowUpRight /> </a>


    <a
      id="ct-btn-secondary"
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit my GitHub profile"
    >
      <span>GITHUB</span>
      <ArrowUpRight />
    </a>

    <a
      id="ct-btn-secondary"
      href={TRYHACKME_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit my TryHackMe profile"
    >
      <span>TRYHACKME PROFILE</span>
      <ArrowUpRight />
    </a>
  </div>
</section>

);
}
