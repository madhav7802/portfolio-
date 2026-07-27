"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { portfolioData } from "@/data/config";
import BorderGlow from "@/components/BorderGlow";
import SplashCursor from "@/components/SplashCursor";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-base-950 text-base-100 overflow-x-hidden relative selection:bg-accent-500/30">
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

      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-white mb-6 uppercase">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Me</span>
          </h1>
          <p className="text-base-400 font-mono text-sm md:text-base max-w-2xl mx-auto tracking-widest leading-relaxed">
            {portfolioData.bio}
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-accent-400 font-mono text-sm border-b border-accent-500/30 hover:border-accent-400 pb-1 transition-colors">
              [ GitHub ]
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="text-accent-400 font-mono text-sm border-b border-accent-500/30 hover:border-accent-400 pb-1 transition-colors">
              [ LinkedIn ]
            </a>
          </div>
        </motion.div>

        {/* Hackathon Spotlight */}
        {portfolioData.hackathons && portfolioData.hackathons.length > 0 && (
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8 uppercase tracking-wider text-center md:text-left">
                Hackathon Spotlight
              </h2>
              
              {portfolioData.hackathons.map((hack) => (
                <BorderGlow
                  key={hack.id}
                  edgeSensitivity={20}
                  glowColor="40 80 80"
                  backgroundColor="transparent"
                  borderRadius={0}
                  glowRadius={30}
                  glowIntensity={0.7}
                  coneSpread={20}
                  animated={true}
                  colors={['#38bdf8', '#c084fc', '#f472b6']}
                >
                  <div className="bg-base-900/40 backdrop-blur-sm border border-base-800/50 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2">
                      <img 
                        src={hack.image} 
                        alt={hack.title} 
                        className="w-full h-auto border border-base-800/50 shadow-2xl shadow-accent-500/10"
                      />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-base-300">
                        {hack.title}
                      </h3>
                      <p className="text-base-400 leading-relaxed font-mono text-sm mb-6">
                        {hack.description}
                      </p>
                      <div className="inline-flex">
                        <span className="font-mono text-xs text-accent-400 bg-accent-500/10 px-4 py-2 border border-accent-500/20">
                          AI AGENTS / GPU OPTIMIZATION / CLOUD
                        </span>
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              ))}
            </motion.div>
          </div>
        )}

        {/* Featured Projects */}
        {portfolioData.projects && portfolioData.projects.length > 0 && (
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8 uppercase tracking-wider text-center md:text-left">
                Featured Projects
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project) => (
                  <BorderGlow
                    key={project.id}
                    edgeSensitivity={20}
                    glowColor="40 80 80"
                    backgroundColor="transparent"
                    borderRadius={0}
                    glowRadius={20}
                    glowIntensity={0.6}
                    coneSpread={15}
                    animated={true}
                    colors={['#38bdf8', '#c084fc']}
                  >
                    <div className="bg-base-900/40 backdrop-blur-sm border border-base-800/50 flex flex-col h-full overflow-hidden group">
                      <div className="relative h-48 w-full overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-base-900 to-transparent opacity-80" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-heading font-black text-white uppercase mb-3">
                          {project.title}
                        </h3>
                        <p className="text-base-400 font-mono text-xs leading-relaxed mb-6 flex-grow">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map(tag => (
                            <span key={tag} className="font-mono text-[10px] text-accent-400 bg-accent-500/10 px-2 py-1 border border-accent-500/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="mt-auto font-mono text-xs text-white border border-base-700 hover:border-accent-500 hover:text-accent-400 py-3 px-4 text-center transition-colors uppercase tracking-widest"
                        >
                          View Project ↗
                        </a>
                      </div>
                    </div>
                  </BorderGlow>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* Skill Matrix */}
        {portfolioData.skills && portfolioData.skills.length > 0 && (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8 uppercase tracking-wider text-center md:text-left">
                Technical Arsenal
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {portfolioData.skills.map((skillGroup, index) => (
                  <BorderGlow
                    key={skillGroup.category}
                    edgeSensitivity={25}
                    glowColor="40 80 80"
                    backgroundColor="transparent"
                    borderRadius={0}
                    glowRadius={20}
                    glowIntensity={0.5}
                    coneSpread={15}
                    animated={true}
                    colors={['#f472b6', '#38bdf8']}
                  >
                    <div className="bg-base-900/40 backdrop-blur-sm border border-base-800/50 p-8 h-full">
                      <h3 className="text-accent-400 font-mono text-sm tracking-widest uppercase mb-6 border-b border-base-800 pb-4">
                        // {skillGroup.category}
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {skillGroup.items.map((item) => (
                          <li key={item} className="text-base-200 font-heading font-medium tracking-wide flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </BorderGlow>
                ))}
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </main>
  );
}
