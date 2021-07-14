import React, { InputHTMLAttributes } from "react";

import { Container } from "./style";

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const InputContainer: React.FC<IInputProps> = ({ ...rest }) => {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
};

export default InputContainer;
