import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Profile from "./profile/Profile";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

interface RoutesProps {
  path: string;
  Component: React.ComponentType;
  exact: boolean;
}

const ProtectedRoutes = ({ path, Component, exact }: RoutesProps) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return localStorage.getItem("uid") ? (
          <Component />
        ) : (
          <Redirect to="/SignIn" />
        );
      }}
    />
  );
};

const NonProtectedRoutes = ({ path, Component, exact }: RoutesProps) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return localStorage.getItem("uid") ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component />
        );
      }}
    />
  );
};

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoutes path="/dashboard" Component={Dashboard} exact={true} />
      <NonProtectedRoutes path="/SignUp" Component={SignUp} exact={true} />
      <NonProtectedRoutes path="/SignIn" Component={SignIn} exact={true} />
      <ProtectedRoutes path="/profile" exact={true} Component={Profile} />
    </Switch>
  );
};

export default Routes;
