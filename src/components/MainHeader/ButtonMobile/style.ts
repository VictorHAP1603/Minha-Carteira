import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.warning};
  padding: 13px 20px;
  border-radius: 7px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  > svg {
    transform: scale(2);
    color: ${(props) => props.theme.colors.white};
    font-weight: 400;
  }
`;
