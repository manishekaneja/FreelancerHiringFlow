import { CustomAction } from "../type";

const InitialState$recuiter: ReducerStateType$recuiter = {
  postedJobs: [],
  candiatesForSelectedJob: [],
  selectedJobId: "",
};

type actionKeys$recuiter =
  | "add-new-posted-job"
  | "set-posted-job-list"
  | "set-candidate-list"
  | "set-selected-job-id";

function reducer$recuiter(
  state = InitialState$recuiter,
  { type, payload }: CustomAction<actionKeys$recuiter>
): ReducerStateType$recuiter {
  switch (type) {
    case "add-new-posted-job":
      return {
        ...state,
        postedJobs: [...state.postedJobs, payload as Job],
      };
    case "set-posted-job-list":
      return {
        ...state,
        postedJobs: [...(payload as Job[])],
      };
    case "set-candidate-list":
      return {
        ...state,
        candiatesForSelectedJob: payload as User[],
      };
    case "set-selected-job-id":
      return {
        ...state,
        selectedJobId: payload as string,
      };
    default:
      return state;
  }
}

const addNewPostedJob: (job: Job) => CustomAction<actionKeys$recuiter> = (
  job
) => ({
  type: "add-new-posted-job",
  payload: job,
});

const setPostedJobList: (
  joblist: Job[]
) => CustomAction<actionKeys$recuiter> = (joblist) => ({
  type: "set-posted-job-list",
  payload: joblist,
});

const setAppliedCandiatedList: (
  userlist: User[]
) => CustomAction<actionKeys$recuiter> = (userlist) => ({
  type: "set-candidate-list",
  payload: userlist,
});

export { reducer$recuiter, addNewPostedJob, setPostedJobList,setAppliedCandiatedList };
