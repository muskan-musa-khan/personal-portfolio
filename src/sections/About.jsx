import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id={"about"} className=" min-h-screen p-5 lg:px-32 ">
      <h1 className="text-5xl font-bold  pt-10 md:pt-0 lg:pt-15 text-center ">
        <span className="">About </span>
        <span
          className="text-teal-600  [text-stroke:2px_#14b8a6]
               [text-shadow:0_0_20px_#14b8a6] hover:[text-shadow:0_0_25px_#14b8a6] transition-all duration-300"
        >
          Me
        </span>
        <hr className="w-20 border-t-4  mt-4 mx-auto" />
      </h1>
      <div className="flex flex-col lg:flex-row  md:mt-5 lg:gap-20 ">
        <div className=" flex flex-col items-center  ">
          <div>
            {theme === "dark" ? (
              <img
                src="./src/assets/whitesuitimg.png"
                alt=""
                className="lg:h-100 lg:w-100 object-contain lg:pl-6 "
              />
            ) : (
              <img
                src="./src/assets/blacksuitimg.png"
                alt=""
                className="h-100 w-100 object-contain lg:pl-6"
              />
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <div className=" text-white border-3  px-2 w-32 h-30 rounded-lg items-center py-2 text-center  bg-linear-to-r from-teal-600 via-black to-white">
              <h1 className="text-5xl ">10+</h1>
              <p className="text-sm mt-2">
                Projects <br />
                Completed
              </p>
            </div>
            <div className="text-white border-3  px-2 w-32 h-30 rounded-lg items-center py-2 text-center bg-linear-to-r from-teal-600 via-black to-white">
              <h1 className="text-5xl">1+</h1>
              <p className="text-sm mt-2">
                Years <br />
                Experience
              </p>
            </div>
            <div
              className="text-white border-3 px-2 w-32 h-30 rounded-lg items-center py-2 text-center   bg-linear-to-r from-teal-600 via-black to-white
"
            >
              <h1 className="text-5xl">7+</h1>
              <p className="text-sm mt-2">
                Happy <br />
                Clients
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left  ">
          <h2 className="text-4xl pt-10 font-semibold">
            Passionate Front-End Developer
          </h2>
          <br /> <br />
          <p className="text-xl leading-relaxed font-normal lg:text-left">
            I am a Computer Science graduate with a strong passion for front-end
            web development and creating intuitive, user-centered digital
            experiences. I specialize in building modern, responsive interfaces
            using React, Next.js, Tailwind CSS, HTML, JavaScript, and UI/UX
            design principles, with a focus on performance, accessibility, and
            clean design. <br />I enjoy transforming design concepts into functional
            and visually engaging applications while writing clean,
            maintainable, and scalable code. Alongside front-end development, I
            have a working knowledge of SQL and database concepts, and I
            continuously explore modern front-end technologies and best
            practices to build seamless, interactive, and accessible
            applications that deliver meaningful user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
