import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk } from "../../type";

function getSingleJobCandidateThunk({
  jobId,
}: {
  jobId: string;
}): CustomThunk<any> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    const { data } = await Axios.get<
      unknown,
      AxiosResponse<ApiResponse<unknown>>
    >(
      `${endPointBase}${EndpointConstants.recruiters.getCandidates}/${jobId}/candidates`
    );
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  };
}
export default getSingleJobCandidateThunk;
