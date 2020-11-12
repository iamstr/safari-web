import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AvailableBuses from "./pages/AvailableBuses/AvailableBuses";
import AvailableSeats from "./pages/AvailableSeats/AvailableSeats";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>

          <Route path="/available/buses">
            <AvailableBuses />
          </Route>
          <Route path="/available/seats">
            <AvailableSeats />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
