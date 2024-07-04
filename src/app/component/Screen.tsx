"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useProject } from "../context/ProjectContext";

const Screen = () => {
  const { selectedProject, projects } = useProject();
  const [selected, setSelected] = useState({
    name: "",
    info: "",
    link: "",
    vs: "",
    vb: "",
    pb: "",
    ps: "",
  });

  useEffect(() => {
    if (selectedProject)
      setSelected(projects.filter((x) => x.name === selectedProject)[0]);
  }, [selectedProject]);

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:gap-4 justify-center items-center ">
      <motion.div
        initial={{ x: -50 }}
        whileInView={{ x: 0, rotate: -12 }}
        transition={{ duration: 0.5 }}
        className="md:w-[10.25rem] w-[5.5rem] aspect-[9/19] bg-white lg:rounded-[1.5rem] shadow-md md:rounded-2xl rounded-xl relative overflow-hidden z-10 lg:-mt-4 md:-mt-72 -mt-36 lg:mr-0 sm:mr-[14rem] mr-[10rem]"
      >
        <video
          className="object-contain lg:rounded-[1.5rem] md:rounded-2xl rounded-xl md:-mt-5 -mt-[0.65rem]"
          autoPlay
          loop
          muted
          poster={selected.ps}
          key={selected.ps}
        >
          <source src={selected.vs} type="video/mp4" />
        </video>
        <div className="absolute bottom-1 left-1/2 w-1/3 h-[2px] bg-black/80 rounded-full -translate-x-1/2"></div>
      </motion.div>
      <motion.div
        initial={{ x: 50 }}
        whileInView={{ x: 0, rotate: -12 }}
        transition={{ duration: 0.5 }}
        className="md:w-[34rem] w-[18rem] aspect-[16/10] bg-white shadow-md md:rounded-[0.8rem] rounded-lg relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full bg-black/80 md:h-4 h-[0.65rem]">
          <div className="absolute bg-green-500 rounded-full md:w-2 md:h-2 w-1 h-1 md:left-9 left-7 md:top-1 top-[3px] z-10"></div>
          <div className="absolute bg-yellow-500 rounded-full md:w-2 md:h-2 w-1 h-1 md:left-6 left-5 md:top-1 top-[3px] z-10"></div>
          <div className="absolute bg-red-500 rounded-full md:w-2 md:h-2 w-1 h-1 left-3 md:top-1 top-[3px] z-10"></div>
        </div>
        <video
          className="object-contain"
          autoPlay
          preload="auto"
          loop
          muted
          poster={selected.pb}
          key={selected.pb}
        >
          <source src={selected.vb} type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
};

export default Screen;
