import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk, User } from "../../type";

function performLoginThunk({
  email,
  password,
}: {
  email: string;
  password: string;
}): CustomThunk<any> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    const { data } = await Axios.post<
      unknown,
      AxiosResponse<ApiResponse<User>>
    >(`${endPointBase}${EndpointConstants.auth.login}`, {
      email,
      password,
    });
    if (!data.success ) {
      throw new Error(data.message);
    }
    return data;
  };
}
export default performLoginThunk;
