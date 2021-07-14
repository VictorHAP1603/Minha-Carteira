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
import { useAuth } from "../../hooks/auth";

const Aside: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Header>
        <LogoImg src={img_logo} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/">
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

        <MenuItemLink href="#" onClick={() => signOut()}>
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
