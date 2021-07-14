import React, { useMemo } from "react";

import { Container, Profile, Welcome, UserName } from "./style";
import Toggle from "../Toogle/index";
import emojis from "../../utils/emojis";
import { useMedia } from "../../hooks/useMedia";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];
  }, []);

  const match = useMedia("(max-width:768px)");

  return (
    <Container>
      {!match && <Toggle />}

      <Profile>
        <Welcome>Olá, {emoji} </Welcome>
        <UserName>Victor Hugo</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
