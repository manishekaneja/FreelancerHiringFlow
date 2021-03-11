import { CustomAction, User } from "../type";

type ReducerStateType$user = User;

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

function reducer$user(
  state = InitialState$user,
  { type, payload }: CustomAction
): ReducerStateType$user {
  console.log(payload);
  switch (type) {
    default:
      return state;
  }
}

export { reducer$user };
