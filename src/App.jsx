import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen overflow-hidden w-screen  pt-10
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
