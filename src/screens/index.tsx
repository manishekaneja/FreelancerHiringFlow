import { FC } from "react";
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
  return (
    <Switch>
      <Route path={RouteConstant.home} exact strict component={HomeScreen} />
      <Route path={RouteConstant.login} component={LoginScreen} />
      <Route path={RouteConstant.register} component={RegisterScreen} />
      <Route
        path={RouteConstant.forgetPassword}
        component={ForgotPasswordScreen}
      />
      <Route
        path={RouteConstant.resetPassword}
        component={ResetPasswordScreen}
      />
      <Route path={RouteConstant.postAJob} component={PostAJobScreen} />
      <Route path={RouteConstant.appliedJobs} component={AppliedJobScreen} />

      <Route path={RouteConstant.dashboard} component={DashboardScreen} />
    </Switch>
  );
};

export default EntryPoint;
