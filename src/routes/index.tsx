import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { GlobalState } from "../store/types";
import UserTab from "./userTab/UserTab";
import Profile from "./profile/Profile";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";

interface RoutesProps {
  path: string;
  Component: React.ComponentType;
  exact: boolean;
}

const ProtectedRoutes = ({ path, Component, exact }: RoutesProps) => {
  const userLogIn = useSelector(
    (state: GlobalState) => state.signIn.isLoggedIn
  );
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return userLogIn ? <Component /> : <Redirect to="/SignIn" />;
      }}
    />
  );
};

const NonProtectedRoutes = ({ path, Component, exact }: RoutesProps) => {
  const userLogIn = useSelector(
    (state: GlobalState) => state.signIn.isLoggedIn
  );
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return userLogIn ? <Redirect to="/user/dashboard/" /> : <Component />;
      }}
    />
  );
};

const Routes = () => {
  return (
    <Switch>
      <NonProtectedRoutes path="/SignUp" Component={SignUp} exact={true} />
      <NonProtectedRoutes path="/SignIn" Component={SignIn} exact={true} />
      <ProtectedRoutes
        path="/user/:mode/:id?"
        Component={UserTab}
        exact={false}
      />
      <ProtectedRoutes path="/profile" exact={true} Component={Profile} />
    </Switch>
  );
};

export default Routes;
