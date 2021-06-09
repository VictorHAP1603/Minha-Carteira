import React from "react";

import ContentHeader from "../../components/ContentHeader/index";
import SelectInput from "../../components/SelectInput";

import { Container } from "./style";

const Dashboard: React.FC = () => {
  const options = [
    { value: "Rodrigo", label: "Rodrigo" },
    { value: "Maria", label: "Maria" },
    { value: "Joao", label: "Joao" },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" color="#e44c4e">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
