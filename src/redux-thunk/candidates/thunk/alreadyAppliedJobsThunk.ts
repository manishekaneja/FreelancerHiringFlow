import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk, User } from "../../type";

function alreadyAppliedJobsThunk(): CustomThunk<any> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    const { data } = await Axios.get<
      unknown,
      AxiosResponse<ApiResponse<User>>
    >(`${endPointBase}${EndpointConstants.candidates.alreadyAppliedJobs}/`);
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  };
}
export default alreadyAppliedJobsThunk;
