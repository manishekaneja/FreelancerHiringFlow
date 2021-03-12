import { CustomAction } from "../type";

const InitialState$recuiter: ReducerStateType$recuiter = {
  postedJobs: [],
};

type actionKeys$recuiter = "add-new-posted-job" | "set-posted-job-list";

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

export { reducer$recuiter, addNewPostedJob, setPostedJobList };
