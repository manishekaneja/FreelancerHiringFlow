import { CustomAction } from "../type";

const InitialState$candidate: ReducerStateType$candidate = {
  availableJobs: [],
  appliedJobs: [],
};

type actionKeys$candidate =
  | "set-job-list"
  | "set-applied-job-list"
  | "add-new-in-job-list"
  | "clear-job-list";

function reducer$candidate(
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
    case "set-applied-job-list":
      return {
        ...state,
        appliedJobs: payload as Job[],
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

const setAppliedAvailableJobList: (
  joblist: Job[]
) => CustomAction<actionKeys$candidate> = (joblist) => ({
  type: "set-applied-job-list",
  payload: joblist,
});



export {
  reducer$candidate,
  setAvailableJobList,
  addNewAvailableJobsInList,
  clearAvailableJobList,
  setAppliedAvailableJobList
};
