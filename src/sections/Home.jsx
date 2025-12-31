import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import myImg from "../assets/myimg.png";
const Home = () => {
  const [, setActive] = useState("home");

  return (
    <>
      <div
        id={"home"}
        className=" min-h-screen min-w-screen flex flex-col-reverse  items-center p-5  justify-center text-center xl:text-left
      xl:flex-row md:p-6 
      lg:px-32   "
      >
        <div className="">
          <h1 className="text-7xl font-bold pt-3 xl:pt-20 h-auto w-auto ">
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
              strings={["Software Developer", "Data Analyst", "CS Graduate"]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </div>

          <p className="md:mt-6 xl:text-xl text-xl leading-relaxed mr-auto xl:mr-40">
            Computer Science graduate who spends most of the time building
            things that live both on the screen and behind it. I somehow got
            really into cleaning up confusing, messy stuff and turning it into
            something that actually makes sense. 
          </p>
          <div className="mt-10 flex gap-2 justify-center xl:justify-start ">
            <Button
              className="bg-teal-800 text-amber-50 rounded-md text-l border border-amber-50 hover:scale-95 cursor-pointer"
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
                setActive("projects");
              }}
            >
              View My Work
            </Button>
            <Button className="bg-white text-teal-900 rounded-md  border-2 border-teal-900 hover:scale-95">
              Download Cv
            </Button>
          </div>
          <div
            className={`flex mt-8 text-3xl gap-2 justify-center xl:justify-start`}
          >
            <a href="https://github.com/muskan-musa-khan" target="_blank">
              <Button variant="ghost" size="icon">
                <FaGithub className="hover:scale-110  " />{" "}
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/muskan-musa-khan-2a32a5363"
              target="_blank"
            >
              <Button variant="ghost" size="icon" className="hover:scale-110 ">
                <FaLinkedin />
              </Button>
            </a>
            <a href="mailto:muskanmusa.cs@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 text-4xl"
              >
                {" "}
                <CgMail />
              </Button>
            </a>
            <Button variant="ghost" size="icon" className=" hover:scale-110 ">
              {" "}
              <FaInstagram />
            </Button>
          </div>
        </div>
        <div className="md:mt-12">
          <div className=" flex w-88 h-88 lg:w-96 lg:h-96   rounded-full p-1 bg-linear-to-tr from-teal-400 to-teal-700 shrink-0 mt-20 md:mt-0">
            <img
              src={myImg}
              className="w-auto h-auto rounded-full object-cover border-8 border-teal-800
              hover:scale-110 hover:shadow-[0_0_40px_#14b8a6] transition duration-500 "
              alt="Muskan profile picture"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
