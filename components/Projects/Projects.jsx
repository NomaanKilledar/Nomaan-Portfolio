
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
  {
    name: "NEXUS — Network & Endpoint Security Utility Suite",
    href: "https://github.com/NomaanKilledar/NEXUS",
    kind: "GitHub",
    note: "Defensive Telemetry & EDR Mechanics Analysis.",
  },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const Row = ({ item, index }) => {
  return (
    <li className="pj-row">
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="pj-link"
        aria-label={`View ${item.name} on GitHub`}
      >
        <span className="pj-num">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="pj-meta">
          <span className="pj-name">{item.name}</span>
          {item.note && (
            <span className="pj-note">{item.note}</span>
          )}
        </div>

        <span className="pj-kind">{item.kind}</span>

        <span className="pj-arrow">
          <ArrowIcon />
        </span>
      </a>
    </li>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = sectionRef.current.querySelectorAll(".pj-row");
      const titles = sectionRef.current.querySelectorAll(".pj-title");

      gsap.from(rows, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(titles, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects-section" ref={sectionRef}>
      <div className="pj-head">
        <h2 className="pj-title">PROJECTS</h2>
      </div>

      <ul className="pj-list">
        {PROJECTS.map((project, index) => (
          <Row
            key={project.name}
            item={project}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
