import { useState, useEffect, useRef } from "react";

// Banner collection
const banners = {
  default: [
    "░█████╗░██████╗░██████╗░██╗░░░██╗██╗░░░░░██╗░░░░░░█████╗░██╗░░██╗",
    "██╔══██╗██╔══██╗██╔══██╗██║░░░██║██║░░░░░██║░░░░░██╔══██╗██║░░██║",
    "███████║██████╦╝██║░░██║██║░░░██║██║░░░░░██║░░░░░███████║███████║",
    "██╔══██║██╔══██╗██║░░██║██║░░░██║██║░░░░░██║░░░░░██╔══██║██╔══██║",
    "██║░░██║██████╦╝██████╔╝╚██████╔╝███████╗███████╗██║░░██║██║░░██║",
    "╚═╝░░╚═╝╚═════╝░╚═════╝░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝",
  ],
  boxed: [
    "╔══════════════════════════════════════════════════════════════════════╗",
    "║ ░█████╗░██████╗░██████╗░██╗░░░██╗██╗░░░░░██╗░░░░░░█████╗░██╗░░██╗  ║",
    "║ ██╔══██╗██╔══██╗██╔══██╗██║░░░██║██║░░░░░██║░░░░░██╔══██╗██║░░██║  ║",
    "║ ███████║██████╦╝██║░░██║██║░░░██║██║░░░░░██║░░░░░███████║███████║  ║",
    "║ ██╔══██║██╔══██╗██║░░██║██║░░░██║██║░░░░░██║░░░░░██╔══██║██╔══██║  ║",
    "║ ██║░░██║██████╦╝██████╔╝╚██████╔╝███████╗███████╗██║░░██║██║░░██║  ║",
    "║ ╚═╝░░╚═╝╚═════╝░╚═════╝░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝  ║",
    "╚══════════════════════════════════════════════════════════════════════╝",
  ],
  kali: [
    "██╗  ██╗ █████╗ ██╗     ██╗    ██╗     ██╗███╗   ██╗██╗   ██╗██╗  ██╗",
    "██║ ██╔╝██╔══██╗██║     ██║    ██║     ██║████╗  ██║██║   ██║╚██╗██╔╝",
    "█████╔╝ ███████║██║     ██║    ██║     ██║██╔██╗ ██║██║   ██║ ╚███╔╝ ",
    "██╔═██╗ ██╔══██║██║     ██║    ██║     ██║██║╚██╗██║██║   ██║ ██╔██╗ ",
    "██║  ██╗██║  ██║███████╗██║    ███████╗██║██║ ╚████║╚██████╔╝██╔╝ ██╗",
    "╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝    ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝",
  ],
  debian: [
    "  ______           _     _                 ",
    " |  ____|         | |   (_)                ",
    " | |__   _ __   __| |___ _  __ _ _ __      ",
    " |  __| | '_ \\ / _` / __| |/ _` | '_ \\     ",
    " | |____| | | | (_| \\__ \\ | (_| | | | |    ",
    " |______|_| |_|\\__,_|___/_|\\__,_|_| |_|    ",
    "          ____            _                ",
    "         |  _ \\          | |               ",
    "         | |_) | __ _ ___| |__   ___  ___  ",
    "         |  _ < / _` / __| '_ \\ / _ \\/ __| ",
    "         | |_) | (_| \\__ \\ | | | (_) \\__ \\ ",
    "         |____/ \\__,_|___/_| |_|\\___/|___/ ",
  ],
  ubuntu: [
    "         _   _ _                 _         ",
    "        | | | | |__  _   _ _ __ | |_ _   _ ",
    "        | | | | '_ \\| | | | '_ \\| __| | | |",
    "        | |_| | |_) | |_| | | | | |_| |_| |",
    "         \\___/|_.__/ \\__,_|_| |_|\\__|\\__,_|",
    "                                           ",
  ],
  hacker: [
    " ██░ ██  ▄▄▄       ▄████▄   ██ ▄█▀▓█████  ██▀███  ",
    "▓██░ ██▒▒████▄    ▒██▀ ▀█   ██▄█▒ ▓█   ▀ ▓██ ▒ ██▒",
    "▒██▀▀██░▒██  ▀█▄  ▒▓█    ▄ ▓███▄░ ▒███   ▓██ ░▄█ ▒",
    "░▓█ ░██ ░██▄▄▄▄██ ▒▓▓▄ ▄██▒▓██ █▄ ▒▓█  ▄ ▒██▀▀█▄  ",
    "░▓█▒░██▓ ▓█   ▓██▒▒ ▓███▀ ░▒██▒ █▄░▒████▒░██▓ ▒██▒",
    " ▒ ░░▒░▒ ▒▒   ▓▒█░░ ░▒ ▒  ░▒ ▒▒ ▓▒░░ ▒░ ░░ ▒▓ ░▒▓░",
    " ▒ ░▒░ ░  ▒   ▒▒ ░  ░  ▒   ░ ░▒ ▒░ ░ ░  ░  ░▒ ░ ▒░",
    " ░  ░░ ░  ░   ▒   ░        ░ ░░ ░    ░     ░░   ░ ",
    " ░  ░  ░      ░  ░░ ░      ░  ░      ░  ░   ░     ",
    "                  ░                               ",
  ],
};

