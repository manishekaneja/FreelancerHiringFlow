import Axios, { AxiosResponse } from "axios";
import { setLoggedInState, setRole } from "../../applicationState/applicationState";
import { EndpointConstants } from "../../endpointsConstants";
import { ApiResponse, CustomThunk } from "../../type";
import { setUser } from "../userReducer";

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
    if (userRole !== 0 && userRole !== 1) {
      throw new Error("Invalid User Role");
    }
    const { data } = await Axios.post<
      unknown,
      AxiosResponse<ApiResponse<User>>
    >(`${endPointBase}${EndpointConstants.auth.register}`, {
      name,
      email,
      password,
      confirmPassword,
      skills,
      userRole,
    });
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
export default performRegsiterationThunk;
