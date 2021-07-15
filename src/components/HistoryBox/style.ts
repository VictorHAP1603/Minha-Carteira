import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.tertiary};
  width: 100%;

  margin: 10px 0;
  padding: 30px 20px;

  border-radius: 7px;

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
