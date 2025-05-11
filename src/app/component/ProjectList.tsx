"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Direct from "../icons/Direct";
import { useProject } from "../context/ProjectContext";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Screen from "./Screen";

const ProjectList = () => {
  const { projects, setSelectedProject, not } = useProject();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setSelectedProject("");
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setSelectedProject]);

  return (
    <>
      <div className="md:flex gap-2 flex-col w-fit hidden">
        {projects.map((item, i) => (
          <motion.a
            href={item.link}
            target="blank"
            key={i}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
            onClick={(e) => {
              if (item.name === not) e.preventDefault();
            }}
            onHoverStart={() => setSelectedProject(item.name)}
            onHoverEnd={() => setSelectedProject("")}
            className="group rounded-[0.7rem] hover:bg-white/90 hover:shadow-xl px-4 py-2 w-44 cursor-pointer z-[9999]"
          >
            <h1 className="text-lg flex justify-between items-center">
              {item.name}
              <div className="w-fit group-hover:flex hidden">
                {item.name !== not && <Direct />}
              </div>
            </h1>
          </motion.a>
        ))}
      </div>
      <Accordion className="flex gap-2 flex-col md:hidden w-full">
        {projects.map((item, i) => (
          <AccordionItem
            onPress={() => setSelectedProject(item.name)}
            key={i}
            classNames={{
              content: "py-[3rem]",
              indicator: "text-black",
            }}
            aria-label={item.name}
            title={item.name}
          >
            <div className="flex flex-col gap-12">
              <p>
                {item.info}
                {"\u00A0"}
                <a
                  target="_blank"
                  href={item.link}
                  className="text-sm bg-gradient-to-tr from-blue-700 to-indigo-300 inline-block bg-clip-text text-transparent"
                >
                  {item.name !== not && "Explore..."}
                </a>
              </p>
              <Screen />
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ProjectList;
