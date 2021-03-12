import { FC } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import RouteConstant from "../utils/RouteConstant";
import AppliedJobScreen from "./AppliedJobs";
import DashboardScreen from "./Dashboard";
import ForgotPasswordScreen from "./ForgetPassword";
import HomeScreen from "./Home";
import LoginScreen from "./Login";
import PostAJobScreen from "./PostAJob";
import RegisterScreen from "./Register";
import ResetPasswordScreen from "./ResetPassword";

const EntryPoint: FC<{}> = () => {
  const { isLoggedIn, role } = useSelector(
    (state: RootState) => state.appState
  );
  return (
    <Switch>
      <Route path={RouteConstant.home} exact strict component={HomeScreen} />
      {isLoggedIn ? (
        <>
          <Route path={RouteConstant.dashboard} component={DashboardScreen} />
          {role === "recruiter" && (
            <Route path={RouteConstant.postAJob} component={PostAJobScreen} />
          )}
          {role === "candidate" && (
            <Route
              path={RouteConstant.appliedJobs}
              component={AppliedJobScreen}
            />
          )}
        </>
      ) : (
        <>
          <Route path={RouteConstant.login} component={LoginScreen} />
          <Route path={RouteConstant.register} component={RegisterScreen} />
          <Route
            path={RouteConstant.forgetPassword}
            component={ForgotPasswordScreen}
          />
          <Route
            path={RouteConstant.resetPassword + "/:token"}
            component={ResetPasswordScreen}
          />
        </>
      )}
    </Switch>
  );
};

export default EntryPoint;
