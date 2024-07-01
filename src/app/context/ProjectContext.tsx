"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface Project {
  name: string;
  info: string;
  link?: string;
  vs?: string;
  vb?: string;
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
      name: "Tiny URL",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
      vs: "",
      vb : ""
    },
    {
      name: "Edustar",
      info: "Edustar provides educational management solutions. Click the link to learn about its features.",
      link: "https://edustar.luciferlocas.live/",
      vs: "",
      vb : "https://res.cloudinary.com/dotbo6chr/video/upload/v1719858974/edustar_nhnaja.mp4"
    },
    {
      name: "Vigilance+",
      info: "Vigilance+ is a project aimed at enhancing security measures. Visit the website for more information.",
      link: "https://vigilance.luciferlocas.live/",
      vs: "",
      vb : "https://res.cloudinary.com/dotbo6chr/video/upload/v1719860008/vigilancebig_ugqxzz.mp4"
    },
    {
      name: "Bard Clone",
      info: "Bard Clone is a project that replicates a popular blogging platform. Follow the link to explore more.",
      link: "https://bard.luciferlocas.live/",
      vs: "",
      vb : "https://res.cloudinary.com/dotbo6chr/video/upload/v1719860007/Bard_Clonebig_oqdrbo.mp4"
    },
    {
      name: "VidyutKavach",
      info: "VidyutKavach focuses on electricity protection systems. Visit the website to see how it works.",
      link: "https://vidyutkavach.luciferlocas.live/",
      vs: "",
      vb : "https://res.cloudinary.com/dotbo6chr/video/upload/v1719860009/VidyutKavachbig_efyg7f.mp4"
    },
    {
      name: "Github Search",
      info: "Github Search enables users to find repositories and developers. Click the link to start searching.",
      link: "https://githubsearch.luciferlocas.live/",
      vs: "",
      vb : "https://res.cloudinary.com/dotbo6chr/video/upload/v1719860007/Github_Searchbig_bryxjn.mp4"
    },
    {
      name: "Writer's Oasis",
      info: "Writer's Oasis offers a serene writing environment. Explore more about its features and benefits.",
      link: "https://writersoasis.luciferlocas.live/",
      vs: "",
      vb : "https://res.cloudinary.com/dotbo6chr/video/upload/v1719857759/Writer_sOasisbig_rcokif.mp4"
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
