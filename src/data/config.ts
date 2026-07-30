export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  projects: Project[];
  hackathons?: any[];
  skills?: any[];
}

export const portfolioData: PortfolioData = {
  name: "Ojasvi Bhardwaj",
  role: "Software Engineer",
  bio: "I build fast, scalable, and visually stunning web applications with modern technologies. Obsessed with performance and user experience.",
  email: "madhavsharmaqy16@gmail.com", // You can update this later
  github: "https://github.com/madhav7802",
  linkedin: "https://linkedin.com/in/ojasvi-bhardwaj-b3ba93396",
  projects: [
    {
      id: "project-1",
      title: "Fintech Dashboard",
      description: "A high-performance analytics dashboard for financial data.",
      image: "https://picsum.photos/800/600?grayscale&random=1",
      link: "https://example.com/project-1",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "project-2",
      title: "E-Commerce Platform",
      description: "A blazing fast e-commerce platform with static generation.",
      image: "https://picsum.photos/800/600?grayscale&random=2",
      link: "https://example.com/project-2",
      tags: ["React", "Vite", "Zustand"],
    },
    {
      id: "project-3",
      title: "Design System",
      description: "An accessible, themeable design system built from scratch.",
      image: "https://picsum.photos/800/600?grayscale&random=3",
      link: "https://example.com/project-3",
      tags: ["React", "Storybook", "Framer Motion"],
    },
  ],
};
