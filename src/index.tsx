import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "./hooks/theme";
import { AuthProvider } from "./hooks/auth";
import { MobileMenuProvider } from "./hooks/useMobileMenu";

ReactDOM.render(
  <ThemeProvider>
    <AuthProvider>
      <MobileMenuProvider>
        <App />
      </MobileMenuProvider>
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
