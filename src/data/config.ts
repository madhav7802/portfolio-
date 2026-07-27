export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface Career {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string;
  technologies: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Hackathon {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  projects: Project[];
  career: Career[];
  achievements: Achievement[];
  skills: Skill[];
  hackathons: Hackathon[];
}

export const portfolioData: PortfolioData = {
  name: "Ojasvi Bhardwaj",
  role: "Software Engineer",
  bio: "I build fast, scalable, and visually stunning web applications with modern technologies. Obsessed with performance and user experience.",
  email: "madhavsharmaqy16@gmail.com",
  github: "https://github.com/madhav7802",
  linkedin: "https://linkedin.com/in/ojasvi-bhardwaj-b3ba93396",
  skills: [
    {
      category: "Programming Languages",
      items: ["C++", "Java", "Python", "TypeScript", "JavaScript"],
    },
    {
      category: "Frameworks & UI",
      items: ["Next.js", "React", "Node.js", "Framer Motion", "Three.js"],
    },
    {
      category: "Specialized & Backend",
      items: ["Generative AI", "RAG Apps", "MongoDB", "Google Cloud", "API Design"],
    },
  ],
  hackathons: [
    {
      id: "hack-1",
      title: "AMD Developer Hackathon: ACT II",
      description: "Built AI Agents and High-Performance AI Apps on AMD GPUs in the cloud. Developed hands-on experience optimizing Generative AI models and pushing the boundaries of hardware-accelerated agentic workflows.",
      image: "/amd_hackathon.png",
    }
  ],
  career: [
    {
      id: "career-1",
      role: "Back-End Development Intern",
      company: "QSkill (Virtual)",
      date: "Jan 2026 - Feb 2026",
      description: "Successfully completed a 31-day virtual internship focusing on backend development. Demonstrated excellent analytical skills, rapid acquisition of emerging technologies, and fostered strong collaboration with fellow team members.",
      technologies: ["Backend Development", "API Design", "Database Management"],
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Building RAG Apps Using MongoDB",
      issuer: "MongoDB",
      date: "Dec 2025",
    },
    {
      id: "ach-2",
      title: "Oracle Fusion AI Agent Studio Certified Foundations Associate",
      issuer: "Oracle University",
      date: "Nov 2025",
    },
    {
      id: "ach-3",
      title: "Introduction to Generative AI Studio",
      issuer: "Google Cloud & Simplilearn",
      date: "Nov 2025",
    },
    {
      id: "ach-4",
      title: "Generative AI Mastermind",
      issuer: "Outskill",
      date: "2025",
    },
    {
      id: "ach-5",
      title: "Build Your Own AI Assistant for a Brand",
      issuer: "WsCube Tech",
      date: "Dec 24, 2025",
    }
  ],
  projects: [
    {
      id: "project-rag",
      title: "Enterprise RAG Architecture",
      description: "A production-ready Retrieval-Augmented Generation pipeline using LangChain, OpenAI, and MongoDB Atlas Vector Search.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
      link: "https://github.com/madhav7802/rag-model---demo-",
      tags: ["Python", "LangChain", "MongoDB", "AI"],
    },
    {
      id: "project-1",
      title: "JPMC Advanced Software Engineering",
      description: "Project repo for the JPMorgan Chase Advanced Software Engineering Forage program.",
      image: "https://picsum.photos/800/600?grayscale&random=4",
      link: "https://github.com/madhav7802/forage-midas",
      tags: ["Java", "Software Engineering"],
    },
    {
      id: "project-2",
      title: "VS Code Projects",
      description: "A collection of algorithmic challenges and software development projects.",
      image: "https://picsum.photos/800/600?grayscale&random=5",
      link: "https://github.com/madhav7802/vs-code-projects",
      tags: ["C++", "Algorithms"],
    },
  ],
};
