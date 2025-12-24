import React, { useState, useEffect } from "react";
import { allSvgs } from "../assets/assets.js";
import flower from "../assets/flower.png";

const Skills = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 0.5); // adjust speed here
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="skills" className="min-h-screen w-full md:px-32 ">
      {/* Title */}
      <h1 className="text-5xl font-bold  pt-14 xl:pt-20  text-center">
        <span>My </span>
        <span className="text-teal-600 [text-stroke:2px_#14b8a6] [text-shadow:0_0_20px_#14b8a6] hover:[text-shadow:0_0_25px_#14b8a6] transition-all duration-300">
          Skills
        </span>
        <hr className="w-20 border-t-4 mt-4 mx-auto" />
      </h1>

      {/* Rotating Image */}
      <div className="h-[200px] flex justify-center items-center mb-30 mt-30 md:mb-15 md:mt-15">
        <img
          src={flower}
          alt="Rotating"
          className="w-80 h-80 transition-transform duration-150"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>

      {/* Skills icons */}
      <div className=" justify-center flex mt-10">
        {" "}
        <div className="flex flex-row justify-center gap-10 w-200 flex-wrap items-center ">
          {" "}
          {allSvgs.map((svg, index) => (
            <div
              key={index}
              className="bg-teal-800 text-amber-50 flex flex-row gap-2 w-32 h-8 rounded-md  px-4 py-1 hover:scale-95 transition"
            >
              {" "}
              <img src={svg.img} className="w-6 h-6" /> <h2>{svg.title} </h2>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
