"use client";

import React from "react";
import Screen from "./Screen";
import Title from "./Title";
import { useProject } from "../context/ProjectContext";

const AboutProject = () => {
  const { selectedProject, projects } = useProject();

  return (
    <>
      {!selectedProject ? (
        <div className="text-4xl font-extrabold my-auto">
          Magin happens, <br /> when you{"\u00A0"}
          <span className="bg-gradient-to-tr from-blue-700 to-indigo-300 inline-block bg-clip-text text-transparent">
            hover
          </span>
          {"\u00A0"}
          on things
          {"\u00A0"}
          <div className="inline-block rotate-12">!</div>
        </div>
      ) : (
        <div className=" flex flex-col gap-[4em] -mt-8">
          <Title text={selectedProject} />
          <Screen />
          <div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default AboutProject;
