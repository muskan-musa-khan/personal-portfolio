import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`flex justify-between px-4 py-4  ml-32 mr-32 rounded-full
  transition-all duration-700 ease-in-out hover:scale-[1.03]
  shadow-[0_0_25px_rgba(20,184,166,0.7)] hover:shadow-[0_0_45px_rgba(20,184,166,1)]
  ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}
  `}
    >
      <h1 className="logo">MMK Logo</h1>
      <ul className="flex gap-8 pl-30 ">
        <li
          className="
  cursor-pointer
  transition-all duration-300
  hover:text-teal-400
  hover:scale-110
"
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className="
  cursor-pointer
  transition-all duration-300
  hover:text-teal-400
  hover:scale-110
"
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className="
  cursor-pointer
  transition-all duration-300
  hover:text-teal-400
  hover:scale-110
"
        >
          <Link to="/projects">Projects</Link>
        </li>
        <li
          className="
  cursor-pointer
  transition-all duration-300
  hover:text-teal-400
  hover:scale-110
"
        >
          <Link to="/education">Education</Link>
        </li>
        <li
          className="
  cursor-pointer
  transition-all duration-300
  hover:text-teal-400
  hover:scale-110
"
        >
          <Link to="/skills">Skills</Link>
        </li>
        <li
          className="
  cursor-pointer
  transition-all duration-300
  hover:text-teal-400
  hover:scale-110
"
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button onClick={toggleTheme} className="p-2 rounded-full text-teal-800">
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
