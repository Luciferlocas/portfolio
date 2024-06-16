import Link from "next/link";
import React from "react";

const Me = () => {
  return (
    <div className="font-extrabold text-[2em]">
      Rohit Somvanshi, <br />
      frontend developer at{" "}
      <Link target="_blank" href="https://brlakgec.com/" className="bg-gradient-to-tr from-blue-700 to-indigo-300 inline-block bg-clip-text text-transparent">
        BRL
      </Link>
    </div>
  );
};

export default Me;
