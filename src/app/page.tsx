import React from "react";
import Nav from "./component/Nav";
import Me from "./component/Me";
import ProjectList from "./component/ProjectList";
import AboutProject from "./component/AboutProject";

const page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-[3rem] sm:w-9/12 w-10/12 mx-auto pt-[4em] pb-[7em]">
        <Nav />
        <Me />
        <ProjectList />
        <div className="md:flex hidden">
          <AboutProject />
        </div>
      </div>
    </>
  );
};

export default page;
