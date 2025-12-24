import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import { ThemeContext } from "./context/ThemeContext";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-absolute overflow-hidden w-screen 
        ${
          theme === "dark" ? "bg-black dark:text-white " : "bg-white text-black"
        }
       `}
    >
      <Navbar />
      <ToastContainer />
      <Home />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
