// src/App.tsx
import React, { useState } from "react";
import Terminal from "./components/Terminal";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = () => {
  const [activeWindow, setActiveWindow] = useState<string>("terminal");

  return (
    <div className="bg-gray-900 text-gray-200 font-mono">
      {/* Top Bar */}
      <div className="bg-gray-800 p-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex mx-auto space-x-4">
          <button
            className={`px-4 py-1 rounded ${
              activeWindow === "terminal"
                ? "bg-gray-700"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setActiveWindow("terminal")}
          >
            Terminal
          </button>
          <button
            className={`px-4 py-1 rounded ${
              activeWindow === "about"
                ? "bg-gray-700"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setActiveWindow("about")}
          >
            About
          </button>
          <button
            className={`px-4 py-1 rounded ${
              activeWindow === "skills"
                ? "bg-gray-700"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setActiveWindow("skills")}
          >
            Skills
          </button>
          <button
            className={`px-4 py-1 rounded ${
              activeWindow === "projects"
                ? "bg-gray-700"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setActiveWindow("projects")}
          >
            Projects
          </button>
          <button
            className={`px-4 py-1 rounded ${
              activeWindow === "contact"
                ? "bg-gray-700"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setActiveWindow("contact")}
          >
            Contact
          </button>
        </div>
        <a
          href="/cv.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition"
        >
          Download CV
        </a>
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
