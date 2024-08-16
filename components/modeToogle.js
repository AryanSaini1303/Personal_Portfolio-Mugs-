"use client";
import styles from "./modeToogle.module.css";
import { useEffect, useState } from "react";

// lightbackground:#f7f7f7
// darkbackground: #1E1E1E
const ModeToogle = () => {
  const [primaryColor, setPrimaryColor] = useState("#FD6F00");
  const [secondaryColor, setSecondaryColor] = useState("#F8F8F8");
  const [theme, setTheme] = useState("light");

  const updateRootColors = (primary, secondary) => {
    document.documentElement.style.setProperty("--primary-color", primary);
    document.documentElement.style.setProperty("--secondary-color", secondary);
  };

  const handlePrimaryColorChange = (e) => {
    const newColor = e.target.value;
    setPrimaryColor(newColor);
    updateRootColors(newColor, secondaryColor);
  };

  const handleSecondaryColorChange = (e) => {
    const newColor = e.target.value;
    setSecondaryColor(newColor);
    updateRootColors(primaryColor, newColor);
  };
  function handleClick() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty("--background-color", "white");
      document.documentElement.style.setProperty(
        "--footer-background-color",
        "#F7F7F7"
      );
      document.documentElement.style.setProperty(
        "--primary-font-color",
        "black"
      );
      document.documentElement.style.setProperty("--primary-contrast", "30%");
      document.documentElement.style.setProperty("--primary-invert", "0");
      document.documentElement.style.setProperty("--hover-color", "bisque");
      document.documentElement.style.setProperty(
        "--primary-footer-color",
        "#333333"
      );
      document.documentElement.style.setProperty(
        "--primary-footer-color",
        "#333333"
      );
    } else {
      document.documentElement.style.setProperty(
        "--background-color",
        "#1E1E1E"
      );
      document.documentElement.style.setProperty(
        "--footer-background-color",
        "#1E1E1E"
      );
      document.documentElement.style.setProperty(
        "--primary-font-color",
        "white"
      );
      document.documentElement.style.setProperty("--primary-contrast", "100%");
      document.documentElement.style.setProperty("--primary-invert", "100%");
      document.documentElement.style.setProperty("--hover-color", "slategrey");
      document.documentElement.style.setProperty(
        "--primary-footer-color",
        "black"
      );
    }
  }, [theme]);

  return (
    <abbr title={`Turn ${theme === "light" ? "off" : "on"} the lights`}>
      <button onClick={handleClick} className={styles.btn}>
        {theme != "light" ? (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2rem"
            width="2rem"
          >
            <path
              fillRule="evenodd"
              d="M12 2.5c-3.81 0-6.5 2.743-6.5 6.119 0 1.536.632 2.572 1.425 3.56.172.215.347.422.527.635l.096.112c.21.25.427.508.63.774.404.531.783 1.128.995 1.834a.75.75 0 01-1.436.432c-.138-.46-.397-.89-.753-1.357a18.354 18.354 0 00-.582-.714l-.092-.11c-.18-.212-.37-.436-.555-.667C4.87 12.016 4 10.651 4 8.618 4 4.363 7.415 1 12 1s8 3.362 8 7.619c0 2.032-.87 3.397-1.755 4.5-.185.23-.375.454-.555.667l-.092.109c-.21.248-.405.481-.582.714-.356.467-.615.898-.753 1.357a.75.75 0 01-1.437-.432c.213-.706.592-1.303.997-1.834.202-.266.419-.524.63-.774l.095-.112c.18-.213.355-.42.527-.634.793-.99 1.425-2.025 1.425-3.561C18.5 5.243 15.81 2.5 12 2.5zM9.5 21.75a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zM8.75 18a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
            />
          </svg>
        ) : (
          <svg fill="none" viewBox="0 0 15 15" height="2rem" width="2rem">
            <path
              fill="currentColor"
              d="M4.076 6.47l.495.07-.495-.07zm-.01.07l-.495-.07.495.07zm6.858-.07l.495-.07-.495.07zm.01.07l-.495.07.495-.07zM9.5 12.5v.5a.5.5 0 00.5-.5h-.5zm-4 0H5a.5.5 0 00.5.5v-.5zm-.745-3.347l.396-.306-.396.306zm5.49 0l-.396-.306.396.306zM6 15h3v-1H6v1zM3.58 6.4l-.01.07.99.14.01-.07-.99-.14zM7.5 3a3.959 3.959 0 00-3.92 3.4l.99.14A2.959 2.959 0 017.5 4V3zm3.92 3.4A3.959 3.959 0 007.5 3v1a2.96 2.96 0 012.93 2.54l.99-.14zm.01.07l-.01-.07-.99.14.01.07.99-.14zm-.79 2.989c.63-.814.948-1.875.79-2.99l-.99.142a2.951 2.951 0 01-.59 2.236l.79.612zM9 10.9V12.5h1v-1.599H9zM9.5 12h-4v1h4v-1zm-3.5.5v-1.599H5V12.5h1zM3.57 6.47a3.951 3.951 0 00.79 2.989l.79-.612a2.951 2.951 0 01-.59-2.236l-.99-.142zM6 10.9c0-.823-.438-1.523-.85-2.054l-.79.612c.383.495.64.968.64 1.442h1zm3.85-2.054C9.437 9.378 9 10.077 9 10.9h1c0-.474.257-.947.64-1.442l-.79-.612zM7 0v2h1V0H7zM0 8h2V7H0v1zm13 0h2V7h-2v1zM3.354 3.646l-1.5-1.5-.708.708 1.5 1.5.708-.708zm9 .708l1.5-1.5-.708-.708-1.5 1.5.708.708z"
            />
          </svg>
        )}
      </button>
    </abbr>
  );
};

export default ModeToogle;
