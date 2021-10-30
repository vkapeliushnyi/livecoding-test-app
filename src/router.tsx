import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/admin-page" exact component={AdminPage} />
      <Route path="/user-page" exact component={UserPage} />
    </Switch>
  );
};

export default Router;