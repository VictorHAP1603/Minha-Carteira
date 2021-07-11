import React from "react";

import { Pie, Cell, ResponsiveContainer, PieChart } from "recharts";

import {
  Container,
  SideLeft,
  Legend,
  LegendContainer,
  SideRight,
} from "./style";

interface IPieChartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChartGraph: React.FC<IPieChartProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        {data.map((indicator) => (
          <Legend color={indicator.color} key={indicator.name}>
            <div>{indicator.percent}%</div>
            <span>{indicator.name}</span>
          </Legend>
        ))}
      </LegendContainer>
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

export default PieChartGraph;
