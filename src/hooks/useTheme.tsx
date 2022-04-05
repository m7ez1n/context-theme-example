import { useContext, createContext, useState } from "react";

import { ChildrenType } from "../common/childrenType";

type ThemeContextType = {
  selectedTheme: "dark" | "light";
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  selectedTheme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ChildrenType) => {
  const [selectedTheme, setSelectedTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () =>
    setSelectedTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ selectedTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);

  if (ctx === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return ctx;
};
