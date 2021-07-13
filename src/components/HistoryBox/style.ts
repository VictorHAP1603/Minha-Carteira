import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  height: 360px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.tertiary};
  width: 100%;

  margin: 10px 0;
  padding: 30px 20px;

  border-radius: 7px;
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 90%;
`;

export const ChartHeader = styled.header`
  width: 100%;
  margin-bottom: 20px;
  padding: 0 16px;

  display: flex;
  justify-content: space-between;
`;

export const LegendContainer = styled.ul`
  list-style-type: none;
  display: flex;

  li + li {
    margin-left: 20px;
  }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  height: 100%;

  > div {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    background-color: ${(props) => props.color};
    margin-right: 10px;
  }

  > span {
    font-weight: 500;
  }
`;
