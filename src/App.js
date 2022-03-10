import PageLogin from "./pages/PageLogin";
import PageDashboard from "./pages/PageDashboard";

import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <PageLogin />
      </Route>
      <Route path="/user">
        <PageDashboard />
      </Route>
    </Switch>
  );
}

export default App;
