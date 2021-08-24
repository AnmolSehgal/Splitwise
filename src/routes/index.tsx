import { Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/SignUp" component={SignUp} />
      <Route path="/SignIn" component={SignIn} />
    </Switch>
  );
};

export default Routes;
