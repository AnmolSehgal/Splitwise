import { Redirect, Route, Switch } from "react-router-dom";
import UserTab from "./UserTab_";
import Profile from "./Profile_";
import SignIn from "./SignIn_";
import SignUp from "./SignUp_";
import { UID } from "../utils/appConstant";

interface RoutesProps {
  path: string | string[];
  Component: React.ComponentType;
  exact: boolean;
}

const ProtectedRoutes = ({ path, Component, exact }: RoutesProps) => {
  const userUID = localStorage.getItem(UID);
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return userUID ? <Component /> : <Redirect to="/SignIn" />;
      }}
    />
  );
};

const NonProtectedRoutes = ({ path, Component, exact }: RoutesProps) => {
  const userUID = localStorage.getItem(UID);

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return userUID ? <Redirect to="/dashboard/" /> : <Component />;
      }}
    />
  );
};

const Routes = () => {
  return (
    <Switch>
      <NonProtectedRoutes
        path={["/SignUp", "/"]}
        Component={SignUp}
        exact={true}
      />
      <NonProtectedRoutes
        path={["/SignIn", "/"]}
        Component={SignIn}
        exact={true}
      />
      <ProtectedRoutes path="/profile" exact={true} Component={Profile} />
      <ProtectedRoutes path="/:mode/:id?" Component={UserTab} exact={false} />
    </Switch>
  );
};

export default Routes;
