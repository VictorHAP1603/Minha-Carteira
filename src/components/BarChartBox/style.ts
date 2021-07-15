import styled, { keyframes } from "styled-components";

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

export const Container = styled.div`
  min-height: 260px;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  width: 48%;
  padding: 15px 36px;
  border-radius: 7px;

  margin: 10px 0;

  display: flex;

  animation: ${animate} 0.5s;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const SideLeft = styled.aside`
  height: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > ul {
    height: fit-content;

    li {
      span {
        margin-left: 10px;
      }
    }

    li + li {
      margin-top: 20px;
    }
  }

  @media (max-width: 560px) {
    justify-content: center;
    align-items: center;

    > ul {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;

      li + li {
        margin-top: 0px;
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 400px) {
    > ul {
      flex-direction: column;
      margin-top: 20px;
      margin-bottom: 20px;

      li {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      li + li {
        margin-left: 0px;
        margin-top: 15px;
      }
    }
  }
`;

export const SideRight = styled.main`
  flex: 1;
`;
