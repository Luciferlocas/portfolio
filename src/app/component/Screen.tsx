"use client";

import React from "react";
import { motion } from "framer-motion";
import { useProject } from "../context/ProjectContext";

const Screen = () => {
  const { selectedProject } = useProject();

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:gap-4 justify-center items-center ">
      <motion.div
        initial={{ x: -50 }}
        whileInView={{ x: 0, rotate: -12 }}
        transition={{ duration: 0.5 }}
        className="md:w-[11.25rem] w-[5.5rem] md:h-[23.75rem] h-[11.5rem] bg-white md:rounded-[1.5rem] shadow-md sm:rounded-2xl rounded-xl relative overflow-hidden z-10 lg:-mt-4 md:-mt-72 -mt-36 lg:mr-0 sm:mr-[14rem] mr-[10rem]"
      >
        <video
          className="object-contain md:rounded-[1.5rem] sm:rounded-2xl rounded-xl"
          autoPlay
          loop
          muted
        >
          <source src="/{selectedProject}.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-1 left-1/2 w-1/3 h-[2px] bg-black/80 rounded-full -translate-x-1/2"></div>
      </motion.div>
      <motion.div
        initial={{ x: 50 }}
        whileInView={{ x: 0, rotate: -12 }}
        transition={{ duration: 0.5 }}
        className="md:w-[32rem] w-[18rem] md:h-[23.75rem] h-[11.25rem] bg-white shadow-md rounded-[0.8rem] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full bg-black/80 h-4">
          <div className="absolute bg-green-500 rounded-full w-2 h-2 left-9 top-1 z-10"></div>
          <div className="absolute bg-yellow-500 rounded-full w-2 h-2 left-6 top-1 z-10"></div>
          <div className="absolute bg-red-500 rounded-full w-2 h-2 left-3 top-1 z-10"></div>
        </div>
        <video className="object-contain" autoPlay loop muted>
          <source src="/{selectedProject}b.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
};

export default Screen;
