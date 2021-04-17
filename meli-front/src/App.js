import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProductListPage from "./components/ProductListPage";
import ProductPage from "./components/ProductPage";
import Breadcrumbs from "./components/Breadcrumbs";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" children={<HomePage />}></Route>
        <Route
          path="/:id"
          children={({ location }) => (
            <div>
              <Breadcrumbs />
              <div className="layout">
                <div className="container">
                  {location.search ? <ProductListPage /> : <ProductPage />}
                </div>
              </div>
            </div>
          )}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
