import { Route, Switch } from "react-router-dom";
import Home from "../Page/Home";
import Signup from "../Page/Signup";
import Pokemon from "../Page/Pokemon";
import Profile from "../Page/Profile";
import Users from "../Page/Users";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/signup">
      <Signup />
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
);

export default Routes;
