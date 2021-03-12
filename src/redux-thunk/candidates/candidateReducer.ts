import { CustomAction } from "../type";

const InitialState$candidate: ReducerStateType$candidate = {
  availableJobs: [],
};

type actionKeys$candidate =
  | "set-job-list"
  | "add-new-in-job-list"
  | "clear-job-list";

function reducer$job(
  state = InitialState$candidate,
  { type, payload }: CustomAction<actionKeys$candidate>
): ReducerStateType$candidate {
  switch (type) {
    case "set-job-list":
      return {
        ...state,
        availableJobs: payload as Job[],
      };
    case "add-new-in-job-list":
      return {
        ...state,
        availableJobs: [...state.availableJobs, ...(payload as Job[])],
      };
    case "clear-job-list":
      return {
        ...state,
        availableJobs: [],
      };
    default:
      return state;
  }
}

const setAvailableJobList: (
  joblist: Job[]
) => CustomAction<actionKeys$candidate> = (joblist) => ({
  type: "set-job-list",
  payload: joblist,
});

const addNewAvailableJobsInList: (
  joblist: Job[]
) => CustomAction<actionKeys$candidate> = (joblist) => ({
  type: "add-new-in-job-list",
  payload: joblist,
});

const clearAvailableJobList: () => CustomAction<actionKeys$candidate> = () => ({
  type: "clear-job-list",
  payload: null,
});

export {
  reducer$job,
  setAvailableJobList,
  addNewAvailableJobsInList,
  clearAvailableJobList,
};
