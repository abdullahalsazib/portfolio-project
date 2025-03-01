// src/components/Skills.tsx
import React from "react";

const SkillBar: React.FC<{ name: string; level: number; color: string }> = ({
  name,
  level,
  color,
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className={`${color} h-2.5 rounded-full`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">
        🚀 Technologies & Tools
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-500">
            Programming Languages
          </h3>
          <SkillBar name="C++" level={90} color="bg-blue-600" />
          <SkillBar name="Go" level={85} color="bg-blue-500" />
          <SkillBar name="JavaScript" level={80} color="bg-yellow-500" />
          <SkillBar name="Python" level={75} color="bg-green-500" />
          <SkillBar name="Java" level={70} color="bg-red-500" />
          <SkillBar name="Bash" level={85} color="bg-purple-500" />

          <h3 className="text-xl font-bold mb-4 mt-8 text-yellow-500">
            Frontend
          </h3>
          <SkillBar name="ReactJS" level={85} color="bg-blue-400" />
          <SkillBar name="HTML5" level={95} color="bg-orange-500" />
          <SkillBar name="CSS3" level={90} color="bg-blue-500" />
          <SkillBar name="TypeScript" level={75} color="bg-blue-600" />
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-500">
            DevOps & Tools
          </h3>
          <SkillBar name="Docker" level={80} color="bg-blue-500" />
          <SkillBar name="Git" level={90} color="bg-red-500" />
          <SkillBar name="Neovim" level={85} color="bg-green-500" />
          <SkillBar name="VS Code" level={95} color="bg-blue-600" />

          <h3 className="text-xl font-bold mb-4 mt-8 text-yellow-500">
            Cybersecurity
          </h3>
          <SkillBar name="Ethical Hacking" level={80} color="bg-green-600" />
          <SkillBar name="Penetration Testing" level={75} color="bg-red-600" />
          <SkillBar name="OSINT" level={85} color="bg-blue-500" />
          <SkillBar name="Kali Linux" level={90} color="bg-purple-600" />

          <h3 className="text-xl font-bold mb-4 mt-8 text-yellow-500">
            Backend & Databases
          </h3>
          <SkillBar name="Go Backend" level={80} color="bg-blue-500" />
          <SkillBar name="MySQL" level={85} color="bg-orange-500" />
        </div>
      </div>

      <h3 className="text-xl font-bold mt-10 mb-4 text-yellow-500">
        Technologies
      </h3>
      <div className="flex flex-wrap gap-3">
        {[
          "C",
          "C++",
          "Go",
          "Java",
          "Bash",
          "Python",
          "JavaScript",
          "ReactJS",
          "Docker",
          "Git",
          "Neovim",
          "VS Code",
          "Kali Linux",
          "MySQL",
          "Linux",
          "Ubuntu",
          "Ethical Hacking",
          "Penetration Testing",
          "OSINT",
          "HTML5",
          "CSS3",
          "TypeScript",
        ].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-700 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
