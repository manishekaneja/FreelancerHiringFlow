type RouteKeys = "home" | "dashboard" | "login" | "register" | "forgetPassword";
const RouteConstant: Record<RouteKeys, string> = {
  home: "/",
  dashboard: "/dashboard",
  login: "/login",
  register: "/register",
  forgetPassword: "/forget-password",
};


export default RouteConstant;