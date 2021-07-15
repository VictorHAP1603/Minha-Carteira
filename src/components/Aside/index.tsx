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
import { useMobileMenu } from "../../hooks/useMobileMenu";
import { useMedia } from "../../hooks/useMedia";

import Toggle from "../Toogle";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const { isOpened } = useMobileMenu();
  const match = useMedia("(max-width: 768px)");

  return (
    <Container isOpened={isOpened}>
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

        {match && <Toggle />}
      </MenuContainer>
    </Container>
  );
};

export default Aside;
