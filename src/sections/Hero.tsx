import { portfolioData } from "@/data/config";
import BorderGlow from "@/components/BorderGlow";
import TrueFocus from "@/components/TrueFocus";

export default function Hero({ onDiscover }: { onDiscover?: () => void }) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Spline 3D Model (via iframe to prevent WASM panic) */}
      <div 
        className="absolute z-0 pointer-events-auto" 
        style={{ 
          width: 'calc(100% + 300px)', 
          height: 'calc(100% + 150px)', 
          left: '-150px', 
          top: '-75px' 
        }}
      >
        <iframe 
          key="spline-hero-qBDdiOfrW1PVwPlvuqgYqxDR-Egb"
          src="https://my.spline.design/theeternalarc-qBDdiOfrW1PVwPlvuqgYqxDR-Egb/" 
          frameBorder="0" 
          width="100%" 
          height="100%" 
          style={{ border: 'none', background: 'transparent' }}
        />
      </div>

      {/* Animated Portfolio Name (TrueFocus) */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 pointer-events-none scale-50 md:scale-75 origin-top-left font-heading font-black tracking-tight">
        <TrueFocus 
          sentence="OJASVI BHARDWAJ'S PORTFOLIO"
          manualMode={false}
          blurAmount={5}
          borderColor="#ffffff"
          glowColor="rgba(255, 255, 255, 0.4)"
          animationDuration={1.5}
          pauseBetweenAnimations={0.5}
        />
      </div>

      {/* Button Overlay Layer */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20">
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
          {/* Futuristic Button */}
          <button 
            onClick={onDiscover}
            className="relative group w-fit inline-flex items-center justify-center bg-transparent text-xs font-mono uppercase tracking-widest px-8 py-4 transition-colors hover:text-accent-300"
          >
            <span className="relative z-10">Discover The Arc</span>
            
            {/* Custom borders for the sci-fi look */}
            {/* Top-Right Bracket */}
            <span className="absolute top-0 right-0 w-8 h-[1px] bg-white/40 group-hover:bg-accent-500 transition-colors" />
            <span className="absolute top-0 right-0 w-[1px] h-4 bg-white/40 group-hover:bg-accent-500 transition-colors" />
            
            {/* Bottom-Left Bracket */}
            <span className="absolute bottom-0 left-0 w-12 h-[1px] bg-white/40 group-hover:bg-accent-500 transition-colors" />
            <span className="absolute bottom-0 left-0 w-[1px] h-4 bg-white/40 group-hover:bg-accent-500 transition-colors" />
          </button>
        </BorderGlow>
      </div>
    </section>
  );
}
