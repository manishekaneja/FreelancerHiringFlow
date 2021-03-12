import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk } from "../../type";

function applyForJobThunk({ jobId }: { jobId: string }): CustomThunk<any> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    const { data } = await Axios.post<
      unknown,
      AxiosResponse<ApiResponse<User>>
    >(`${endPointBase}${EndpointConstants.candidates.apply}/`, {
      jobId,
    });
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  };
}
export default applyForJobThunk;
