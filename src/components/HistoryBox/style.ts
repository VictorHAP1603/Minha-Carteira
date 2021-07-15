import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    transform: translateX(-100px);
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

export const Container = styled.div`
  height: auto;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.tertiary};
  width: 100%;

  margin: 10px 0;
  padding: 30px 20px;

  border-radius: 7px;

  animation: ${animate} 0.5s;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 90%;
  height: 250px;
`;

export const ChartHeader = styled.header`
  width: 100%;
  margin-bottom: 20px;
  padding: 0 16px;

  display: flex;
  justify-content: space-between;

  ul {
    list-style-type: none;
    display: flex;

    li {
      > div {
        margin-right: 10px;
      }
    }

    li + li {
      margin-left: 20px;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      margin-bottom: 15px;
      font-size: 20px;
    }
  }
`;
