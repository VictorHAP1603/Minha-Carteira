import React from "react";

import {
  MdExitToApp,
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
} from "react-icons/md";

import {
  Container,
  Header,
  Title,
  LogoImg,
  MenuContainer,
  MenuItemLink,
} from "./style";

import img_logo from "../../assets/logo.svg";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={img_logo} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/dashboard">
          <MdDashboard />
          DashBoard
        </MenuItemLink>

        <MenuItemLink href="/list/entradas">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink href="/list/saidas">
          <MdArrowDownward />
          Saidas
        </MenuItemLink>

        <MenuItemLink href="/logout">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
