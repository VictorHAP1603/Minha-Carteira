import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.ul`
  list-style-type: none;
  /* display: flex; */

  /* li + li {
    margin-left: 20px;
  } */
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  > div {
    min-width: 40px;
    min-height: 40px;
    border-radius: 3px;
    background-color: ${(props) => props.color};
    font-size: 14px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 4px;
    font-weight: bold;
    /* margin-right: 10px; */
  }

  > span {
    font-weight: 500;
  }

  @media (max-width: 550px) {
    > div {
      min-width: 30px;
      min-height: 30px;

      /* margin-right: 10px; */
    }
  }
`;
