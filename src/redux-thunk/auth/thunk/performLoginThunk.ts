import Axios, { AxiosResponse } from "axios";
import {
  setLoggedInState,
  setRole,
} from "../../applicationState/applicationState";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk } from "../../type";
import { setUser } from "../userReducer";

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
    if (!data.success || !data.data) {
      throw new Error(data.message);
    }
    await Promise.all([
      dispatchThunk(setUser(data.data)),
      dispatchThunk(setLoggedInState(true)),
      dispatchThunk(
        setRole(
          data.data.userRole === 1
            ? "candidate"
            : data.data.userRole === 0
            ? "recruiter"
            : null
        )
      ),
    ]);
    return data.data;
  };
}
export default performLoginThunk;
