"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { portfolioData } from "@/data/config";
import BorderGlow from "@/components/BorderGlow";
import SplashCursor from "@/components/SplashCursor";
import LightPillar from "@/components/LightPillar";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-base-950 text-base-100 overflow-x-hidden relative selection:bg-accent-500/30">
      
      {/* LightPillar Background */}
      <div className="fixed inset-0 w-full h-full z-0 opacity-40">
        <LightPillar
          topColor="#c084fc"
          bottomColor="#38bdf8"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={0}
          interactive={true}
          mixBlendMode="screen"
        />
      </div>

      <SplashCursor 
        RAINBOW_MODE={false} 
        COLOR="#ffffff" 
        BACK_COLOR={{ r: 0, g: 0, b: 0 }} 
        DENSITY_DISSIPATION={4.5} 
        VELOCITY_DISSIPATION={2.5}
      />

      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
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
          <Link 
            href="/"
            className="group flex items-center gap-2 px-6 py-3 bg-base-900/80 backdrop-blur-md border border-base-800 text-base-300 font-mono text-sm tracking-widest hover:text-accent-400 hover:border-accent-500/50 transition-all rounded-none"
          >
            <span className="opacity-70 group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back To Origin</span>
          </Link>
        </BorderGlow>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-white mb-6 uppercase">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Trajectory</span>
          </h1>
          <p className="text-base-400 font-mono text-sm md:text-base max-w-2xl mx-auto tracking-widest">
            A chronological timeline of my professional experience and the impact I've made along the way.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center Glowing Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent-500/50 to-transparent -translate-x-1/2 hidden md:block" />
          
          <div className="flex flex-col gap-12 md:gap-24">
            {portfolioData.career.map((job, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                  className={`flex flex-col md:flex-row w-full ${isEven ? 'md:justify-start' : 'md:justify-end'} relative`}
                >
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-base-950 border-2 border-accent-400 z-10 items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                    <div className="w-1 h-1 bg-accent-300 rounded-full animate-ping" />
                  </div>

                  <div className="w-full md:w-[45%]">
                    <BorderGlow
                      edgeSensitivity={30}
                      glowColor="40 80 80"
                      backgroundColor="transparent"
                      borderRadius={0}
                      glowRadius={30}
                      glowIntensity={0.8}
                      coneSpread={25}
                      animated={true}
                      colors={['#38bdf8', '#c084fc']}
                    >
                      <div className="p-8 bg-base-900/40 backdrop-blur-sm border border-base-800/50 group hover:bg-base-900/60 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                          <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-wider group-hover:text-accent-300 transition-colors">
                            {job.role}
                          </h3>
                          <span className="font-mono text-xs text-accent-400 bg-accent-500/10 px-3 py-1 border border-accent-500/20 whitespace-nowrap">
                            {job.date}
                          </span>
                        </div>
                        
                        <h4 className="text-base text-base-300 font-mono mb-6 pb-6 border-b border-base-800">
                          @ {job.company}
                        </h4>
                        
                        <p className="text-base-400 text-sm md:text-base leading-relaxed mb-8">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map(tech => (
                            <span 
                              key={tech} 
                              className="text-xs font-mono text-base-500 bg-base-950 px-2 py-1 border border-base-800/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </BorderGlow>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Achievements Section */}
        {portfolioData.achievements && portfolioData.achievements.length > 0 && (
          <div className="mt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight text-white mb-4 uppercase">
                Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Achievements</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.achievements.map((ach, index) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BorderGlow
                    edgeSensitivity={30}
                    glowColor="40 80 80"
                    backgroundColor="transparent"
                    borderRadius={0}
                    glowRadius={20}
                    glowIntensity={0.6}
                    coneSpread={20}
                    animated={true}
                    colors={['#f472b6', '#38bdf8']}
                  >
                    <div className="p-6 bg-base-900/40 backdrop-blur-sm border border-base-800/50 h-full flex flex-col justify-between group hover:bg-base-900/60 transition-colors">
                      <div>
                        <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider mb-2 group-hover:text-accent-300 transition-colors">
                          {ach.title}
                        </h3>
                        <p className="text-base-400 text-sm font-mono mb-4">
                          {ach.issuer}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-accent-400 bg-accent-500/10 px-3 py-1 border border-accent-500/20 w-fit">
                        {ach.date}
                      </span>
                    </div>
                  </BorderGlow>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
