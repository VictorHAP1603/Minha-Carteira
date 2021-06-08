import React from "react";

import { Container, TitleContainer, Controllers } from "./style";

interface ContentHeaderProps {
  title: string;
  color: string;
}

const ContentHeader = ({ title, color }: ContentHeaderProps) => {
  return (
    <Container>
      <TitleContainer color={color}>
        <h1>{title}</h1>
      </TitleContainer>

      <Controllers>
        <button type="button">Botao a</button>
        <button type="button">Botao b</button>
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
