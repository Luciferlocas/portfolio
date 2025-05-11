import Link from "next/link";
import React from "react";

const Me = () => {
  return (
    <div className="font-extrabold text-[2em]">
      Rohit Somvanshi, <br />
      Frontend Developer Intern at{" "}
      <Link target="_blank" href="https://erevna.in/" className="bg-gradient-to-tr from-blue-700 to-indigo-300 inline-block bg-clip-text text-transparent">
        Erevna
      </Link>
    </div>
  );
};

export default Me;
