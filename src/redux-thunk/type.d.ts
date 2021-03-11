import { ThunkAction, ThunkDispatch } from "redux-thunk";

type CustomThunk<RT = void> = ThunkAction<
  Promise<RT>,
  RootState,
  ExtraThunkArguments,
  Action<any>
>;

type CustomDispatch = ThunkDispatch<
  RootState,
  ExtraThunkArguments,
  Action<any>
>;

type ApiResponse<T> = {
  message?: string;
  data?: T;
  code: number;
  success: boolean;
};

type BasicInfo = {
  id: string;
  updatedAt: string;
  createdAt: string;
};

type User = {
  email: string;
  userRole: number;
  name: string;
  skills: string;
  token?: string;
} & BasicInfo;

type Job = {
  title: string;
  description: string;
  location: string;
} & BasicInfo;

type UnverifiedUser = Pick<User, "email" | "token"> &
  BasicInfo & { valid: boolean };

type VerificationTokenResponse = {
  email: string;
  iat: number;
  exp: number;
};

type CustomAction = {
  type: string;
  payload: unknown;
};
