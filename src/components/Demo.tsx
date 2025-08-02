// File: src/App.tsx
import React, { useState } from 'react';
import Desktop from './components/Desktop';
import Terminal from './components/Terminal';
import Window from './components/Window';
import Taskbar from './components/Taskbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import { AppProvider } from './context/AppContext';

const App: React.FC = () => {
  const [openWindows, setOpenWindows] = useState<string[]>(['about']);
  const [activeWindow, setActiveWindow] = useState<string>('about');
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);

  const toggleWindow = (windowName: string) => {
    if (openWindows.includes(windowName)) {
      setOpenWindows(openWindows.filter(w => w !== windowName));
      if (activeWindow === windowName) {
        setActiveWindow(openWindows.length > 1 ? openWindows.filter(w => w !== windowName)[0] : '');
      }
    } else {
      setOpenWindows([...openWindows, windowName]);
      setActiveWindow(windowName);
    }
  };

  const activateWindow = (windowName: string) => {
    if (openWindows.includes(windowName)) {
      setActiveWindow(windowName);
    }
  };

  const renderWindowContent = (windowName: string) => {
    switch (windowName) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'terminal':
        return <Terminal />;
      case 'contact':
        return <Contact />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return null;
    }
  };

  const getWindowTitle = (windowName: string) => {
    switch (windowName) {
      case 'about':
        return 'About Me';
      case 'projects':
        return 'My Projects';
      case 'skills':
        return 'Skills & Technologies';
      case 'terminal':
        return 'Terminal';
      case 'contact':
        return 'Contact';
      case 'admin':
        return 'Admin Dashboard';
      default:
        return 'Window';
    }
  };

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
    if (!isAdminMode) {
      toggleWindow('admin');
    } else if (openWindows.includes('admin')) {
      toggleWindow('admin');
    }
  };

  return (
    <AppProvider>
      <div className="h-screen w-full bg-gray-900 text-gray-200 flex flex-col overflow-hidden">
        <Desktop>
          {openWindows.map(windowName => (
            <Window
              key={windowName}
              title={getWindowTitle(windowName)}
              isActive={activeWindow === windowName}
              onClose={() => toggleWindow(windowName)}
              onActivate={() => activateWindow(windowName)}
            >
              {renderWindowContent(windowName)}
            </Window>
          ))}
        </Desktop>
        <Taskbar 
          openWindows={openWindows} 
          activeWindow={activeWindow}
          onWindowClick={activateWindow}
          toggleWindow={toggleWindow}
          isAdminMode={isAdminMode}
          toggleAdminMode={toggleAdminMode}
        />
      </div>
    </AppProvider>
  );
};

export default App;

// File: src/context/AppContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserData {
  name: string;
  nickname: string;
  title: string;
  location: string;
  about: string;
  funFact: string;
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    tools: string[];
    cybersecurity: string[];
    os: string[];
  };
  projects: Array<{
    name: string;
    description: string;
    link: string;
  }>;
  social: {
    linkedin: string;
    github: string;
    facebook: string;
    twitter: string;
    youtube: string;
    instagram: string;
    telegram: string;
  };
}

interface AppContextType {
  userData: UserData;
  updateUserData: (newData: Partial<UserData>) => void;
}

