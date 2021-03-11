import Axios, { AxiosResponse } from "axios";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk, User } from "../../type";

function performRegsiterationThunk({
  email,
  password,
  confirmPassword,
  name,
  skills,
  userRole,
}: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userRole: number;
  skills: string;
}): CustomThunk<any> {
  return async (dispatchThunk, getStates, { endPointBase }) => {
    if (userRole != 0 && userRole != 1) {
      throw new Error("Invalid User Role");
    }
    const { data } = await Axios.post<unknown, AxiosResponse<ApiResponse<User>>>(
      `${endPointBase}${EndpointConstants.auth.login}`,
      {
        name,
        email,
        password,
        confirmPassword,
        skills,
        userRole,
      }
    );
    if (!data.success ) {
      throw new Error(data.message);
    }
    return data;
  };
}
export default performRegsiterationThunk;
