import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import { IoIosTrophy } from "react-icons/io";
import caseImg from "../assets/casetimg.png";
import higherSecImg from "../assets/gghssk.png";

const Education = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id={"education"} className="min-h-screen md:w-full w-auto">
      <h1 className="text-5xl font-bold md:pt-24 pt-10 text-center ">
        <span className="">My </span>
        <span
          className="text-teal-600  [text-stroke:2px_#14b8a6]
               [text-shadow:0_0_20px_#14b8a6] hover:[text-shadow:0_0_25px_#14b8a6] transition-all duration-300"
        >
          Education
        </span>
        <hr className="w-20 border-t-4  mt-4 mx-auto" />
      </h1>

      <div className="flex flex-wrap  justify-center lg:p-8 lg:gap-5 gap-20 md:pt-30 pt-16">
        <div className="flex  lg:relative lg:h-[520px] lg:w-[312px]  lg:ml-2   static justify-center items-center">
          <div
            className={`h-[376px] w-[336px] lg:mr-1 rounded-xl  lg:absolute lg:top-0 lg:right-0   px-3 py-5  
               ${
                 theme === "dark"
                   ? "shadow-[2px_2px_0_rgba(255,255,255,0.08)]"
                   : "border-r border-l border-b border-gray-200 shadow-lg"
               } `}
          >
            <img
              src={caseImg}
              alt="Caset Image"
              className="h-15 w-50 object-contain "
            />
            <h1 className="text-2xl font-bold mb-3 ">CS Graduate</h1>
            <Button
              className={`bg-teal-800 text-amber-50 rounded-full text-l
            border border-amber-50 text-center  `}
            >
              <IoIosTrophy /> 7.52 CGPA
            </Button>
            <p className="mt-3 leading-relaxed ">
              Built a strong foundation in software development through
              coursework and projects, covering backend systems, databases,
              user-friendly interfaces, collaborative workflows, and
              industry-relevant tools and technologies.
            </p>
          </div>
        </div>
        <div className=" flex-col mx-12 hidden lg:block">
          <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center mt-26">
            <LiaGraduationCapSolid />
          </div>
          <div className="w-1 bg-teal-600 h-[120px] mx-2.5"></div>
          <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
            <LiaGraduationCapSolid />
          </div>
        </div>

        <div className="flex  lg:p-6 relative  lg:h-130 lg:w-78  ">
          <div
            className={`h-94 w-84 rounded-xl lg:ml-1 relative lg:absolute md:bottom-0 lg:left-0 px-3 py-5  ${
              theme === "dark"
                ? " shadow-[2px_2px_0_rgba(255,255,255,0.08)]"
                : "border-r border-l border-b border-gray-200 shadow-lg"
            } `}
          >
            <img
              src={higherSecImg}
              alt="higher Secondary image"
              className="h-20 w-20 object-contain   "
            />
            <h1 className="text-xl font-bold mb-3 ">Higher Secondary </h1>
            <Button className="bg-teal-800 text-amber-50  rounded-full text-l border border-amber-50 text-center ">
              <IoIosTrophy /> 79.4%
            </Button>
            <p className=" leading-relaxed rounded-xl mt-3 ">
              Developed a strong analytical foundation through higher secondary
              science studies, which naturally aligned with and supported my
              later interest in programming and software development, driving
              continuous learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
