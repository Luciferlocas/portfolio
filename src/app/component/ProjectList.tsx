"use client";
import React from "react";
import { motion } from "framer-motion";
import Direct from "../icons/Direct";
import { useProject } from "../context/ProjectContext";

const ProjectList = () => {
  const { projects, setSelectedProject } = useProject();
  
  return (
    <div className="flex gap-2 flex-col w-fit">
      {projects.map((item, i) => (
        <motion.a
          href={item.link}
          target="blank"
          key={i}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1 }}
          onMouseEnter={() => setSelectedProject(item.name)}
          onMouseLeave={() => setSelectedProject("")}
          className="group rounded-[0.7rem] hover:bg-white/90 hover:shadow-xl px-4 py-2 w-44 cursor-pointer z-[9999]"
        >
          <h1 className="text-lg flex justify-between items-center">
            {item.name}
            <div className="w-fit group-hover:flex hidden">
              <Direct />
            </div>
          </h1>
        </motion.a>
      ))}
    </div>
  );
};

export default ProjectList;
