import React, { useMemo } from "react";

import { Container, Profile, Welcome, UserName } from "./style";
import Toggle from "../Toogle/index";
import emojis from "../../utils/emojis";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle />

      <Profile>
        <Welcome>Olá, {emoji} </Welcome>
        <UserName>Victor Hugo</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
