"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface Project {
  name: string;
  info: string;
  link?: string;
}

interface ProjectContextType {
  selectedProject: string;
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
  projects: Project[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider: React.FC<ProjectProviderProps> = ({
  children,
}) => {
  const [selectedProject, setSelectedProject] = useState<string>("");
  const projects: Project[] = [
    {
      name: "Vigilance+",
      info: "Vigilance+ is a project aimed at enhancing security measures. Visit the website for more information.",
      link: "https://vigilance.luciferlocas.live/",
    },
    {
      name: "Bard Clone",
      info: "Bard Clone is a project that replicates a popular blogging platform. Follow the link to explore more.",
      link: "https://bard.luciferlocas.live/",
    },
    {
      name: "Edumarshal",
      info: "Edumarshal provides educational management solutions. Click the link to learn about its features.",
      link: "https://edumarshal.luciferlocas.live/",
    },
    {
      name: "VidyutKavach",
      info: "VidyutKavach focuses on electricity protection systems. Visit the website to see how it works.",
      link: "https://vidyutkavach.luciferlocas.live/",
    },
    {
      name: "Writer's Oasis",
      info: "Writer's Oasis offers a serene writing environment. Explore more about its features and benefits.",
      link: "https://writersoasis.luciferlocas.live/",
    },
    {
      name: "Github Search",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Gb Seach",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Gihub Seach",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Githu Searc",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Github Sch",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Githueach",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Gihub Search",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Github earch",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "GithubSearch",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Github Se",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Github Searh",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Github Seach",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Github Sarch",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Gitb Search",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Giub Search",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Githu Search",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Github Searc",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "ithub Search",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Gihub Search",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "Git Search",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
    {
      name: "GithSearch",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
    },
  ];

  return (
    <ProjectContext.Provider
      value={{ selectedProject, setSelectedProject, projects }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
};
