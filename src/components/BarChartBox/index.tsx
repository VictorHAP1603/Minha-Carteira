import React from "react";
import LegendContainer from "../LegendContainer";

import { Container, SideLeft, SideRight } from "./style";

import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";
import { amountFormat } from "../../utils/amountFormat";

interface IBarChartBox {
  data: {
    name: string;
    percent: number;
    amount: number;
    color: string;
  }[];
  title: string;
}

const BarChartBox: React.FC<IBarChartBox> = ({ data, title }) => {
  const recurrentPercent = data.filter((d) => d.name === "Recorrente")[0]
    .percent;

  const eventualPercent = data.filter((d) => d.name === "Eventual")[0].percent;

  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>

        <LegendContainer
          entry={{
            color: "#f7931b",
            percent: recurrentPercent,
            text: "Recorrentes",
          }}
          output={{
            color: "#e44",
            percent: eventualPercent,
            text: "Eventuais",
          }}
        />
      </SideLeft>

      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount" name="Valor">
              {data.map((indicator) => (
                <Cell
                  key={indicator.name}
                  cursor="pointer"
                  fill={indicator.color}
                />
              ))}
            </Bar>
            <Tooltip
              cursor={{ fill: "none" }}
              formatter={(value: number) => amountFormat(value)}
            />
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};

export default BarChartBox;
