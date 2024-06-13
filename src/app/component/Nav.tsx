import React from "react";
import Logo from "../icons/Logo";
import Link from "next/link";
import Read from "../icons/Read";
import Mail from "../icons/Git";
import { Tooltip } from "@nextui-org/react";

const Nav = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full cursor-pointer md:w-1/3 w-9/12 h-[3rem] bg-black/90 backdrop-saturate-150 backdrop-blur-lg z-[9999] flex flex-row items-center px-4 justify-around">
      <div className="drop-shadow-[0_0_0.3rem_#ffffff70]">
        <Logo />
      </div>

      <Tooltip
        content="About"
        showArrow
        classNames={{
          content: "shadow-none font-semibold",
        }}
        offset={5}
      >
        <Link
          href="https://read.cv/luciferlocas"
          target="blank"
          className=" text-white rotate-12 hover:drop-shadow-[0_0_0.3rem_#ffffff70]"
        >
          <Read />
        </Link>
      </Tooltip>
      <Tooltip
        content="Github"
        showArrow
        classNames={{
          content: "shadow-none font-semibold",
        }}
        offset={6}
      >
        <Link
          href="https://github.com/Luciferlocas"
          target="blank"
          className=" text-white hover:drop-shadow-[0_0_0.3rem_#ffffff70]"
        >
          <Mail />
        </Link>
      </Tooltip>
      <Tooltip
        content="LinkedIn"
        showArrow
        classNames={{
          content: "shadow-none font-semibold",
        }}
        offset={-1}
      >
        <Link
          href="https://www.linkedin.com/in/rohit-somvanshi/"
          target="blank"
          className=" text-white font-extralight text-lg hover:drop-shadow-[0_0_0.3rem_#ffffff70]"
        >
          in
        </Link>
      </Tooltip>
    </div>
  );
};

export default Nav;
