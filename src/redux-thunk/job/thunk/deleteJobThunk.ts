import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk, User } from "../../type";

function deleteJobThunk({ jobId }: { jobId: string }): CustomThunk<any> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    const { data } = await Axios.delete<
      unknown,
      AxiosResponse<ApiResponse<User>>
    >(`${endPointBase}${EndpointConstants.jobs.delete}`);
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  };
}
export default deleteJobThunk;
