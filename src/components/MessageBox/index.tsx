import React from "react";

import HappyImg from "../../assets/happy.svg";

import { Container } from "./style";

const MessageBox: React.FC = ({ children }) => {
  return (
    <Container>
      <header>
        Muito bem!
        <img src={HappyImg} alt="" />
        <p>Sua carteira está positiva!</p>
      </header>
      <footer>
        <span>Continue assim. Considere invesstir o seu saldo</span>
      </footer>
    </Container>
  );
};

export default MessageBox;
