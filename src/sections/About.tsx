import { portfolioData } from "@/data/config";

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-8 md:px-24 bg-base-950 text-base-200 border-t border-base-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-base-50 mb-4">
            About Me.
          </h2>
          <div className="w-16 h-1 bg-accent-500 mb-8" />
        </div>
        <div className="w-full md:w-2/3 space-y-6 text-lg text-base-300 font-light leading-relaxed">
          <p>
            {portfolioData.bio}
          </p>
          <p>
            I specialize in crafting digital experiences that seamlessly blend high-end aesthetics with robust technical foundations. My approach is rooted in the belief that design and engineering are two sides of the same coin.
          </p>
          <div className="flex gap-4 pt-4">
            <a 
              href={portfolioData.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-sm font-mono uppercase tracking-widest text-base-400 hover:text-accent-400 transition-colors"
            >
              GitHub
            </a>
            <span className="text-base-700">/</span>
            <a 
              href={portfolioData.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="text-sm font-mono uppercase tracking-widest text-base-400 hover:text-accent-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
