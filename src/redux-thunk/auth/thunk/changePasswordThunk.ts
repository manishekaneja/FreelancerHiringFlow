import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk } from "../../type";

function changePasswordThunk({
  password,
  confirmPassword,
  token
}: {
  password: string;
  confirmPassword: string;
  token: string;
}): CustomThunk<any> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    const { data } = await Axios.post<
      any,
      AxiosResponse<ApiResponse<User>>
    >(`${endPointBase}${EndpointConstants.auth.changePassword}`, {
      password,
      confirmPassword,
      token,
    });
    if (!data.success ) {
      throw new Error(data.message);
    }
    return data.data;
  };
}
export default changePasswordThunk;
