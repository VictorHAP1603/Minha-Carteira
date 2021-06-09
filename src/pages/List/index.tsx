import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Container, Content } from "./style";

const List: React.FC = () => {
  const options = [
    { value: "Rodrigo", label: "Rodrigo" },
    { value: "Maria", label: "Maria" },
    { value: "Joao", label: "Joao" },
  ];

  return (
    <Container>
      <ContentHeader title="Saidas" color="#e44c4e">
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subTitle="09/06/2021"
          amount="R$ 130,00"
        />
      </Content>
    </Container>
  );
};

export default List;
