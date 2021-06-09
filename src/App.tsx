import React from "react";
import Layout from "./components/Layout";

import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

import DashBoard from "./pages/Dashboard/index";
import List from "./pages/List";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
