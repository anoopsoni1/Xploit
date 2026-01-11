"use client";

import React, { useState, useRef } from "react";
import { FaShield } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LiquidEther from "./GlitchText";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const introRef = useRef(null);
  const horizontalRef = useRef(null);
  const trackRef = useRef(null);

  /* INTRO (X LOGO) */
  useGSAP(
    () => {
      gsap
        .timeline()
        .to(".vi-mask-group", {
          rotate: 10,
          duration: 2,
          ease: "power4.inOut",
        })
        .to(".vi-mask-group", {
          scale: 10,
          opacity: 0,
          duration: 2,
          delay: -1.8,
          ease: "expo.inOut",
          onComplete: () => setShowContent(true),
        });
    },
    { scope: introRef }
  );

  /* HORIZONTAL SCROLL */
  useGSAP(
    () => {
      if (!horizontalRef.current || !trackRef.current) return;

      const cards = gsap.utils.toArray(".event-card");

      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => "+=" + trackRef.current.offsetWidth,
        },
      });
    },
    { dependencies: [showContent] }
  );

  return (
    <>
      {!showContent && (
        <div
          ref={introRef}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black"
        >
          <svg viewBox="0 0 800 600">
            <defs>
              <mask id="viMask">
                <rect width="100%" height="100%" fill="black" />
                <g className="vi-mask-group">
                  <text
                    x="50%"
                    y="50%"
                    fontSize="250"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                  >
                    X
                  </text>
                </g>
              </mask>
            </defs>
            <image
              href="/Images/logo.png"
              width="100%"
              height="100%"
              mask="url(#viMask)"
            />
          </svg>
        </div>
      )}

      {/* MAIN CONTENT */}
      {showContent && (
        <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
          
          {/* LIQUID BACKGROUND */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <LiquidEther
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              autoDemo
              autoSpeed={0.5}
              autoIntensity={3}
              resolution={0.5}
            />
          </div>

          {/* PAGE CONTENT */}
          <main className="relative z-10">
            {/* NAV */}
            <header className="px-10 py-6 flex justify-between items-center">
              <div className="flex items-center gap-2 text-2xl font-bold">
                <FaShield /> XPLOIT
              </div>
              <nav className="flex gap-16 font-semibold">
                <span>EVENTS</span>
                <span>ABOUT</span>
                <span>CONTACT</span>
              </nav>
            </header>

            {/* HERO */}
            <section className="min-h-screen flex flex-col justify-center px-10 text-center">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold">
                LEARN – <span className="text-amber-500">HACK</span>
                <br />
                SECURE – <span className="text-amber-500">DEFEND</span>
              </h1>
              <p className="mt-6 text-xl">
                XPLOIT cybersecurity club of IIIT Bhopal
              </p>

              <div className="flex gap-6 justify-center mt-16">
                <button className="border px-8 py-3 rounded-md">
                  TEAM
                </button>
                <button className="bg-amber-400 text-black px-8 py-3 rounded-md">
                  INITIATIVES
                </button>
              </div>
            </section>

            {/* HORIZONTAL EVENTS */}
            <section
              ref={horizontalRef}
              className="h-screen w-full overflow-hidden"
            >
              <div ref={trackRef} className="flex h-full w-max">
                {["OPTIGO", "CYBER CTF", "BUG BOUNTY"].map((title, i) => (
                  <div
                    key={i}
                    className="event-card w-screen h-full flex items-center justify-center"
                  >
                    <div className="w-[80%] h-[70%] rounded-3xl bg-linear-to-br from-[#0b0f14] to-[#111827] flex flex-col items-center justify-center">
                      <h1 className="text-6xl text-cyan-400 font-bold">
                        {title}
                      </h1>
                      <p className="mt-4 text-gray-400">
                        INTER-IIIT EVENT
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
