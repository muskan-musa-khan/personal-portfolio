import React, { useContext, useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import logo2 from "../assets/logo2.png";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  //  Active link state
  const [active, setActive] = useState("home");
  useEffect(() => {
  const sections = [
    "about",
    "home",
    "projects",
    "education",
    "skills",
    "contact",
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-50% 0px -50% 0px", // triggers when section is centered
      threshold: 0, 
    }
  );

  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, []);


  const menuItemClass = (id) =>
    `cursor-pointer transition-all duration-300 hover:text-teal-400 hover:scale-110 
     ${active === id ? "text-teal-500 font-bold" : ""}`;

  return (
    <>
      <nav
        className={`fixed flex flex-col md:flex-row min-h-[60px] inset-x-0 md:inset-x-10 top-0 
        justify-between items-center  lg:px-10 md:rounded-full z-50  transition-all duration-700 ease-in-out hover:scale-[1.03] overflow-hidden
        shadow-[0_0_25px_rgba(20,184,166,0.7)] hover:shadow-[0_0_45px_rgba(20,184,166,1)] 
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}
        
        `}
      >
        <div className="flex flex-row items-center justify-around w-full md:w-auto">
          <img
            src={logo2}
            alt="logo"
            className="h-16 w-20 object-contain mr-30 sm:mr-0"
          />

          {!isOpen && (
            <button
              className="md:hidden text-3xl text-teal-600  "
              onClick={() => setIsOpen(true)}
            >
              <GiHamburgerMenu />
            </button>
          )}

          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden text-3xl text-teal-600"
            >
              <RxCross2 />
            </button>
          )}
        </div>

        <ul
          className={`${
            isOpen
              ? "flex opacity-100 max-h-96"
              : "flex opacity-0 max-h-0 pointer-events-none"
          }
  md:flex md:opacity-100 md:max-h-none md:pointer-events-auto
  flex-col md:flex-row gap-10 items-center
  w-full md:w-auto px-10
  overflow-hidden transition-all duration-300 ease-in-out`}
        >
          {/* HOME */}
          <li className={`${menuItemClass("home")}`}>
            <button
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth" });
                setActive("home");
                setIsOpen(false);
              }}
            >
              Home
            </button>
          </li>

          {/* ABOUT */}
          <li className={menuItemClass("about")}>
            <button
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
                setActive("about");
                setIsOpen(false);
              }}
            >
              About
            </button>
          </li>

          {/* PROJECTS */}
          <li className={menuItemClass("projects")}>
            <button
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
                setActive("projects");
                setIsOpen(false);
              }}
            >
              Projects
            </button>
          </li>

          {/* EDUCATION */}
          <li className={menuItemClass("education")}>
            <button
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById("education")
                  .scrollIntoView({ behavior: "smooth" });
                setActive("education");
                setIsOpen(false);
              }}
            >
              Education
            </button>
          </li>

          {/* SKILLS */}
          <li className={menuItemClass("skills")}>
            <button
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById("skills")
                  .scrollIntoView({ behavior: "smooth" });
                setActive("skills");
                setIsOpen(false);
              }}
            >
              Skills
            </button>
          </li>

          {/* CONTACT */}
          <li className={menuItemClass("contact")}>
            <button
              className="cursor-pointer pb-8 md:pb-0"
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
                setActive("contact");
                setIsOpen(false);
              }}
            >
              Contact
            </button>
          </li>
        </ul>

        <button
          onClick={toggleTheme}
          className="rounded-full text-teal-600 flex-row hidden md:block cursor-pointer md:pr-6
"
        >
          {theme === "dark" ? <MdSunny size={18} /> : <FaMoon size={18} />}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"></div>
      )}
    </>
  );
};

export default Navbar;
