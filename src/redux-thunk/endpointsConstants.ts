type AuthEndpointKeys =
  | "login"
  | "register"
  | "resetPassword"
  | "verifyResetToken"
  | "changePassword";
type JobEndpointKeys = "create" | "fetchOne" | "fetchAll" | "delete";
type CandidateEndpointKeys =
  | "apply"
  | "getAvailableJobs"
  | "alreadyAppliedJobs";
type RecruiterEndpointKeys = "postedJobs" | "getCandidates";

export const EndpointConstants: {
  auth: Record<AuthEndpointKeys, string>;
  jobs: Record<JobEndpointKeys, string>;
  candidates: Record<CandidateEndpointKeys, string>;
  recruiters: Record<RecruiterEndpointKeys, string>;
} = {
  auth: {
    login: "/auth/login",
    changePassword: "/auth/resetpassword",
    register: "/auth/register",
    resetPassword: "/auth/resetpassword",
    verifyResetToken: "/auth/resetpassword",
  },
  jobs: {
    create: "/jobs",
    delete: "/jobs",
    fetchAll: "/jobs",
    fetchOne: "/jobs",
  },
  candidates: {
    alreadyAppliedJobs: "/candidates/jobs/applied",
    apply: "/candidates/jobs",
    getAvailableJobs: "//candidates/jobs",
  },
  recruiters: {
    postedJobs: "/recruiters/jobs",
    getCandidates:
      "/recruiters/jobs",
  },
};
