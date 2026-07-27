import { portfolioData } from "@/data/config";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-32 px-8 md:px-24 bg-base-950 text-base-200 border-t border-base-800 flex flex-col items-center justify-center text-center">
      <h2 className="text-5xl md:text-7xl font-heading font-bold text-base-50 mb-6">
        Let's Connect.
      </h2>
      <p className="text-xl text-base-400 font-light max-w-xl mb-12">
        Whether you have a question, a project in mind, or just want to say hi, my inbox is always open.
      </p>
      
      <a 
        href={`mailto:${portfolioData.email}`}
        className="relative group w-fit inline-flex items-center justify-center bg-transparent text-sm font-mono uppercase tracking-widest px-10 py-5 transition-colors hover:text-accent-300"
      >
        <span className="relative z-10">Get In Touch</span>
        
        {/* Top-Right Bracket */}
        <span className="absolute top-0 right-0 w-8 h-[1px] bg-white/40 group-hover:bg-accent-500 transition-colors" />
        <span className="absolute top-0 right-0 w-[1px] h-4 bg-white/40 group-hover:bg-accent-500 transition-colors" />
        
        {/* Bottom-Left Bracket */}
        <span className="absolute bottom-0 left-0 w-12 h-[1px] bg-white/40 group-hover:bg-accent-500 transition-colors" />
        <span className="absolute bottom-0 left-0 w-[1px] h-4 bg-white/40 group-hover:bg-accent-500 transition-colors" />
      </a>
      
      <div className="mt-24 text-base-500 text-sm font-mono flex items-center justify-center gap-4 w-full border-t border-base-900 pt-8">
        <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </div>
    </section>
  );
}
