import { CustomAction } from "../type";

const InitialState$job: ReducerStateType$job = {
  jobList: [],
  selectedJob: null,
};

type actionKeys$job =
  | "set-selected-job"
  | "set-job-list"
  | "add-new-in-job-list"
  | "clear-job-list";

function reducer$job(
  state = InitialState$job,
  { type, payload }: CustomAction<actionKeys$job>
): ReducerStateType$job {
  switch (type) {
    case "set-selected-job":
      return {
        ...state,
        selectedJob: payload as Job,
      };
    case "set-job-list":
      return {
        ...state,
        jobList: payload as Job[],
      };
    case "add-new-in-job-list":
      return {
        ...state,
        jobList: [...state.jobList, ...(payload as Job[])],
      };
    case "clear-job-list":
      return {
        ...state,
        jobList: [],
      };
    default:
      return state;
  }
}

const setSelectedJob: (job: Job) => CustomAction<actionKeys$job> = (job) => ({
  type: "set-selected-job",
  payload: job,
});

const setJobList: (joblist: Job[]) => CustomAction<actionKeys$job> = (
  joblist
) => ({
  type: "set-job-list",
  payload: joblist,
});

const addNewJobsInList: (joblist: Job[]) => CustomAction<actionKeys$job> = (
  joblist
) => ({
  type: "add-new-in-job-list",
  payload: joblist,
});

const clearJobList: () => CustomAction<actionKeys$job> = () => ({
  type: "clear-job-list",
  payload: null,
});

export {
  reducer$job,
  setSelectedJob,
  setJobList,
  addNewJobsInList,
  clearJobList,
};
