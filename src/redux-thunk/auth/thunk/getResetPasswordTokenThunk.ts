import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk } from "../../type";

function getResetPasswordTokenThunk({
  email,
}: {
  email: string;
}): CustomThunk<any> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    const { data } = await Axios.get<unknown, AxiosResponse<ApiResponse<User>>>(
      `${endPointBase}${EndpointConstants.auth.resetPassword}`,
      {
        params: {
          email,
        },
      }
    );
    if (!data.success || !data.data) {
      throw new Error(data.message);
    }
    return data.data;
  };
}
export default getResetPasswordTokenThunk;
