import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Switch, Redirect } from "react-router-dom";

import NotFound from "./components/NotFound";
import Navigate from "./components/Navigate";
import SearchLocation from "./components/SearchLocation";
import Location from "./components/Location";
import LongRangeWeather from "./components/LongRangeWeather";

const App = () => {
  return (
    <Provider store={store}>
      <div className="row">
        <div className="col-3">
          <Navigate />
        </div>
        <div className="col">
          <main className="container">
            <Switch>
              <Route exact path="/search" component={SearchLocation} />

              <Route path="/location" component={Location} />
              <Route path="/long-range" component={LongRangeWeather} />
              <Route path="/notfound" component={NotFound} />
              <Redirect from="/" exact to="/search" />
              <Redirect to="/notfound" />
            </Switch>
          </main>
        </div>
      </div>
    </Provider>
  );
};

export default App;
