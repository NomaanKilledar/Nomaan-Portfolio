"use client";

import React, { useEffect, useState, useCallback } from "react";
import { animated, useSpring } from "@react-spring/web";
import { Trail } from "./TrailText";
import MenuButton from "./MenuButton";
import MusicButton from "./MusicButton";

const scrollToSection = (id) => {
  if (typeof window === "undefined") return;

  const lenis = window.__lenis;

  if (id === "top") {
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0, {
        duration: 1,
        immediate: false,
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return;
  }

  const target = document.getElementById(id);

  if (!target) return;

  if (lenis && typeof lenis.scrollTo === "function") {
    lenis.scrollTo(target, {
      offset: 0,
      duration: 1,
      immediate: false,
    });
  } else {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const MOBILE_NAV_ITEMS = [
  { label: "HOME", target: "top" },
  { label: "ABOUT", target: "about" },
  { label: "SKILLS", target: "skills" },
  { label: "PROJECTS", target: "projects-section" },
  { label: "CONNECT", target: "contact-section" },
];

function Navbar() {
  const [rotate, setRotate] = useSpring(() => ({
    transform: "rotate(0deg)",
    config: { tension: 300, friction: 20, mass: 1 },
  }));

  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const handleMobileNav = useCallback(
    (event, target) => {
      event.preventDefault();

      setMobileOpen(false);
      setRotate({ transform: "rotate(0deg)" });

      scrollToSection(target);
    },
    [setRotate]
  );

  return (
    <>
      {/* Mobile Navbar */}
      <div className="fixed left-0 top-0 z-[100001] w-full px-5 py-5 lg:hidden">
        <div className="flex w-full items-center justify-between font-extrabold">
          <a
            href="/"
            aria-label="Reload homepage"
            className="cursor-pointer text-2xl font-semibold tracking-wider text-fg"
            style={{ letterSpacing: "-0.03em" }}
          >
            NOMAAN
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="nav_btn_sm flex cursor-pointer items-center justify-center"
            onMouseEnter={() => {
              if (!mobileOpen) {
                setRotate({ transform: "rotate(90deg)" });
              }
            }}
            onMouseLeave={() => {
              if (!mobileOpen) {
                setRotate({ transform: "rotate(0deg)" });
              }
            }}
            onClick={() => {
              const nextOpen = !mobileOpen;

              setMobileOpen(nextOpen);
              setRotate({
                transform: nextOpen ? "rotate(45deg)" : "rotate(0deg)",
              });
            }}
          >
            <animated.div
              className="text-[0.55rem] leading-none"
              style={rotate}
            >
              {mobileOpen ? "✕" : "⬤ ⬤"}
            </animated.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[100000] transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-bg"
          onClick={() => {
            setMobileOpen(false);
            setRotate({ transform: "rotate(0deg)" });
          }}
        />

        <div className="relative z-10 flex h-full w-full flex-col px-6 pb-8 pt-24">
          <nav className="flex flex-col gap-1">
            {MOBILE_NAV_ITEMS.map((item, index) => (
              <a
                key={item.target}
                href={item.target === "top" ? "/" : `#${item.target}`}
                onClick={(event) => handleMobileNav(event, item.target)}
                className="flex items-center justify-between border-b border-theme-border py-4 text-3xl font-semibold text-fg transition-colors duration-200 hover:text-brblue"
                style={{
                  letterSpacing: "-0.03em",
                  transform: mobileOpen
                    ? "translateY(0)"
                    : "translateY(20px)",
                  opacity: mobileOpen ? 1 : 0,
                  transition: `transform 0.4s ease ${
                    0.05 + index * 0.05
                  }s, opacity 0.4s ease ${
                    0.05 + index * 0.05
                  }s, color 0.2s ease`,
                }}
              >
                <span>{item.label}</span>
                <span className="text-base text-fg-muted">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="fixed left-0 top-0 z-[100001] w-full px-6 lg:px-20">
        <div className="hidden items-start justify-between pb-10 pt-14 lg:flex">
          <div className="font-AeonikMedium text-4xl tracking-wider">
            <a href="/" aria-label="Reload homepage">
              NOMAAN
            </a>
          </div>

          <div className="hidden items-center justify-around font-AeonikMedium lg:flex">
            <Trail open={open} className="flex">
              <MusicButton />
              <MenuButton />
            </Trail>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;