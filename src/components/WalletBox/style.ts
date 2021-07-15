import styled, { keyframes } from "styled-components";

interface IContainerProps {
  color: string;
}

const animate = keyframes`
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  50% {
    opacity: 0.3;

  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Container = styled.div<IContainerProps>`
  background-color: ${(props) => props.color};
  width: 32%;
  height: 150px;

  margin: 10px 0;
  color: ${(props) => props.theme.colors.white};

  border-radius: 7px;
  padding: 10px 20px;

  position: relative;
  overflow: hidden;

  animation: ${animate} 0.5s;

  > img {
    height: 110%;
    position: absolute;
    right: -30px;
    top: -10px;

    opacity: 0.3;
  }

  > span {
    font-size: 18px;
    font-weight: 500;
  }

  > small {
    font-size: 12px;
    position: absolute;
    bottom: 10px;
  }

  @media (max-width: 768px) {
    > span {
      font-size: 14px;
    }

    > h1 {
      word-wrap: break-word;
      font-size: 22px;
    }
  }

  @media (max-width: 550px) {
    width: 100%;

    > span {
      display: block;
      font-size: 16px;
      margin: 15px 0 4px 0;
    }

    > h1 {
      font-size: 26px;
    }
  }
`;
