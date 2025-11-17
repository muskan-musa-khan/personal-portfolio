import React from "react";
import { ReactTyped } from "react-typed";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <div className=" flex flex-col item-center p-5  justify-center text-center sm:text-left
      md:flex-row md:p-8 
      lg:px-35 lg:py-20 lg:gap-60 lg:m-5  ">
        <div className="">
          <h1 className="text-7xl font-bold pt-10 ">
            <span className="">Hey, I'm </span>
            <span
              className="text-teal-600  [text-stroke:2px_#14b8a6]
               [text-shadow:0_0_20px_#14b8a6] hover:[text-shadow:0_0_25px_#14b8a6] transition-all duration-300"
            >
              Muskan
            </span>
          </h1>
          <div className="mt-6 ">
            <ReactTyped
              className="text-3xl font-semibold"
              strings={["Frontend Developer", "UI/UX Designer", "CS Graduate"]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </div>

          <p className="md:mt-6 md:text-xl text-xl leading-relaxed ">
            Turning ideas into interactive digital experiences. Designing
            interfaces that feel effortless and intuitive. Bringing creativity
            and clean code together for the web you’ll love to use.
          </p>
          <div className="mt-10 flex gap-2 justify-center md:justify-start ">
            <Button className="bg-teal-800 text-amber-50 rounded-md text-l border border-amber-50 hover:scale-95">
              View My Work
            </Button>
            <Button className="bg-white text-teal-900 rounded-md  border-2 border-teal-900 hover:scale-95">
              Download Cv
            </Button>
          </div>
          <div
            className={`flex mt-8 text-3xl gap-2 justify-center md:justify-start ${
              theme === "dark" ? "bg-black text-white" : "bg-white  text-black"
            }`}
          >
            <Button>
              <FaGithub className="hover:scale-110  " />
            </Button>
            <Button className="hover:scale-110 ">
              <FaLinkedin />
            </Button>
            <Button className="hover:scale-110 text-4xl">
              {" "}
              <CgMail />
            </Button>
            <Button className=" hover:scale-110 ">
              {" "}
              <FaInstagram />
            </Button>
          </div>
        </div>
        <div className=" flex md:w-82 md:h-82 sm:w-full sm:h-full  rounded-full p-1 bg-linear-to-tr from-teal-400 to-teal-700 shrink-0 ">
          <img
            src="./src/assets/myphoto.jpg"
            className="w-full h-full rounded-full object-cover border-8 border-teal-800
    hover:scale-110 hover:shadow-[0_0_40px_#14b8a6] transition duration-500"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
