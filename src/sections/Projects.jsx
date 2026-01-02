import React from "react";
import { projectsData } from "../assets/assets.js";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const Projects = () => {
  return (
    <div id={"projects"} className=" min-h-screen  lg:px-32  p-5">
      <h1 className="text-5xl font-bold lg:pt-16  text-center ">
        <span className="">Take a look at my </span>
        <span
          className="text-teal-600  [text-stroke:2px_#14b8a6]
               [text-shadow:0_0_20px_#14b8a6] hover:[text-shadow:0_0_25px_#14b8a6] transition-all duration-300"
        >
          Work
        </span>
        <hr className="w-20 border-t-4  mt-4 mx-auto" />
      </h1>
      <br />
      <br /> <br />
      <div className="flex flex-wrap justify-around lg:justify-center  gap-10 lg:pt-15 ">
        {projectsData.map((projects, index) => (
          <div
            key={index}
            className="relative group max-w-[340px] border shadow-lg rounded-lg px-2 py-2 text-center overflow-hidden"
          >
            <img
              src={projects.img}
              alt={projects.title}
              className="w-80 h-60 object-fill mx-auto mb-4 rounded-lg"
            />

            <h2 className="text-xl font-medium">{projects.title}</h2>
            <p className="text-sm mt-2">{projects.desc}</p>

            {/* Hover Overlay */}
            <div
              className="absolute bottom-0 left-0 w-full h-0 bg-linear-to-br from-black via-gray-900 to-teal-900
 flex items-center justify-center opacity-0 
                    group-hover:h-full group-hover:opacity-100 transition-all duration-500"
            >
              <a
                href={projects.link || "#"}
                target="_blank"
                className="text-xl font-bold text-white hover:text-gray-400 transition flex items-center gap-2"
              >
                <FaArrowUpRightFromSquare />
                Live Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
