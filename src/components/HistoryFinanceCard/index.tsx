import React from "react";

import { Container, Tag, DescriptionAmount } from "./style";

interface IHistoryFinanceCard {
  tagColor: string;
  title: string;
  subTitle: string;
  amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCard> = ({
  tagColor,
  title,
  subTitle,
  amount,
}) => {
  return (
    <Container>
      <Tag color={tagColor} />

      <DescriptionAmount>
        <span>{title}</span>
        <small>{subTitle}</small>
      </DescriptionAmount>

      <h3>{amount}</h3>
    </Container>
  );
};

export default HistoryFinanceCard;
