import React from "react";

import ContentHeader from "../../components/ContentHeader/index";

import { Container } from "./style";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Dashboard" color="white" />
    </Container>
  );
};

export default Dashboard;
