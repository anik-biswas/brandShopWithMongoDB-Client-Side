import React, { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <button onClick={() => setIsDarkMode((prev) => !prev)}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ToggleTheme;
