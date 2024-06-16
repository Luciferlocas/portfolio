"use client";
import React, { useState, useEffect } from "react";
import Screen from "./Screen";
import Title from "./Title";
import { motion } from "framer-motion";
import { useProject } from "../context/ProjectContext";

const AboutProject = () => {
  const { selectedProject } = useProject();
  const [cursor, setCursor] = useState({ x: 0 });
  const [up, setUp] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const x = e.clientX;
      setCursor({ x });
    };

    const handleScroll = () => {
      if (window.scrollY > 8 * 16) {
        setUp(true);
      } else {
        setUp(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!selectedProject ? (
        <div className="text-4xl font-extrabold my-auto fixed top-1/2 -translate-y-[40%] left-1/2">
          Magic happens, <br /> when you{"\u00A0"}
          <span className="bg-gradient-to-tr from-blue-700 to-indigo-300 inline-block bg-clip-text text-transparent">
            hover
          </span>
          {"\u00A0"}
          on things
          {"\u00A0"}
          <motion.span
            initial={{ x: -2, y: 2, rotate: -12 }}
            animate={{ x: 2, y: -2, rotate: 12 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="inline-block"
          >
            !
          </motion.span>
        </div>
      ) : (
        <div
          className={`fixed flex flex-col gap-[4em] -translate-x-[60%] top-1/2 ${
            up ? "-translate-y-1/2" : "-translate-y-1/3"
          }`}
          style={{
            left: `calc(50% + ${cursor.x}px)`,
          }}
        >
          <Title>{selectedProject}</Title>
          <Screen />
          <div></div>
        </div>
      )}
    </>
  );
};

export default AboutProject;
