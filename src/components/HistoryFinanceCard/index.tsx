import React from "react";

import { Container, Tag, DescriptionAmount } from "./style";

interface IHistoryFinanceCard {
  tagColor: string;
  title: string;
  subTitle: string;
  amount: string;
  frequency: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCard> = ({
  tagColor,
  title,
  subTitle,
  amount,
  frequency,
}) => {
  return (
    <Container data-frequency={frequency}>
      <Tag color={frequency} />

      <DescriptionAmount>
        <span>{title}</span>
        <small>{subTitle}</small>
      </DescriptionAmount>

      <h3>{amount}</h3>
    </Container>
  );
};

export default HistoryFinanceCard;
