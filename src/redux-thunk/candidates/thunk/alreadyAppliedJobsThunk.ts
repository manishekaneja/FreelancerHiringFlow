import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk } from "../../type";
import { setAppliedAvailableJobList } from "../candidateReducer";

function alreadyAppliedJobsThunk(): CustomThunk<any> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    const { token } = getStates().user;

    const { data } = await Axios.get<
      unknown,
      AxiosResponse<ApiResponse<Job[]>>
    >(`${endPointBase}${EndpointConstants.candidates.alreadyAppliedJobs}`, {
      headers: {
        Authorization: token,
      },
    });
    if (!data.success || !data.data) {
      throw new Error(data.message);
    }
    dispatchThunk(setAppliedAvailableJobList(data.data));
    return data;
  };
}
export default alreadyAppliedJobsThunk;
