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

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.tertiary};
  list-style: none;
  border-radius: 5px;
  margin: 10px 0;
  padding: 12px 10px;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  color: ${(props) => props.theme.colors.white};

  transition: 0.3s;

  animation: ${animate} 0.5s ease;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }
`;

export const Tag = styled.div`
  position: absolute;
  left: 0;

  height: 60%;
  width: 10px;
  background-color: ${(props) =>
    props.color === "recorrente"
      ? props.theme.colors.warning
      : props.theme.colors.success};

  margin-right: 20px;
`;

export const DescriptionAmount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 10px;
`;
