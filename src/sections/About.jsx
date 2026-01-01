import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import whiteGirl from "../assets/whiteformalgirl.png";
import blackSuit from "../assets/blacksuit.png";

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
      <div className="flex flex-col xl:flex-row  md:mt-5 lg:gap-20  ">
        <div className=" flex flex-col items-center  ">
          <div>
            {theme === "dark" ? (
              <img
                src={whiteGirl}
                alt="White formals wearing girl"
                className="h-[400px] w-[400px] object-contain lg:pl-6 lg:pt-14 pl-4 pt-[100px]"
              />
            ) : (
              <img
                src={blackSuit}
                alt="black formals wearing girl"
                className="h-[400px] w-[400px] object-contain lg:pl-6 lg:pt-14 pl-4 pt-[100px]"
              />
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <div className="   px-2 w-40 h-36 rounded-lg items-center py-5 text-center  bg-linear-to-r from-teal-600 via-black to-white">
              <h1 className="text-5xl text-white ">10+</h1>
              <p className="text-sm mt-2 text-white">
                Projects <br />
                Completed
              </p>
            </div>
            <div className="   px-2 w-40 h-36 rounded-lg items-center py-5 text-center bg-linear-to-r from-teal-600 via-black to-white">
              <h1 className="text-5xl text-white">6+</h1>
              <p className="text-sm mt-2 text-white">
                Months of <br />
                Experience
              </p>
            </div>
            <div
              className=" px-2 w-40 h-36 rounded-lg items-center py-5 text-center   bg-linear-to-r from-teal-600 via-black to-white
"
            >
              <h1 className="text-5xl text-white">2+</h1>
              <p className="text-sm mt-2 text-white">
                Happy <br />
                Clients
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 text-center xl:text-left">
          <h2 className="text-4xl pt-10 font-semibold ">
            How I Like To Spend My Time?
          </h2>
          <br /> <br />
          <p className="text-xl leading-loose font-normal xl:text-left xl:text-lg xl:leading-relaxed 2xl:text-xl 2xl:leading-loose ">
            I'm a CS grad who enjoys building full-stack web apps and making
            sense of the data behind them. I mainly work with React, Next.js,
            JavaScript, Tailwind CSS, and HTML to build clean, responsive
            interfaces that feel simple and easy to use. On the backend and data
            side, I work with SQL databases, writing joins, filters, and
            aggregations, and connect apps to REST APIs to handle real data
            instead of just static pages. <br />I've also built Power BI dashboards
            where I clean data, create calculated fields, and design reports for
            sales, profit, categories, and state-wise performance so numbers
            tell a story. I like taking a project from UI to API to database,
            making sure everything works together properly. I keep my code
            readable, avoid over-complicating things, and enjoy improving apps
            based on real usage and feedback. I'm always learning new tools, but
            mostly focus on building stuff that works well, loads fast, and
            makes sense to users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
