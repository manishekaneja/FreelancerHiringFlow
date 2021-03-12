import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk } from "../../type";

function getAvailableJobsThunk(): CustomThunk<any> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    const { data } = await Axios.get<
      unknown,
      AxiosResponse<
        ApiResponse<{
          data: Job[];
          metadata: {
            count: number;
            limit: number;
          };
        }>
      >
    >(`${endPointBase}${EndpointConstants.candidates.getAvailableJobs}/`);
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  };
}
export default getAvailableJobsThunk;
