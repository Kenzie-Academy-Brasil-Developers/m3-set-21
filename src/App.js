import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Pokemon from "./Page/Pokemon";
import Users from "./Page/Users";
import Profile from "./Page/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/pokemon/:name">
            <Pokemon />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/user/:id">
            <Profile />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
