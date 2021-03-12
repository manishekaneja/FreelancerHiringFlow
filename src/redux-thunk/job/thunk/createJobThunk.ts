import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import getPostedJobsThunk from "../../recruiters/thunk/getPostedJobsThunk";
import { ApiResponse, CustomThunk } from "../../type";

function createJobThunk({
  description,
  location,
  title,
}: {
  title: string;
  description: string;
  location: string;
}): CustomThunk<any> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    const { token } = getStates().user;

    const { data } = await Axios.post<
      unknown,
      AxiosResponse<ApiResponse<unknown>>
    >(
      `${endPointBase}${EndpointConstants.jobs.create}`,
      {
        title,
        description,
        location,
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
    await dispatchThunk(getPostedJobsThunk());
    return data;
  };
}
export default createJobThunk;
