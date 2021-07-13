import React from "react";

import { Container, Legend } from "./style";

interface ILegendContainerProps {
  entry: {
    color: string;
    percent: number | boolean;
    text: string;
  };

  output: {
    color: string;
    percent: number | boolean;
    text: string;
  };
}

const LegendContainer: React.FC<ILegendContainerProps> = ({
  entry,
  output,
}) => {
  const outputPercent =
    typeof output.percent !== "boolean" ? `${output.percent}%` : "";

  const entryPercent =
    typeof entry.percent !== "boolean" ? `${entry.percent}%` : "";

  return (
    <Container>
      <Legend color={entry.color}>
        <div>{entryPercent}</div>
        <span>{entry.text}</span>
      </Legend>

      <Legend color={output.color}>
        <div>{outputPercent}</div>
        <span>{output.text}</span>
      </Legend>
    </Container>
  );
};

export default LegendContainer;
