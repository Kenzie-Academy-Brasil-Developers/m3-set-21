import { useState } from "react";
import PageLogin from "./page/PageLogin";
import PageDashboard from "./page/PageDashboard";

import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  return (
    <Switch>
      <Route exact path="/">
        <PageLogin setUser={setUser} setToken={setToken} />
      </Route>
      <Route path="/user">
        <PageDashboard user={user} setUser={setUser} token={token} />
      </Route>
    </Switch>
  );
}

export default App;
