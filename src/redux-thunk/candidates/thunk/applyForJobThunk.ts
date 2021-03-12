import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk } from "../../type";
import getAvailableJobsThunk from "./getAvailableJobsThunk";

function applyForJobThunk({ jobId }: { jobId: string }): CustomThunk<any> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    const { token } = getStates().user;

    const { data } = await Axios.post<
      unknown,
      AxiosResponse<ApiResponse<User>>
    >(
      `${endPointBase}${EndpointConstants.candidates.apply}/`,
      {
        jobId,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    if (!data.success) {
      throw new Error(data.message);
    }
    dispatchThunk(getAvailableJobsThunk());
    return data;
  };
}
export default applyForJobThunk;
