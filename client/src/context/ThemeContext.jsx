import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("library_theme");

  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("library_theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
