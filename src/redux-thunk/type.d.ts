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

type UnverifiedUser = Pick<User, "email" | "token"> &
  BasicInfo & { valid: boolean };

type VerificationTokenResponse = {
  email: string;
  iat: number;
  exp: number;
};

type CustomAction<T = string> = {
  type: T;
  payload: unknown;
};
