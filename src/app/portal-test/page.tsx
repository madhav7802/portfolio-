"use client";

import React from "react";
import PortalTransition from "@/components/PortalTransition";

export default function PortalTestPage() {
  return (
    <PortalTransition
      nextContent={
        <div className="w-full h-screen bg-base-950 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-heading font-black mb-4 tracking-tighter">Transition Complete</h1>
          <p className="text-base-400">Welcome to the Infinite Menu (Simulation)</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-8 px-6 py-2 border border-accent-500/50 text-accent-400 rounded-full hover:bg-accent-500/10 transition-colors"
          >
            Reset Animation
          </button>
        </div>
      }
    >
      {/* Simulated Hero Scene */}
      <div className="w-full h-full flex flex-col items-center justify-center bg-base-950 relative">
        {/* Fake Starfield/Background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        <div className="absolute top-12 left-12 text-4xl font-heading font-black tracking-tighter opacity-20">
          ETERNAL ARC
        </div>

        {/* The PortalTransition component automatically centers the ring button over this children content */}
      </div>
    </PortalTransition>
  );
}
