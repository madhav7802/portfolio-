"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "motion/react";
import { portfolioData } from "@/data/config";
import Hero from "@/sections/Hero";
import BorderGlow from "@/components/BorderGlow";
import SplashCursor from "@/components/SplashCursor";

// InfiniteMenu uses canvas/gl-matrix, which relies on window/document.
// We must dynamically import it with ssr: false to prevent hydration errors.
const InfiniteMenu = dynamic(() => import("@/components/InfiniteMenu"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-base-400">
      Loading featured projects...
    </div>
  ),
});

export default function Home() {
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);

  const menuItems = [
    {
      image: "/aboutme.jpg", 
      link: "/about",
      title: "About Me",
      description: (
        <span className="flex flex-col gap-2">
          <span>{portfolioData.bio} I specialize in crafting digital experiences that seamlessly blend high-end aesthetics with robust technical foundations.</span>
        </span>
      ),
    },
    {
      image: "/career.jpg", 
      link: "/career",
      title: "Career Journey",
      description: (
        <span className="flex flex-col gap-2">
          <span>Explore my professional timeline and the impact I've made.</span>
        </span>
      ),
    },
    {
      image: "/linkedin.jpg", 
      link: portfolioData.linkedin,
      title: "LinkedIn",
      description: (
        <span className="flex flex-col gap-2">
          <span>Connect with me professionally and check out my career journey.</span>
          <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="text-accent-400 hover:text-accent-300 pointer-events-auto underline underline-offset-4">Visit LinkedIn Profile</a>
        </span>
      ),
    },
    {
      image: "/github.jpg", 
      link: portfolioData.github,
      title: "GitHub",
      description: (
        <span className="flex flex-col gap-2">
          <span>Check out my open-source contributions and the code behind my interactive experiences.</span>
          <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-accent-400 hover:text-accent-300 pointer-events-auto underline underline-offset-4">Explore GitHub Repos</a>
        </span>
      ),
    },
    {
      image: "/contact.jpg", 
      link: `mailto:${portfolioData.email}`,
      title: "Let's Connect",
      description: (
        <span className="flex flex-col gap-2">
          <span>Whether you have a question, a project in mind, or just want to say hi, my inbox is always open.</span>
          <span className="text-accent-400 font-mono text-sm mt-2">{portfolioData.email}</span>
        </span>
      ),
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden bg-base-950 relative">
      <SplashCursor 
        RAINBOW_MODE={false} 
        COLOR="#ffffff" 
        BACK_COLOR={{ r: 0, g: 0, b: 0 }} 
        DENSITY_DISSIPATION={4.5} 
        VELOCITY_DISSIPATION={2.5}
      />
      <AnimatePresence mode="wait">
        {currentPage === 1 && (
          <motion.div
            key="page1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-screen absolute inset-0"
          >
            <Hero onDiscover={() => setCurrentPage(2)} />
          </motion.div>
        )}

        {currentPage === 2 && (
          <motion.div
            key="page2"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-screen absolute inset-0 bg-base-950"
          >
            <section className="w-full h-screen relative bg-base-950">
              <InfiniteMenu items={menuItems} scale={1.2} />
              
              {/* Back Button Overlay */}
              <div className="absolute top-8 left-8 z-50">
                <BorderGlow
                  edgeSensitivity={30}
                  glowColor="40 80 80"
                  backgroundColor="transparent"
                  borderRadius={0}
                  glowRadius={40}
                  glowIntensity={1.0}
                  coneSpread={25}
                  animated={true}
                  colors={['#c084fc', '#f472b6', '#38bdf8']}
                >
                  <button 
                    onClick={() => setCurrentPage(1)}
                    className="group flex items-center gap-2 px-6 py-3 bg-base-900/80 backdrop-blur-md border border-base-800 text-base-300 font-mono text-sm tracking-widest hover:text-accent-400 hover:border-accent-500/50 transition-all rounded-none"
                  >
                    <span className="opacity-70 group-hover:-translate-x-1 transition-transform">←</span>
                    <span>Back To Origin</span>
                  </button>
                </BorderGlow>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
