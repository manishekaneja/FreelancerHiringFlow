import { CustomAction, Job } from "../type";

type ReducerStateType$job = {
  jobList: Job[];
  selectedJob: Job | null;
};

const InitialState$job: ReducerStateType$job = {
  jobList: [],
  selectedJob: null,
};

function reducer$job(
  state = InitialState$job,
  { type, payload }: CustomAction
): ReducerStateType$job {
  console.log(payload);
  switch (type) {
    default:
      return state;
  }
}

export { reducer$job };
