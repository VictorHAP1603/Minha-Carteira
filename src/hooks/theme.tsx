import { createContext, useState, useContext, ReactNode, useMemo } from "react";

import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";

interface IThemeContext {
  toggleTheme: () => void;
  theme: ITheme;
}

interface ITheme {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  };
}

interface IThemeProvider {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider = ({ children }: IThemeProvider): JSX.Element => {
  const themeSaved = useMemo(() => {
    const saved = localStorage.getItem("@minha-carteira:theme");

    switch (saved) {
      case "dark":
        return dark;
      case "light":
        return light;
      default:
        return dark;
    }
  }, []);

  const [theme, setTheme] = useState<ITheme>(themeSaved);

  const toggleTheme = () => {
    if (theme.title === "dark") {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
