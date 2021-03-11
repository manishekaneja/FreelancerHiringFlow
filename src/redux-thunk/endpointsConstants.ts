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
    alreadyAppliedJobs: "/candidates/jobs",
    apply: "/candidates/jobs",
    getAvailableJobs: "/candidates/jobs/applied",
  },
  recruiters: {
    getCandidates: "/recruiters/jobs",
    postedJobs:
      "/recruiters/jobs/5452304b-82f8-4095-822b-f41136a0955d/candidates",
  },
};