// OS themes
const osThemes = {
  default: "KaliUbuntu Terminal v1.0",
  kali: "Kali Linux Terminal v2023.3",
  debian: "Debian GNU/Linux 12 (bookworm)",
  ubuntu: "Ubuntu 24.04 LTS (Noble Numbat)",
  hacker: "H4CK3R OS v3.1337",
  boxed: "KaliUbuntu Terminal v1.0 [Boxed Edition]",
};

// Animation colors for default banner
const bannerColors = [
  "text-blue-400", // Default blue
  "text-green-400", // Green
  "text-red-400", // Red
  "text-purple-400", // Purple
  "text-yellow-400", // Yellow
  "text-cyan-400", // Cyan
  "text-pink-400", // Pink
];

const Terminal: React.FC = () => {
  const [command, setCommand] = useState<string>("");
  const [currentBanner, setCurrentBanner] = useState<string>("default");
  const [currentOs, setCurrentOs] = useState<string>("default");
  const [output, setOutput] = useState<
    Array<{ type: string; text: string; color?: string }>
  >([]);
  const [colorIndex, setColorIndex] = useState<number>(0);
  const [animationEnabled, setAnimationEnabled] = useState<boolean>(true);
  const endOfOutputRef = useRef<HTMLDivElement>(null);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize terminal with default banner
  useEffect(() => {
    initializeTerminal();

    // Start animation if default banner is selected
    if (currentBanner === "default" && animationEnabled) {
      startBannerAnimation();
    }

    return () => {
      if (animationTimerRef.current) {
        clearInterval(animationTimerRef.current);
      }
    };
  }, []);

  // Handle banner animation
  useEffect(() => {
    if (currentBanner === "default" && animationEnabled) {
      startBannerAnimation();
    } else {
      if (animationTimerRef.current) {
        clearInterval(animationTimerRef.current);
        animationTimerRef.current = null;
      }
    }

    return () => {
      if (animationTimerRef.current) {
        clearInterval(animationTimerRef.current);
      }
    };
  }, [currentBanner, animationEnabled]);

  // Scroll to bottom when output changes
  useEffect(() => {
    if (endOfOutputRef.current) {
      endOfOutputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [output]);

  const initializeTerminal = () => {
    const initialOutput: Array<{ type: string; text: string; color?: string }> =
      [];

    // Add banner
    banners[currentBanner].forEach((line) => {
      initialOutput.push({
        type: "system",
        text: line,
        color: currentBanner === "default" ? bannerColors[0] : undefined,
      });
    });

    // Add welcome message
    initialOutput.push({ type: "system", text: "" });
    initialOutput.push({
      type: "system",
      text: 'Welcome to Abdullah Al Sazib\'s terminal portfolio! Type "help" to see available commands.',
    });
    initialOutput.push({ type: "system", text: `OS: ${osThemes[currentOs]}` });
    initialOutput.push({ type: "system", text: "" });

    setOutput(initialOutput);
  };

  const startBannerAnimation = () => {
    // Clear any existing animation
    if (animationTimerRef.current) {
      clearInterval(animationTimerRef.current);
    }

    // Start a new animation
    animationTimerRef.current = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % bannerColors.length);

      setOutput((prev) => {
        const newOutput = [...prev];
        const bannerLines = banners.default.length;

        // Only update the banner lines
        for (let i = 0; i < bannerLines; i++) {
          if (newOutput[i] && newOutput[i].type === "system") {
            newOutput[i] = {
              ...newOutput[i],
              color: bannerColors[(colorIndex + 1) % bannerColors.length],
            };
          }
        }

        return newOutput;
      });
    }, 700); // Change color every 700ms
  };

  const changeBanner = (bannerName: string) => {
    if (!banners[bannerName]) {
      return `Banner "${bannerName}" not found.`;
    }

    // Stop animation if it's running
    if (animationTimerRef.current) {
      clearInterval(animationTimerRef.current);
      animationTimerRef.current = null;
    }

    setCurrentBanner(bannerName);
    setCurrentOs(bannerName);

    const newOutput: Array<{ type: string; text: string; color?: string }> = [];

    // Add new banner
    banners[bannerName].forEach((line) => {
      newOutput.push({
        type: "system",
        text: line,
        color:
          bannerName === "default" && animationEnabled
            ? bannerColors[0]
            : undefined,
      });
    });

    // Add welcome message
    newOutput.push({ type: "system", text: "" });
    newOutput.push({
      type: "system",
      text: 'Welcome to Abdullah Al Sazib\'s terminal portfolio! Type "help" to see available commands.',
    });
    newOutput.push({ type: "system", text: `OS: ${osThemes[bannerName]}` });
    newOutput.push({ type: "system", text: "" });

    setOutput(newOutput);

    // Start animation if default banner is selected
    if (bannerName === "default" && animationEnabled) {
      startBannerAnimation();
    }

    return `Banner changed to "${bannerName}"${
      bannerName === "default" && animationEnabled ? " with animation" : ""
    }.`;
  };

  const toggleAnimation = () => {
    setAnimationEnabled(!animationEnabled);

    if (!animationEnabled && currentBanner === "default") {
      // Animation being turned on
      startBannerAnimation();
      return "Banner animation enabled.";
    } else if (animationEnabled && currentBanner === "default") {
      // Animation being turned off
      if (animationTimerRef.current) {
        clearInterval(animationTimerRef.current);
        animationTimerRef.current = null;
      }

      // Reset banner colors
      setOutput((prev) => {
        const newOutput = [...prev];
        const bannerLines = banners.default.length;

        for (let i = 0; i < bannerLines; i++) {
          if (newOutput[i] && newOutput[i].type === "system") {
            newOutput[i] = {
              ...newOutput[i],
              color: "text-blue-400", // Reset to default color
            };
          }
        }

        return newOutput;
      });

      return "Banner animation disabled.";
    }

    return animationEnabled ? "Animation disabled." : "Animation enabled.";
  };

  const processCommand = (cmd: string) => {
    setOutput([
      ...output,
      { type: "command", text: `visitor@abdullah:~$ ${cmd}` },
    ]);

    const cmdParts = cmd.toLowerCase().trim().split(" ");
    const mainCmd = cmdParts[0];
    const args = cmdParts.slice(1);

    switch (mainCmd) {
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
          { type: "response", text: "- banner: Change the terminal banner" },
          { type: "response", text: "  Usage: banner <option>" },
          {
            type: "response",
            text: "  Options: default, boxed, kali, debian, ubuntu, hacker",
          },
          { type: "response", text: "- banners: List all available banners" },
          { type: "response", text: "- animation: Toggle banner animation" },
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
      case "banner":
        if (args.length === 0) {
          setOutput((prev) => [
            ...prev,
            { type: "response", text: "Please specify a banner name." },
            { type: "response", text: "Usage: banner <option>" },
            {
              type: "response",
              text: "Options: default, boxed, kali, debian, ubuntu, hacker",
            },
            {
              type: "response",
              text: 'Type "banners" to see all available options.',
            },
            { type: "response", text: "" },
          ]);
        } else {
          const bannerName = args[0];
          const result = changeBanner(bannerName);
          setOutput((prev) => [
            ...prev,
            { type: "response", text: result },
            { type: "response", text: "" },
          ]);
        }
        break;
      case "banners":
        setOutput((prev) => [
          ...prev,
          { type: "response", text: "Available banners:" },
          {
            type: "response",
            text:
              "- default: Original Abdullah banner" +
              (animationEnabled ? " (animated)" : ""),
          },
          { type: "response", text: "- boxed: Abdullah banner with box frame" },
          { type: "response", text: "- kali: Kali Linux style banner" },
          { type: "response", text: "- debian: Debian Linux style banner" },
          { type: "response", text: "- ubuntu: Ubuntu style banner" },
          { type: "response", text: "- hacker: Hacker style banner" },
          {
            type: "response",
            text: 'Use "banner <name>" to change the banner.',
          },
          {
            type: "response",
            text: 'Use "animation" to toggle animation for the default banner.',
          },
          { type: "response", text: "" },
        ]);
        break;
      case "animation":
        const result = toggleAnimation();
        setOutput((prev) => [
          ...prev,
          { type: "response", text: result },
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
              : item.type === "system" && item.color
              ? item.color
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
