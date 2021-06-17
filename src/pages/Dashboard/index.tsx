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

  const titleProps = {
    title: "Dashboard",
    lineColor: "#e44c4e",
  };

  return (
    <Container>
      <ContentHeader title={titleProps.title} color={titleProps.lineColor}>
        <SelectInput options={options} onChange={() => {}} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
