import React from "react";
import { Switch, Route } from "react-router-dom";

import DashBoard from "../pages/Dashboard";
import List from "../pages/List";
import Layout from "../components/Layout";

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" component={DashBoard} exact />
      <Route path="/list/:type" component={List} />
    </Switch>
  </Layout>
);

export default AppRoutes;
