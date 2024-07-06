"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface Project {
  name: string;
  info: string;
  link: string;
  vs: string;
  vb: string;
  pb: string;
  ps: string;
}

interface ProjectContextType {
  selectedProject: string;
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
  projects: Project[];
  not: string
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider: React.FC<ProjectProviderProps> = ({
  children,
}) => {
  const [selectedProject, setSelectedProject] = useState<string>("");
  const not = "Writer's Oasis";
  const projects: Project[] = [
    {
      name: "Tiny Miny",
      info: "Tiny miny let's you short a long URL, a NEXTjs application to enhance URL shortening. Click the link to short your long URL",
      link: "https://tiny-miny.luciferlocas.live/",
      vs: "",
      vb: "https://res.cloudinary.com/dotbo6chr/video/upload/v1720297700/Recording_2024-07-07_015605_1_thqd5o.mp4",
      pb: "https://ik.imagekit.io/luciferlocas/tiny-miny.png?updatedAt=1720076681268",
      ps: "https://ik.imagekit.io/luciferlocas/tiny-miny.jpg?updatedAt=1720073387461",
    },
    {
      name: "Edustar",
      info: "Edustar provides educational management solutions. This project packs a punch, it uses Next API for smooth backend data fetching and lets you log in just once for a whole year of access. Click the link to learn about its features.",
      link: "https://edustar.luciferlocas.live/",
      vs: "https://res.cloudinary.com/dotbo6chr/video/upload/v1720074864/edustar_mnzzfm.mp4",
      vb: "https://ik.imagekit.io/luciferlocas/edustar_nhnaja.mp4?updatedAt=1720031385431",
      pb: "https://ik.imagekit.io/luciferlocas/edustar.png?updatedAt=1720076700606",
      ps: "https://ik.imagekit.io/luciferlocas/edustar.jpg?updatedAt=1720073387322",
    },
    {
      name: "Vigilance+",
      info: "Vigilance+ is a project aimed to streamline the visitor management system. Currently implemented in my college campus to take all the entries of visitor and generate report as per need. Did this project with a team of developers. Visit the website for more information.",
      link: "https://vigilance.luciferlocas.live/",
      vs: "https://res.cloudinary.com/dotbo6chr/video/upload/v1720075084/vigilance_egojkh.mp4",
      vb: "https://ik.imagekit.io/luciferlocas/vigilancebig_ugqxzz.mp4?updatedAt=1720031371955",
      pb: "https://ik.imagekit.io/luciferlocas/vigilance.png?updatedAt=1720076720927",
      ps: "https://ik.imagekit.io/luciferlocas/vigilance.jpg?updatedAt=1720073387299",
    },
    {
      name: "Bard Clone",
      info: "Bard Clone is a project that replicates Gemini(Bard earlier). Currently the model doesn't reply as it's against the google policy. Follow the link to explore more.",
      link: "https://bard.luciferlocas.live/",
      vs: "https://res.cloudinary.com/dotbo6chr/video/upload/v1720071413/bard_jh75xl.mp4",
      vb: "https://ik.imagekit.io/luciferlocas/Bard_Clonebig_oqdrbo.mp4?updatedAt=1720031371648",
      pb: "https://ik.imagekit.io/luciferlocas/bard.png?updatedAt=1720076580969",
      ps: "https://ik.imagekit.io/luciferlocas/bard.jpg?updatedAt=1720073387317",
    },
    {
      name: "VidyutKavach",
      info: "VidyutKavach is a Cyber-Secure Web-Based Energy Management System that utilizes a multi-layered strategy to safeguard security and integrity. Did this project with Shifa and Anas. A SIH problem statement solution, visit the website to see how it works.",
      link: "https://vidyutkavach.luciferlocas.live/",
      vs: "https://res.cloudinary.com/dotbo6chr/video/upload/v1720035234/vidyut_gidpvf.mp4",
      vb: "https://ik.imagekit.io/luciferlocas/VidyutKavachbig_efyg7f.mp4?updatedAt=1720031382899",
      pb: "https://ik.imagekit.io/luciferlocas/vidyutkavach.png?updatedAt=1720076643134",
      ps: "https://ik.imagekit.io/luciferlocas/vidyut.jpg?updatedAt=1720073387257",
    },
    {
      name: "Glitchub",
      info: "Glitchub is a Github Search which enables users to find developers and their repos. Click the link to start searching.",
      link: "https://glitchub.luciferlocas.live/",
      vs: "https://res.cloudinary.com/dotbo6chr/video/upload/v1720074863/glitchub_qe3abe.mp4",
      vb: "https://ik.imagekit.io/luciferlocas/Github_Searchbig_bryxjn.mp4?updatedAt=1720031367729",
      pb: "https://ik.imagekit.io/luciferlocas/glitchub.png?updatedAt=1720076621795",
      ps: "https://ik.imagekit.io/luciferlocas/glitchub.jpg?updatedAt=1720073387293",
    },
    {
      name: "Writer's Oasis",
      info: "As my first project Writer's Oasis is a platform which enables every writer to post their creativity on the platform. The project is no longer running.",
      link: "#",
      vs: "",
      vb: "https://res.cloudinary.com/dotbo6chr/video/upload/v1719857759/Writer_sOasisbig_rcokif.mp4",
      pb: "https://ik.imagekit.io/luciferlocas/writersoasis.png?updatedAt=1720076663333",
      ps: "https://ik.imagekit.io/luciferlocas/writers.jpg?updatedAt=1720074467437",
    },
  ];

  return (
    <ProjectContext.Provider
      value={{ selectedProject, setSelectedProject, projects, not }}
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
