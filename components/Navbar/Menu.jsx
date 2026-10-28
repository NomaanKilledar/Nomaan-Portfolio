"use client";

import { useSpring, a } from "@react-spring/web";
import React, { useEffect, useRef } from "react";

const navItems = [
  { label: "HOME", target: "top" },
  { label: "ABOUT", target: "about" },
  { label: "SKILLS", target: "skills" },
  { label: "PROJECTS", target: "projects-section" },
  { label: "CONNECT", target: "contact-section" },
];

const Menu = ({ open, onOutsideClick, onClose }) => {
  const ref = useRef(null);

  const [contents, contentsApi] = useSpring(() => ({
    from: { y: 30, opacity: 0, transform: "rotate(0deg)" },
    config: {
      mass: 1,
      tension: 240,
      friction: 26,
    },
  }));

  useEffect(() => {
    contentsApi.start({
      y: open ? 0 : 30,
      opacity: open ? 1 : 0,
      transform: "rotate(0deg)",
    });
  }, [open, contentsApi]);

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick?.(event);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [open, onOutsideClick]);

  const handleNavClick = (event, target) => {
    event.preventDefault();

    const lenis = window.__lenis;

    if (target === "top") {
      if (lenis?.scrollTo) {
        lenis.scrollTo(0, {
          duration: 1,
          immediate: false,
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } else {
      const section = document.getElementById(target);

      if (section) {
        if (lenis?.scrollTo) {
          lenis.scrollTo(section, {
            duration: 1,
            offset: 0,
            immediate: false,
          });
        } else {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }

    onClose?.();
  };

  if (!open) return null;

  return (
    <div ref={ref} className="absolute right-0 top-[4rem] w-[20rem]">
      <a.div
        className="flex flex-col rounded-xl bg-bg-alt p-8 font-Aeonik text-3xl text-fg"
        style={{
          opacity: contents.opacity,
          transform: contents.y.to(
            (y) => `translate3d(0, ${y}px, 0)`
          ),
        }}
      >
        {navItems.map((item, index) => (
          <a
            key={item.target}
            href={item.target === "top" ? "/" : `#${item.target}`}
            onClick={(event) => handleNavClick(event, item.target)}
            className={`flex cursor-pointer items-center justify-between transition-colors duration-200 hover:text-brblue ${
              index === 0
                ? "pb-3"
                : index === navItems.length - 1
                  ? "pt-3"
                  : "py-3"
            }`}
          >
            <span>{item.label}</span>
            <span className="text-fg-muted">•</span>
          </a>
        ))}
      </a.div>
    </div>
  );
};

export default Menu;