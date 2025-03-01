// src/components/Projects.tsx
import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tech,
  github,
  image,
}) => {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="h-48 bg-gray-600 flex items-center justify-center">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-blue-400">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 bg-gray-800 rounded-md text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 hover:bg-gray-900 text-blue-400 font-bold py-2 px-4 rounded transition"
        >
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub Repository
          </div>
        </a>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "NG-17 Portfolio",
      description:
        "A modern portfolio website built with Angular 17 featuring responsive design and animations.",
      tech: ["Angular", "TypeScript", "CSS", "HTML"],
      github: "https://github.com/abdullahalsazib/ng-17-portfolio",
      image: "https://i.ibb.co.com/ZpXz7HSJ/image.png",
    },
    {
      title: "C Modules",
      description:
        "A comprehensive collection of C programming modules covering key topics and algorithms.",
      tech: ["C", "Data Structures", "Algorithms"],
      github: "https://github.com/abdullahalsazib/C-Modules",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSrEQ1Lab7lq6sh17bSTjtVAWAeY-Y8hSV3A&s",
    },
    {
      title: "CPP Modules",
      description:
        "A set of C++ modules including object-oriented programming concepts and algorithms.",
      tech: ["C++", "OOP", "Data Structures"],
      github: "https://github.com/abdullahalsazib/CPP-Modules",
      image:
        "https://cdn.hackr.io/uploads/posts/large/1604990363AtwCbeT3ma.png",
    },
    {
      title: "E-Commerce Application",
      description:
        "A fully functional e-commerce application with product listings, cart functionality, and checkout.",
      tech: ["React", "JavaScript", "CSS", "API Integration"],
      github: "https://github.com/abdullahalsazib/e-commerce",
      image: "https://i.ibb.co.com/S4ZrrfGY/image.png",
    },
    {
      title: "E-Commerce Application - Reat (TSX)",
      description:
        "A fully functional e-commerce application with product listings, cart functionality, and checkout.",
      tech: ["React", "TypeScript", "Tailwindcss", "API Integration", "GoLang"],
      github: "https://github.com/abdullahalsazib/e-com-fontend-reactTsx",
      image: "https://i.ibb.co.com/zWvScn4h/image.png",
    },
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg overflow-y-auto max-h-[80vh]">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">📝 My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="mt-10 p-6 bg-gray-700 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-yellow-500">
          Other Contributions
        </h3>
        <p className="mb-4">
          I love contributing to open-source projects and learning from the
          amazing developers in the community. You can find my contributions in
          various repositories related to:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Cybersecurity & Ethical Hacking 🛡️</li>
          <li>Web Development 🌐</li>
          <li>Data Structures & Algorithms 🧑‍💻</li>
          <li>Programming Tutorials & Learning Resources 📚</li>
        </ul>
        <div className="mt-6">
          <a
            href="https://github.com/abdullahalsazib"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 hover:bg-gray-900 text-blue-400 font-bold py-2 px-4 rounded transition"
          >
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View All Repositories
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
