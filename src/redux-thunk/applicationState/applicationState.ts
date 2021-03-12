import { CustomAction } from "../type";

type ReducerStateType$state = {
  isLoggedIn: boolean;
  role: "candidate" | "recruiter" | null;
};

const InitialState$state: ReducerStateType$state = {
  isLoggedIn: false,
  role: null,
};

type actionKeys$applicationState = "set-loggedin-state" | "set-role";

function reducer$applicationState(
  state = InitialState$state,
  { type, payload }: CustomAction<actionKeys$applicationState>
): ReducerStateType$state {
  switch (type) {
    case "set-loggedin-state":
      return {
        ...state,
        isLoggedIn: payload as boolean,
      };
    case "set-role":
      return {
        ...state,
        role: payload as "candidate" | "recruiter" | null,
      };
    default:
      return state;
  }
}

const setLoggedInState: (
  flag: boolean
) => CustomAction<actionKeys$applicationState> = (flag) => ({
  type: "set-loggedin-state",
  payload: flag,
});

const setRole: (
  role: "candidate" | "recruiter" | null
) => CustomAction<actionKeys$applicationState> = (role) => ({
  type: "set-role",
  payload: role,
});

export { reducer$applicationState, setLoggedInState, setRole };
