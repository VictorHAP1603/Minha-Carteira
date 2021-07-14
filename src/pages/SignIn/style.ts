import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Logo = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  margin-bottom: 30px;

  > h3 {
    color: ${(props) => props.theme.colors.white};
    margin-left: 10px;
  }

  > img {
    width: 45px;
    height: 45px;
  }
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: 40px 30px;
  border-radius: 7px;

  > label {
    display: block;
    width: 300px;
  }

  label + label {
    margin-top: 15px;
  }

  button {
    margin-top: 20px;
    width: 100%;

    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.warning};
  }
`;

export const FormTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 30px;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -5px;
    left: 0;

    height: 8px;
    width: 15%;

    background-color: ${(props) => props.theme.colors.warning};
  }
`;
