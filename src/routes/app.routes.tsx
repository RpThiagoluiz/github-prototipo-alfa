import { Switch, Route } from "react-router-dom";

//Pages
import UserCall from "../pages/UserCall";
import RepoCall from "../pages/RepoCall";

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={UserCall} />
    <Route path="/user/repo" component={RepoCall} />
  </Switch>
);

export default AppRoutes;
