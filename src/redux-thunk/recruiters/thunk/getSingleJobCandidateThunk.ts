import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk } from "../../type";
import { setAppliedCandiatedList } from "../recruiterReducer";

function getSingleJobCandidateThunk({
  jobId,
}: {
  jobId: string;
}): CustomThunk<User[]> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    const { token } = getStates().user;
    const { data } = await Axios.get<
      unknown,
      AxiosResponse<ApiResponse<User[]>>
    >(
      `${endPointBase}${EndpointConstants.recruiters.getCandidates}/${jobId}/candidates`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    if (!data.success || !data.data) {
      throw new Error(data.message);
    }
    dispatchThunk(setAppliedCandiatedList(data.data));
    return data.data;
  };
}
export default getSingleJobCandidateThunk;
