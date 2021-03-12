type RouteKeys =
  | "home"
  | "dashboard"
  | "login"
  | "register"
  | "forgetPassword"
  | "resetPassword"
  | "postAJob"
  | "appliedJobs";
const RouteConstant: Record<RouteKeys, string> = {
  home: "/",
  dashboard: "/dashboard",
  login: "/login",
  register: "/register",
  forgetPassword: "/forget-password",
  resetPassword: "/reset-password",
  postAJob: "/post-a-job",
  appliedJobs: "/applied-jobs",
};

export default RouteConstant;
