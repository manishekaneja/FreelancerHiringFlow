import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk } from "../../type";

function verifyPasswordTokenThunk({ token }: { token: string }): CustomThunk<any> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    const { data } = await Axios.get<unknown, AxiosResponse<ApiResponse<User>>>(
      `${endPointBase}${EndpointConstants.auth.verifyResetToken}/${token}`
    );
    if (!data.success ) {
      throw new Error(data.message);
    }
    return data.data;
  };
}
export default verifyPasswordTokenThunk;
