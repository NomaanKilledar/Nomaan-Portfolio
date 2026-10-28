"use client";

import { Suspense, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import FeaturedVideo from "@/components/Featured/FeaturedVideo";
import HeroSection from "@/components/HeroSection/HeroSection";
import SmoothScroll from "@/components/SmoothScroll";
import GradualBlur from "@/components/GradualBlur/GradualBlur";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Connect/Connect";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SKILLS = [
  {
    number: "01",
    category: "PRIMARY FOCUS",
    title: "Cybersecurity",
    description:
      "Training on the offensive side — understanding network security, system weaknesses, and how systems can be tested securely.",
  },
  {
    number: "02",
    category: "Programming & Development",
    title: "Python & CLI Tools",
    description:
      "Developing deep technical knowledge of Windows systems, configuration, and troubleshooting.",
  },
  {
    number: "03",
    category: "OFFENSIVE SECURITY",
    title: "Offensive Security Tools",
    description:
      "Developing and exploring tools for authorized penetration testing, vulnerability assessment, and security analysis.",
  },
  {
    number: "04",
    category: "DEFENSIVE Security",
    title: "Defensive Security Tools",
    description:
      "Exploring and building tools for system monitoring, security checks, threat detection, and defensive analysis.",
  },
  {
    number: "05",
    category: "OPERATING SYSTEMS",
    title: "Windows Environments",
    description:
      "Working with Windows system configuration, command-line tools, troubleshooting, and system administration fundamentals.",
  },
  {
    number: "06",
    category: "OPERATING SYSTEMS",
    title: "Linux Environments",
    description:
      "Exploring Linux command-line workflows, system utilities, file permissions, and system administration fundamentals.",
  },
];

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

    return () => trigger.kill();
  }, []);

  return (
    <SmoothScroll>
      <Suspense
        fallback={
          <div className="flex h-screen w-screen items-center justify-center bg-black text-4xl text-white md:text-7xl lg:text-9xl">
            Loading...
          </div>
        }
      >
        <main className="relative min-h-screen w-screen overflow-x-clip bg-bg text-fg">

          <Navbar />

  {/* Keep the rest of your existing sections here */}

          {/* HERO */}
          <div id="top">
            <HeroSection />
          </div>

          {/* ABOUT */}
          <section
            id="about"
            ref={aboutRef}
            className="relative scroll-mt-24 px-5 pb-24 pt-24 sm:px-8 md:px-12 md:pb-32 md:pt-32 lg:px-20"
          >
            <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
              {/* Left: portrait */}
              <div className="w-full">
                <FeaturedVideo
                  refForward={aboutRef}
                  className="relative mx-auto aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-3xl"
                />
              </div>

              {/* Right: about text */}
              <div className="relative z-10 min-w-0">
                <div className="mb-8 flex items-center justify-between border-b border-theme-border pb-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-fg-muted md:text-sm">
                    WHO I AM
                  </span>

                  <span className="text-xs text-fg-muted md:text-sm">
                    01 / 03
                  </span>
                </div>

                <p className="mb-5 text-sm uppercase tracking-[0.25em] text-brblue md:text-base">
                  ~/nomaan/about.sh
                </p>

                <h2
                  className="mb-8 text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl"
                  style={{ letterSpacing: "-0.06em" }}
                >
                  About
                  <span className="text-brblue"> Me.</span>
                </h2>

                <div className="space-y-6 text-base leading-8 text-fg-muted md:text-lg md:leading-9">
                  <p>
                    I&apos;m a developer and cybersecurity enthusiast focused on
                    building practical software, exploring system internals, and
                    understanding how technology works beneath the surface. I enjoy
                    turning ideas into functional tools, developing Python-based
                    utilities, and creating modern web experiences.
                  </p>

                  <p>
                    My technical interests span software development, Windows and
                    Linux environments, networking, system administration, and
                    offensive security. Through projects like NEXUS — my Network
                    &amp; Endpoint Security Utility Suite — I&apos;m developing hands-on
                    experience with programming, system-level workflows, and
                    security-focused tooling.
                  </p>

                  <p>
                    I&apos;m continuously expanding my skills in developing tools
                    and cybersecurity, with a particular interest in penetration
                    testing, red-team methodologies, and building tools that solve
                    real technical problems.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <span className="rounded-full border border-theme-border px-4 py-2 text-xs uppercase tracking-wider">
                    Offensive Security
                  </span>
                  <span className="rounded-full border border-theme-border px-4 py-2 text-xs uppercase tracking-wider">
                    Red Team
                  </span>
                  <span className="rounded-full border border-theme-border px-4 py-2 text-xs uppercase tracking-wider">
                    Python
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section
            id="skills"
            className="scroll-mt-24 px-5 pb-24 pt-12 sm:px-8 md:px-12 md:pb-32 lg:px-20"
          >
            <div className="mx-auto w-full max-w-[1440px]">
              <div className="mb-10 flex items-end justify-between gap-4 border-b border-theme-border pb-5 md:mb-14">
                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brblue md:text-sm">
                    WHAT I DO
                  </p>

                  <h2
                    className="text-5xl font-semibold leading-none sm:text-6xl md:text-7xl"
                    style={{ letterSpacing: "-0.06em" }}
                  >
                    Skills<span className="text-brblue">.</span>
                  </h2>
                </div>

                <span className="pb-1 text-xs text-fg-muted md:text-sm">
                  02 / 03
                </span>
              </div>

              <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
                {SKILLS.map((skill) => (
                  <article
                    key={skill.number}
                    className="group flex min-h-[220px] flex-col border-b border-theme-border py-7 md:min-h-[240px] md:py-9"
                  >
                    <div className="mb-8 flex items-center justify-between gap-4">
                      <span className="text-xs text-fg-muted">
                        {skill.number}
                      </span>

                      <span className="text-right text-[10px] uppercase tracking-[0.2em] text-fg-muted sm:text-xs">
                        {skill.category}
                      </span>
                    </div>

                    <h3 className="mb-4 text-2xl font-medium leading-tight transition-colors duration-200 group-hover:text-brblue md:text-3xl">
                      {skill.title}
                    </h3>

                    <p className="text-sm leading-7 text-fg-muted md:text-base">
                      {skill.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <div id="projects-section" className="scroll-mt-24">
            <Projects />
          </div>

          <HorizontalScroll />

          {/* CONTACT */}
          <div id="contact-section" className="scroll-mt-24">
            <Contact />
          </div>

          <SiteFooter />

          {/* GRADUAL BLUR */}
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
        </main>
      </Suspense>
    </SmoothScroll>
  );
}