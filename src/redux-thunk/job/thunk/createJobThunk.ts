import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk, User } from "../../type";

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
    const { data } = await Axios.post<
      unknown,
      AxiosResponse<ApiResponse<User>>
    >(`${endPointBase}${EndpointConstants.jobs.create}`, {
      title,
      description,
      location,
    });
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  };
}
export default createJobThunk;
