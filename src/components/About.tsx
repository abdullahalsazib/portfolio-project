// src/components/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Profile</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-600 p-2 rounded mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Address</div>
                  <div>Bangladesh</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 p-2 rounded mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div>contact@abdullah.dev</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 p-2 rounded mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Date of Birth</div>
                  <div>1998</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 p-2 rounded mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Alias</div>
                  <div>Jack Sparrow 🏴‍☠️</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 md:pl-6">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">
            Hi, I am Abdullah Al Sazib
          </h1>

          <p className="mb-6 text-lg">
            I'm a passionate <span className="text-green-400">developer</span>,{" "}
            <span className="text-green-400">learner</span>, and{" "}
            <span className="text-green-400">tech enthusiast</span>. I enjoy
            exploring new technologies and building cool projects that solve
            real-world problems.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-400">About Me</h2>

          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              🎓 Currently learning <span className="text-green-400">Go</span>,{" "}
              <span className="text-green-400">DSA</span>,{" "}
              <span className="text-green-400">Java</span>,{" "}
              <span className="text-green-400">ReactJs</span>,{" "}
              <span className="text-green-400">Cybersecurity</span>, and more.
            </li>
            <li>
              🌱 Always looking to improve my{" "}
              <span className="text-green-400">coding</span> skills and{" "}
              <span className="text-green-400">problem-solving</span> abilities.
            </li>
            <li>
              💬 Ask me about <span className="text-green-400">Linux</span>,{" "}
              <span className="text-green-400">DevOps</span>,{" "}
              <span className="text-green-400">C++</span>,{" "}
              <span className="text-green-400">Ethical Hacking</span>,{" "}
              <span className="text-green-400">Cybersecurity</span>, and{" "}
              <span className="text-green-400">Web Development</span>.
            </li>
            <li>
              🌍 Based in <span className="text-green-400">Bangladesh</span> 🇧🇩.
            </li>
          </ul>

          <p className="mb-6">
            My ultimate goal is to become proficient in{" "}
            <span className="text-blue-500">ethical hacking</span> and
            <span className="text-blue-500"> cybersecurity</span>, leveraging
            my coding skills to create robust and secure systems. I'm always
            eager to learn new things and contribute to open-source projects.
          </p>

          <div className="p-4 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-2">💬 Fun Fact:</h3>
            <p>
              I'm a huge fan of{" "}
              <span className="text-blue-500">Jack Sparrow</span> 🏴‍☠️ (Johnny
              Depp) and love watching the{" "}
              <span className="text-blue-500">Pirates of the Caribbean</span>{" "}
              movies! 🎬
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;