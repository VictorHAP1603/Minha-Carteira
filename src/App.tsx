import React from "react";

import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import { useTheme } from "./hooks/theme";

// import { dark } from "./styles/themes/dark";
import Routes from "./routes";
// import light from "./styles/themes/light";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
