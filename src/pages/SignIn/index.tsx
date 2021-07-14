import React, { useState } from "react";

import LogoImg from "../../assets/logo.svg";
import Button from "../../components/Button";
import InputContainer from "../../components/InputContainer";
import { useAuth } from "../../hooks/auth";

import { Container, Logo, Form, FormTitle } from "./style";

const SigIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signIn } = useAuth();

  // function validateLogin(e) {
  //   e.preventDefault();

  // }

  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="Minha Carteira" />
        <h3>Minha Carteira</h3>
      </Logo>

      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Entrar</FormTitle>

        <InputContainer
          required
          type="text"
          name="email"
          className="input_email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputContainer
          required
          type="password"
          name="password"
          className="input_password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default SigIn;