const defaultUserData: UserData = {
  name: "Abdullah Al Sazib",
  nickname: "Jack Sparrow",
  title: "Developer, Learner, Tech Enthusiast",
  location: "Bangladesh",
  about: "Currently learning Go, DSA, Java, ReactJs, Cybersecurity, and more. Always looking to improve my coding skills and problem-solving abilities. My ultimate goal is to become proficient in ethical hacking and cybersecurity, leveraging my coding skills to create robust and secure systems.",
  funFact: "I'm a huge fan of Jack Sparrow (Johnny Depp) and love watching the Pirates of the Caribbean movies!",
  skills: {
    languages: ["C", "C++", "Go", "Java", "Bash", "Python", "JavaScript"],
    frontend: ["ReactJS"],
    backend: ["Go"],
    databases: ["MySQL"],
    tools: ["Docker", "Git", "Neovim", "VS Code", "Kali Linux"],
    cybersecurity: ["Ethical Hacking", "Penetration Testing", "OSINT"],
    os: ["Linux (Kali Linux, Ubuntu)"]
  },
  projects: [
    {
      name: "NG-17 Portfolio",
      description: "A modern portfolio built with Angular 17.",
      link: "https://github.com/abdullahalsazib/ng-17-portfolio"
    },
    {
      name: "C Modules",
      description: "A collection of C programming modules covering key topics.",
      link: "https://github.com/abdullahalsazib/C-Modules"
    },
    {
      name: "CPP Modules",
      description: "A set of C++ modules, including OOP and algorithms.",
      link: "https://github.com/abdullahalsazib/CPP-Modules"
    },
    {
      name: "E-Commerce",
      description: "A fully functional e-commerce application built with React.",
      link: "https://github.com/abdullahalsazib/e-commerce"
    }
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/abdullah-al-sazib-a79102244",
    github: "https://github.com/abdullahalsazib",
    facebook: "https://www.facebook.com/abdullahalsazib22",
    twitter: "https://x.com/AbdullahAlSazib",
    youtube: "https://www.youtube.com/@abdullah_al_sazib",
    instagram: "https://www.instagram.com/abdullah_al_sazib",
    telegram: "https://t.me/anonymousjacke"
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);

  const updateUserData = (newData: Partial<UserData>) => {
    setUserData(prevData => ({ ...prevData, ...newData }));
  };

  return (
    <AppContext.Provider value={{ userData, updateUserData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// File: src/components/Desktop.tsx
import React, { ReactNode } from 'react';

interface DesktopProps {
  children: ReactNode;
}

const Desktop: React.FC<DesktopProps> = ({ children }) => {
  return (
    <div 
      className="flex-1 relative overflow-hidden bg-cover bg-center p-2"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1618331833071-ce81bd50d300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
        backgroundSize: 'cover',
      }}
    >
      <div className="grid grid-cols-3 gap-4 p-4">
        <DesktopIcon icon="user" label="About Me" />
        <DesktopIcon icon="code" label="Projects" />
        <DesktopIcon icon="chip" label="Skills" />
        <DesktopIcon icon="terminal" label="Terminal" />
        <DesktopIcon icon="mail" label="Contact" />
        <DesktopIcon icon="github" label="GitHub" />
      </div>
      {children}
    </div>
  );
};

interface DesktopIconProps {
  icon: string;
  label: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer hover:bg-gray-800/50 p-2 rounded-md transition-colors">
      <div className="w-16 h-16 bg-gray-800/80 rounded-lg flex items-center justify-center text-xl text-yellow-400 mb-1">
        <i className={`fas fa-${icon}`}>{icon}</i>
      </div>
      <span className="text-sm font-medium bg-gray-900/70 px-2 py-1 rounded">{label}</span>
    </div>
  );
};

export default Desktop;

// File: src/components/Window.tsx
import React, { ReactNode, useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';

interface WindowProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onClose: () => void;
  onActivate: () => void;
}

const Window: React.FC<WindowProps> = ({ title, children, isActive, onClose, onActivate }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 700, height: 500 });
  const nodeRef = useRef(null);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  useEffect(() => {
    const updateSize = () => {
      if (isMaximized) {
        setWindowSize({
          width: window.innerWidth - 20,
          height: window.innerHeight - 60
        });
      } else {
        setWindowSize({ width: 700, height: 500 });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [isMaximized]);

  return (
    <Draggable
      handle=".window-header"
      disabled={isMaximized}
      bounds="parent"
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={`absolute rounded-lg shadow-2xl flex flex-col ${
          isActive ? 'z-20' : 'z-10'
        } ${isMaximized ? 'inset-1' : ''}`}
        style={{ 
          width: windowSize.width, 
          height: windowSize.height,
          backgroundColor: '#2A2E37',
          border: isActive ? '1px solid #5294e2' : '1px solid #1F2229',
          transition: 'border-color 0.2s'
        }}
        onClick={onActivate}
      >
        <div className="window-header flex items-center justify-between h-8 px-2 bg-gray-800 cursor-move rounded-t-lg">
          <div className="flex space-x-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            ></button>
            <button
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
            ></button>
            <button
              onClick={handleMaximize}
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
            ></button>
          </div>
          <div className="text-center flex-grow text-sm font-medium">{title}</div>
          <div className="w-16"></div> {/* Spacer for balance */}
        </div>
        <div className="p-4 flex-1 overflow-auto bg-gray-800/90 backdrop-blur-sm rounded-b-lg">
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;

// File: src/components/Taskbar.tsx
import React from 'react';

interface TaskbarProps {
  openWindows: string[];
  activeWindow: string;
  onWindowClick: (windowName: string) => void;
  toggleWindow: (windowName: string) => void;
  isAdminMode: boolean;
  toggleAdminMode: () => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ 
  openWindows, 
  activeWindow, 
  onWindowClick, 
  toggleWindow,
  isAdminMode,
  toggleAdminMode
}) => {
  const currentDate = new Date();
  const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDate = currentDate.toLocaleDateString([], { month: 'short', day: 'numeric' });
  
  const iconMapping: Record<string, string> = {
    about: 'user',
    projects: 'code',
    skills: 'chip',
    terminal: 'terminal',
    contact: 'envelope',
    admin: 'cog',
  };

  return (
    <div className="h-12 bg-gray-800 border-t border-gray-700 flex items-center px-4">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => toggleWindow('about')}
          className="h-8 w-8 flex items-center justify-center bg-gray-700 hover:bg-blue-600 rounded-full transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0z" clipRule="evenodd" />
          </svg>
        </button>
        
        <div className="h-6 w-px bg-gray-600"></div>
        
        <div className="flex space-x-1">
          {['about', 'projects', 'skills', 'terminal', 'contact'].map(windowName => (
            <button
              key={windowName}
              onClick={() => openWindows.includes(windowName) ? onWindowClick(windowName) : toggleWindow(windowName)}
              className={`px-3 py-1 rounded flex items-center space-x-1 transition-colors ${
                openWindows.includes(windowName)
                  ? activeWindow === windowName
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600'
                  : 'hover:bg-gray-700'
              }`}
            >
              <i className={`fas fa-${iconMapping[windowName]} text-xs`}>{iconMapping[windowName]}</i>
              <span className="text-xs font-medium capitalize">{windowName}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="ml-auto flex items-center space-x-4">
        <button 
          onClick={toggleAdminMode}
          className={`px-2 py-1 rounded-md text-xs flex items-center space-x-1 ${
            isAdminMode ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-gray-700'
          }`}
        >
          <span className="text-xs">Admin</span>
        </button>
        
        <div className="flex flex-col items-end">
          <div className="text-xs font-medium">{formattedTime}</div>
          <div className="text-xs text-gray-400">{formattedDate}</div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;

// File: src/components/About.tsx
import React from 'react';
import { useAppContext } from '../context/AppContext';

const About: React.FC = () => {
  const { userData } = useAppContext();

  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold">
              {userData.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{userData.name}</h1>
            <p className="text-gray-400">aka {userData.nickname} 🏴‍☠️</p>
            <p className="mt-2 text-yellow-400">{userData.title}</p>
            <p className="mt-4">{userData.about}</p>
            <div className="mt-4 p-3 bg-gray-800 rounded border-l-4 border-yellow-500">
              <p className="text-sm"><strong>Fun Fact:</strong> {userData.funFact}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>🎓 Currently learning Go, DSA (Data Structures & Algorithms), Java, ReactJs, Cybersecurity 🛡️, and more.</li>
          <li>🌱 Always looking to improve my coding skills and problem-solving abilities.</li>
          <li>💬 Ask me about Linux, DevOps, C++, Ethical Hacking, Cybersecurity, and Web Development.</li>
          <li>🌍 Based in {userData.location} 🇧🇩.</li>
        </ul>
      </div>
      
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Contributions & Interests</h2>
        <p>I love contributing to open-source projects and learning from the amazing developers in the community. My contributions span across:</p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="flex items-center bg-gray-800 p-3 rounded-lg">
            <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 mr-3">🛡️</div>
            <span>Cybersecurity & Ethical Hacking</span>
          </div>
          <div className="flex items-center bg-gray-800 p-3 rounded-lg">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mr-3">🌐</div>
            <span>Web Development</span>
          </div>
          <div className="flex items-center bg-gray-800 p-3 rounded-lg">
            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 mr-3">🧑‍💻</div>
            <span>Data Structures & Algorithms</span>
          </div>
          <div className="flex items-center bg-gray-800 p-3 rounded-lg">
            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mr-3">📚</div>
            <span>Programming Tutorials & Resources</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// File: src/components/Projects.tsx
import React from 'react';
import { useAppContext } from '../context/AppContext';

const Projects: React.FC = () => {
  const { userData } = useAppContext();

  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          <span className="mr-3 text-2xl">🚀</span>
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userData.projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-lg font-semibold text-blue-400">{project.name}</h3>
              <p className="mt-2 text-gray-300 text-sm">{project.description}</p>
              <div className="mt-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full inline-flex items-center"
                >
                  <span className="mr-1">GitHub</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <h2 className="text-lg font-semibold mb-4">Want to collaborate?</h2>
        <p className="text-gray-300">
          I'm always looking for new projects and collaborations. If you have an idea or want to work together,
          feel free to reach out!
        </p>
        <div className="mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// File: src/components/Skills.tsx
import React from 'react';
import { useAppContext } from '../context/AppContext';

const Skills: React.FC = () => {
  const { userData } = useAppContext();
  
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          <span className="mr-3 text-2xl">⚙️</span>
          Technologies & Tools
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory 
            title="Programming Languages" 
            icon="code" 
            items={userData.skills.languages} 
            colorClass="from-blue-500 to-purple-600"
          />
          
          <SkillCategory 
            title="Frontend" 
            icon="window-maximize" 
            items={userData.skills.frontend} 
            colorClass="from-green-500 to-teal-600"
          />
          
          <SkillCategory 
            title="Backend" 
            icon="server" 
            items={userData.skills.backend} 
            colorClass="from-yellow-500 to-orange-600"
          />
          
          <SkillCategory 
            title="Databases" 
            icon="database" 
            items={userData.skills.databases} 
            colorClass="from-cyan-500 to-blue-600"
          />
          
          <SkillCategory 
            title="Tools & Technologies" 
            icon="tools" 
            items={userData.skills.tools} 
            colorClass="from-indigo-500 to-purple-600"
          />
          
          <SkillCategory 
            title="Cybersecurity" 
            icon="shield-alt" 
            items={userData.skills.cybersecurity} 
            colorClass="from-red-500 to-pink-600"
          />
          
          <SkillCategory 
            title="Operating Systems" 
            icon="desktop" 
            items={userData.skills.os} 
            colorClass="from-gray-600 to-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: string;
  items: string[];
  colorClass: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, items, colorClass }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${colorClass} mr-3`}>
          <i className={`fas fa-${icon}`}>{icon}</i>
        </div>
        <h3 className="font-medium">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;

// File: src/components/Terminal.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/AppContext';

const Terminal: React.FC = () => {
  const { userData } = useAppContext();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory([
      `Welcome to ${userData.name}'s terminal.`,
      'Type "help" to see available commands.',
      ''
    ]);
  }, [userData.name]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
    inputRef.current?.focus();
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newHistory = [...history, `guest@portfolio:~$ ${input}`];
    const command = input.trim().toLowerCase();
    setCommandHistory([...commandHistory, input]);
    setHistoryIndex(-1);
    setInput('');

    // Process commands
    if (command === 'help') {
      newHistory.push(
        'Available commands:',
        '  help - Show this help message',
        '  about - Display information about me',
        '  skills - List my technical skills',
        '  projects - View my projects',
        '  contact - How to reach me',
        '  social - List my social media links',
        '  clear - Clear the terminal',
        ''
      );
    } else if (command === 'about') {
      newHistory.push(
        `Name: ${userData.name} (${userData.nickname})`,
        `Location: ${userData.location}`,
        `About: ${userData.about}`,
        `Fun Fact: ${userData.funFact}`,
        ''
      );
    } else if (command === 'skills') {
      newHistory.push('My Technical Skills:');
      newHistory.push('  Languages: ' + userData.skills.languages.join(', '));
      newHistory.push('  Frontend: ' + userData.skills.frontend.join(', '));
      newHistory.push('  Backend: ' + userData.skills.backend.join(', '));
      newHistory.push('  Databases: ' + userData.skills.databases.join(', '));
      newHistory.push('  Tools: ' + userData.skills.tools.join(', '));
      newHistory.push('  Cybersecurity: ' + userData.skills.cybersecurity.join(', '));
      newHistory.push('  OS: ' + userData.skills.os.join(', '));
      newHistory.push('');
    } else if (command === 'projects') {
      newHistory.push('My Projects:');
      userData.projects.forEach(project => {
        newHistory.push(`  ${project.name} - ${project.description}`);
        newHistory.push(`    Link: ${project.link}`);
      });
      newHistory.push('');
    } else if (command === 'contact') {
      newHistory.push(
        'Contact Information:',
        `  LinkedIn: ${userData.social.linkedin}`,
        `  GitHub: ${userData.social.github}`,
        `  Email: mail@example.com`,
        ''
      );
    } else if (command === 'social') {
      newHistory.push(
        'Social Media: