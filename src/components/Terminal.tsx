// src/components/Terminal.tsx
import  { useState, useEffect, useRef } from "react";

const Terminal: React.FC = () => {
  const [command, setCommand] = useState<string>("");
  const [output, setOutput] = useState<Array<{ type: string; text: string }>>([
    {
      type: "system",
      text: "░█████╗░██████╗░██████╗░██╗░░░██╗██╗░░░░░██╗░░░░░░█████╗░██╗░░██╗",
    },
    {
      type: "system",
      text: "██╔══██╗██╔══██╗██╔══██╗██║░░░██║██║░░░░░██║░░░░░██╔══██╗██║░░██║",
    },
    {
      type: "system",
      text: "███████║██████╦╝██║░░██║██║░░░██║██║░░░░░██║░░░░░███████║███████║",
    },
    {
      type: "system",
      text: "██╔══██║██╔══██╗██║░░██║██║░░░██║██║░░░░░██║░░░░░██╔══██║██╔══██║",
    },
    {
      type: "system",
      text: "██║░░██║██████╦╝██████╔╝╚██████╔╝███████╗███████╗██║░░██║██║░░██║",
    },
    {
      type: "system",
      text: "╚═╝░░╚═╝╚═════╝░╚═════╝░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝",
    },
    { type: "system", text: "" },
    {
      type: "system",
      text: 'Welcome to Abdullah Al Sazib\'s terminal portfolio! Type "help" to see available commands.',
    },
    { type: "system", text: "OS: KaliUbuntu Terminal v1.0" },
    { type: "system", text: "" },
  ]);
  const endOfOutputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endOfOutputRef.current) {
      endOfOutputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [output]);

  const processCommand = (cmd: string) => {
    setOutput([
      ...output,
      { type: "command", text: `visitor@abdullah:~$ ${cmd}` },
    ]);

    const lowerCmd = cmd.toLowerCase().trim();

    switch (lowerCmd) {
      case "help":
        setOutput((prev) => [
          ...prev,
          { type: "response", text: "Available commands:" },
          { type: "response", text: "- about: Show information about me" },
          { type: "response", text: "- skills: List my technical skills" },
          { type: "response", text: "- projects: View my projects" },
          { type: "response", text: "- contact: Get my contact information" },
          { type: "response", text: "- clear: Clear the terminal" },
          { type: "response", text: "- fun: Tell me a fun fact" },
          { type: "response", text: "" },
        ]);
        break;
      case "about":
        setOutput((prev) => [
          ...prev,
          {
            type: "response",
            text: "Hey there! 👋 I'm Abdullah Al Sazib, also known as Jack Sparrow 🏴‍☠️",
          },
          {
            type: "response",
            text: "I'm a passionate developer 💻, learner 📚, and tech enthusiast ⚙️ from Bangladesh 🇧🇩",
          },
          {
            type: "response",
            text: "Currently focusing on Go, DSA, Java, ReactJs, and Cybersecurity 🛡️",
          },
          {
            type: "response",
            text: "My goal is to become proficient in ethical hacking and cybersecurity",
          },
          { type: "response", text: "" },
        ]);
        break;
      case "skills":
        setOutput((prev) => [
          ...prev,
          { type: "response", text: "🚀 Technical Skills:" },
          {
            type: "response",
            text: "- Languages: C, C++, Go, Java, Bash, Python, JavaScript (ReactJs)",
          },
          { type: "response", text: "- Frontend: ReactJS" },
          { type: "response", text: "- Backend: Go" },
          { type: "response", text: "- Databases: MySQL" },
          {
            type: "response",
            text: "- Tools & Technologies: Docker, Git, Neovim, VS Code, Kali Linux",
          },
          {
            type: "response",
            text: "- Cybersecurity: Ethical Hacking, Penetration Testing, OSINT",
          },
          {
            type: "response",
            text: "- Operating Systems: Linux (Kali Linux, Ubuntu)",
          },
          { type: "response", text: "" },
        ]);
        break;
      case "projects":
        setOutput((prev) => [
          ...prev,
          { type: "response", text: "📝 My Projects:" },
          {
            type: "response",
            text: "1. NG-17 Portfolio: A modern portfolio built with Angular 17",
          },
          {
            type: "response",
            text: "   Link: https://github.com/abdullahalsazib/ng-17-portfolio",
          },
          {
            type: "response",
            text: "2. C Modules: A collection of C programming modules covering key topics",
          },
          {
            type: "response",
            text: "   Link: https://github.com/abdullahalsazib/C-Modules",
          },
          {
            type: "response",
            text: "3. CPP Modules: A set of C++ modules, including OOP and algorithms",
          },
          {
            type: "response",
            text: "   Link: https://github.com/abdullahalsazib/CPP-Modules",
          },
          {
            type: "response",
            text: "4. E-Commerce: A fully functional e-commerce application built with React",
          },
          {
            type: "response",
            text: "   Link: https://github.com/abdullahalsazib/e-commerce",
          },
          { type: "response", text: "" },
        ]);
        break;
      case "contact":
        setOutput((prev) => [
          ...prev,
          { type: "response", text: "📫 Contact Information:" },
          {
            type: "response",
            text: "- LinkedIn: @abdullahalsazib (https://www.linkedin.com/in/abdullah-al-sazib-a79102244)",
          },
          {
            type: "response",
            text: "- Facebook: @abdullahalsazib22 (https://www.facebook.com/abdullahalsazib22)",
          },
          {
            type: "response",
            text: "- Twitter: @AbdullahAlSazib (https://x.com/AbdullahAlSazib)",
          },
          {
            type: "response",
            text: "- YouTube: @abdullah_al_sazib (https://www.youtube.com/@abdullah_al_sazib)",
          },
          {
            type: "response",
            text: "- Telegram: @anonymousjacke (https://t.me/anonymousjacke)",
          },
          {
            type: "response",
            text: "- Instagram: @abdullah_al_sazib (https://www.instagram.com/abdullah_al_sazib)",
          },
          { type: "response", text: "" },
        ]);
        break;
      case "clear":
        setOutput([]);
        break;
      case "fun":
        setOutput((prev) => [
          ...prev,
          {
            type: "response",
            text: "🏴‍☠️ Fun Fact: I'm a huge fan of Jack Sparrow (Johnny Depp) and love watching the Pirates of the Caribbean movies! 🎬",
          },
          { type: "response", text: "" },
        ]);
        break;
      default:
        setOutput((prev) => [
          ...prev,
          { type: "response", text: `Command not found: ${cmd}` },
          { type: "response", text: 'Type "help" to see available commands.' },
          { type: "response", text: "" },
        ]);
    }

    setCommand("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      processCommand(command);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 h-[80vh] overflow-y-auto">
      {output.map((item, index) => (
        <div
          key={index}
          className={`${
            item.type === "command"
              ? "text-green-400"
              : item.type === "system"
              ? "text-blue-400"
              : "text-gray-300"
          } whitespace-pre-wrap`}
        >
          {item.text}
        </div>
      ))}

      <div className="flex mt-2">
        <span className="text-green-400">visitor@abdullah:~$</span>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow bg-transparent text-white outline-none ml-2"
          autoFocus
        />
      </div>
      <div ref={endOfOutputRef} />
    </div>
  );
};

export default Terminal;