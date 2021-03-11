type RouteKeys =
  | "home"
  | "dashboard"
  | "login"
  | "register"
  | "forgetPassword"
  | "resetPassword";
const RouteConstant: Record<RouteKeys, string> = {
  home: "/",
  dashboard: "/dashboard",
  login: "/login",
  register: "/register",
  forgetPassword: "/forget-password",
  resetPassword: "/reset-password",
};

export default RouteConstant;
