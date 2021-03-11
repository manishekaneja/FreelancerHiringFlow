import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk, User } from "../../type";

function performLoginThunk({
  email,
  password,
}: {
  email: string;
  password: string;
}): CustomThunk<User> {
  return async function (dispatchThunk, _, { endPointBase }) {
    const { data } = await Axios.post<User, AxiosResponse<ApiResponse<User>>>(
      `${endPointBase}${EndpointConstants.auth.login}`,
      {
        email,
        password,
      }
    );
    if (!data.success && data.data) {
      throw new Error(data.message);
    }
    return { ...data.data } as User;
  };
}
export default performLoginThunk;
