import React from "react";

import { Pie, Cell, ResponsiveContainer, PieChart } from "recharts";
import LegendContainer from "../LegendContainer";

import { Container, SideLeft, SideRight } from "./style";

interface IPieChartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChartGraph: React.FC<IPieChartProps> = ({ data }) => {
  const entryPercent = data.filter((d) => d.name === "Entradas")[0].percent;
  const outputPercent = data.filter((d) => d.name === "Saídas")[0].percent;

  return (
    <Container>
      <SideLeft>
        <h2>Relação</h2>

        <LegendContainer
          entry={{
            color: "#f97",
            percent: entryPercent,
            text: "Entradas",
          }}
          output={{
            color: "#e44",
            percent: outputPercent,
            text: "Saídas",
          }}
        />
        {/* <LegendContainer>
        {data.map((indicator) => (
          <Legend color={indicator.color} key={indicator.name}>
            <div>{indicator.percent}%</div>
            <span>{indicator.name}</span>
          </Legend>
        ))}
      </LegendContainer> */}
      </SideLeft>

      <SideRight>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="percent">
              {data.map((indicator) => (
                <Cell key={indicator.name} fill={indicator.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};

export default PieChartGraph;
