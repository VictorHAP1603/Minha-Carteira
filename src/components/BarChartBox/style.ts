import styled from "styled-components";

export const Container = styled.div`
  min-height: 260px;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  width: 48%;
  padding: 15px 36px;
  border-radius: 7px;

  margin: 10px 0;

  display: flex;
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
`;

export const SideRight = styled.main`
  flex: 1;

  .tooltip_activate {
    display: none;
  }
`;
