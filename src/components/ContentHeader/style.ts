import styled from "styled-components";

interface ITitleContainerProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 25px;
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
  h1 {
    color: ${(props) => props.theme.colors.white};
    position: relative;

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -5px;
      left: 0;

      height: 8px;
      width: 40%;

      background-color: ${(props) => props.color};
    }
  }
`;

export const Controllers = styled.div`
  display: flex;

  button {
    margin: 0 5px;
  }
`;
