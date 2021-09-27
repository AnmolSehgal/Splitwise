import { Redirect, Route, Switch } from "react-router-dom";

import UserTab from "./UserTab";
import Profile from "./Profile";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { UID } from "../utils/constants/appConstant";

import { routes } from "../utils/constants/routeConstant";
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
        console.log(path);
        if (path !== routes.SIGN_UP)
          return userUID ? <Component /> : <Redirect to={routes.SIGN_IN} />;
        else return <Redirect to={routes.SIGN_UP} />;
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
        return userUID ? <Redirect to={routes.DASHBOARD} /> : <Component />;
      }}
    />
  );
};

const Routes = () => {
  return (
    <Switch>
      <NonProtectedRoutes
        path={routes.SIGN_UP}
        Component={SignUp}
        exact={true}
      />

      <NonProtectedRoutes
        path={[routes.SIGN_IN, routes.HOME]}
        Component={SignIn}
        exact={true}
      />
      <ProtectedRoutes path={routes.PROFILE} exact={true} Component={Profile} />
      <ProtectedRoutes
        path={routes.USER_DASHBOARD}
        Component={UserTab}
        exact={false}
      />
    </Switch>
  );
};

export default Routes;
