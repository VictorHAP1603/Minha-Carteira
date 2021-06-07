import React, { useState } from "react";

import { Container, ToggleLabel, ToggleSelector } from "./style";

const Toggle: React.FC = () => {
  const [theme, setTheme] = useState(true);

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={theme}
        onChange={() => setTheme(!theme)}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;
