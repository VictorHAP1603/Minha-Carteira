import React from "react";

import { MdMenu } from "react-icons/md";

import { useMobileMenu } from "../../../hooks/useMobileMenu";

import { Container } from "./style";

const ButtonMobile: React.FC = ({ children }) => {
  const { toggleMenuMobile } = useMobileMenu();

  return (
    <Container onClick={() => toggleMenuMobile()}>
      <MdMenu />
    </Container>
  );
};

export default ButtonMobile;
