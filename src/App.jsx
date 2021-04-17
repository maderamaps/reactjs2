// import React from "react";

import React, { Component } from "react";

import "./App.css";
import Header from "./component/header/header";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import { Suspense } from "react";

const loading = (
  <div>
    <div>Loading</div>
  </div>
);

class NamaApp extends Component {
  state = {};

  render() {
    return (
      <div className="c-app">
        <Header />
        <div className="c-wrapper">
          <div className="c-body">
            <BrowserRouter>
              <Suspense fallback={loading}>
                <Switch>
                  {routes.map((route, idx) => (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      render={(props) => <route.component {...props} />}
                    />
                  ))}
                  <Redirect from="/" to="/home" />
                </Switch>
              </Suspense>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default NamaApp;
