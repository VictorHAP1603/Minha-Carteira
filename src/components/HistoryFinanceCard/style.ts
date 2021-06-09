import styled from "styled-components";

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
  background-color: ${(props) => props.color};

  margin-right: 20px;
`;

export const DescriptionAmount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 10px;
`;
