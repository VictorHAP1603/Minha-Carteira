import React from "react";

import { Container, TitleContainer, Controllers } from "./style";

interface IContentHeaderProps {
  title: string;
  color: string;
  children: React.ReactNode;
}

const ContentHeader = ({ title, color, children }: IContentHeaderProps) => {
  return (
    <Container>
      <TitleContainer color={color}>
        <h1>{title}</h1>
      </TitleContainer>

      <Controllers>{children}</Controllers>
    </Container>
  );
};

export default ContentHeader;
