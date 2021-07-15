import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  height: 260px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  margin: 10px 0;

  border-radius: 7px;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
  }

  /* @media (max-width: 550px) {

  } */
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;
  flex: 1;

  > h2 {
    margin-bottom: 20px;
  }

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

  @media (max-width: 768px) {
    padding: 0 15px 5px;
    margin-bottom: 7px;

    > h2 {
      margin-top: 15px;
      margin-bottom: 7px;
    }
  }

  @media (max-width: 550px) {
    padding: 15px;
    margin-bottom: 7px;
  }
`;

export const SideRight = styled.main`
  /* height: 100%; */
  flex: 1;
`;
