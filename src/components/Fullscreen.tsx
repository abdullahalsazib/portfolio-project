import { useEffect, useState } from "react";
import { IoExpand, IoContract } from "react-icons/io5";

const FullScreenToggle = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullScreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullScreen(false);
      });
    }
  };

  useEffect(() => {
    // Automatically enter fullscreen when the page loads
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullScreen(true);
      });
    }
  }, []);

  return (
    <button
      onClick={toggleFullScreen}
      className=" cursor-pointer px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition flex items-center gap-2 fixed rotate-40 top-20 right-39"
    >
      {isFullScreen ? <IoContract /> : <IoExpand />}
      {isFullScreen ? "Exit Fullscreen" : "Enter Fullscreen"}
    </button>
  );
};

export default FullScreenToggle;
