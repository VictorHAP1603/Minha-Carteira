import React, { useState, useMemo } from "react";
import { useTheme } from "../../hooks/theme";

import { Container, ToggleLabel, ToggleSelector } from "./style";

const Toggle: React.FC = () => {
  const { toggleTheme, theme: themeContext } = useTheme();
  const themeStorage = useMemo(() => {
    const theme = localStorage.getItem("theme");

    switch (theme) {
      case "dark":
        return true;
      case "light":
        return false;
      default:
        return true;
    }
  }, []);

  const [theme, setTheme] = useState(themeStorage);

  function changeTheme() {
    setTheme(!theme);
    toggleTheme();

    setThemeLocalStorage();
  }

  function setThemeLocalStorage() {
    if (themeContext.title === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={theme}
        onChange={() => changeTheme()}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;
