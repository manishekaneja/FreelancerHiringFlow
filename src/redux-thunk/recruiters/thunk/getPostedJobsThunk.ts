import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk } from "../../type";
import { setPostedJobList } from "../recruiterReducer";

function getPostedJobsThunk(): CustomThunk<any> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    const { token } = getStates().user;
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
    >(`${endPointBase}${EndpointConstants.recruiters.postedJobs}`, {
      headers: {
        Authorization: token,
      },
    });
    if (!data.success) {
      throw new Error(data.message);
    }
    dispatchThunk(setPostedJobList(data.data ? data.data.data : []));
    return data.data ? data.data.data : [];
  };
}
export default getPostedJobsThunk;
