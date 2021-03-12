import { CustomAction } from "../type";

const InitialState$user: ReducerStateType$user = {
  createdAt: "",
  email: "",
  id: "",
  name: "",
  skills: "",
  updatedAt: "",
  userRole: 0,
  token: "",
};

type actionKeys$user = "set-user" | "reset-user";

function reducer$user(
  state = InitialState$user,
  { type, payload }: CustomAction<actionKeys$user>
): ReducerStateType$user {
  switch (type) {
    case "reset-user":
      return { ...InitialState$user };
    case "set-user":
      return {
        ...state,
        ...(payload as User),
      };
    default:
      return state;
  }
}

const setUser: (user: User) => CustomAction<actionKeys$user> = (user) => ({
  type: "set-user",
  payload: user,
});

const resetUser: () => CustomAction<actionKeys$user> = () => ({
  type: "reset-user",
  payload: null,
});

export { reducer$user, setUser, resetUser };
