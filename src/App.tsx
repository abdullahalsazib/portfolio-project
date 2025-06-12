import React, { useState } from "react";
import Terminal from "./components/Terminal";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FullScreenToggle from "./components/Fullscreen";
import { BiMenu, BiX } from "react-icons/bi";

const App: React.FC = () => {
  const [activeWindow, setActiveWindow] = useState<string>("terminal");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 font-mono">
      {/* Top Bar */}
      <div className="bg-gray-800 p-2 flex items-center justify-between">
        {/* Left Side: Mac-style buttons */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {/* Fullscreen Toggle (Center) */}
        <FullScreenToggle />

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
        </button>

        {/* Navbar Links */}
        <div
          className={`absolute md:static top-12 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 md:flex md:space-x-4 transition-all duration-300 ${
            menuOpen ? "block" : "hidden md:block"
          }`}
        >
          {["terminal", "about", "skills", "projects", "contact"].map(
            (item) => (
              <button
                key={item}
                className={`block cursor-pointer w-full md:w-auto px-4 py-2 md:py-1 rounded text-center ${
                  activeWindow === item
                    ? "bg-gray-700"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
                onClick={() => {
                  setActiveWindow(item);
                  setMenuOpen(false);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            )
          )}
          {/* Download CV Button */}
          <a
            href="/cv.pdf"
            download
            className=" text-[#fff] text-center md:inline-block bg-blue-400 hover:bg-blue-700 px-4 py-2 rounded transition"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {activeWindow === "terminal" && <Terminal />}
        {activeWindow === "about" && <About />}
        {activeWindow === "skills" && <Skills />}
        {activeWindow === "projects" && <Projects />}
        {activeWindow === "contact" && <Contact />}
      </div>
    </div>
  );
};

export default App;
