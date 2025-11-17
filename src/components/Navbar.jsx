import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const hamClicked = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav
        className={`relative flex justify-between items-center px-4 py-4  lg:ml-32 lg:mr-32 rounded-full 
  transition-all duration-700 ease-in-out hover:scale-[1.03]
  shadow-[0_0_25px_rgba(20,184,166,0.7)] hover:shadow-[0_0_45px_rgba(20,184,166,1)]
  ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} 
  `} 
      >
        <h1 className="logo">MMK Logo</h1>
        <ul
          className={`md:flex md:flex-row gap-8 pl-30 ${
            isOpen ? "flex-col" : "hidden"
          }`}  /*translate-x-0 translate-x-full bottom */
        >
          <li
            className="flex
  cursor-pointer
  transition-all duration-300
  hover:text-teal-400
  hover:scale-110
"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="flex
  cursor-pointer
  transition-all duration-300
  hover:text-teal-400
  hover:scale-110
"
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className="flex
  cursor-pointer
  transition-all duration-300
  hover:text-teal-400
  hover:scale-110
"
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li
            className="flex
  cursor-pointer
  transition-all duration-300
  hover:text-teal-400
  hover:scale-110
"
          >
            <Link to="/education">Education</Link>
          </li>
          <li
            className="flex
  cursor-pointer
  transition-all duration-300
  hover:text-teal-400
  hover:scale-110
"
          >
            <Link to="/skills">Skills</Link>
          </li>
          <li
            className="flex
  cursor-pointer
  transition-all duration-300
  hover:text-teal-400
  hover:scale-110
"
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button
          onClick={toggleTheme}
          className=" flex p-2 rounded-full text-teal-600 "
        >
          {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </nav>
      <div
        onClick={hamClicked}
        className=" absolute top-15  right-18  mr-3  md:hidden flex items-center text-teal-600"
      >
        {isOpen ? (
          <RxCross2 className="text-2xl" />
        ) : (
          <GiHamburgerMenu size={25} />
        )}
      </div>
    </>
  );
};

export default Navbar;
