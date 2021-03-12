import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import { Title } from "../../components/Title";
import changePasswordThunk from "../../redux-thunk/auth/thunk/changePasswordThunk";
import verifyPasswordTokenThunk from "../../redux-thunk/auth/thunk/verifyPasswordTokenThunk";
import RouteConstant from "../../utils/RouteConstant";

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState<InputObject>({
    value: "",
    errorMessage: "",
    isTouched: false,
    isValid: true,
    validator: (value: string) => (value.length > 0 ? "" : "Is mandatory"),
  });
  const [confirmPassword, setConfirmPassword] = useState<InputObject>({
    value: "",
    errorMessage: "",
    isTouched: false,
    isValid: true,
    validator: (value: string) =>
      value.length > 0 ? "" : "Must be Same as Password",
  });
  const dispatch = useDispatch<
    ThunkDispatch<RootState, ExtraThunkArguments, Action<any>>
  >();

  const params: any = useParams();
  const history = useHistory();
  const [isVerified, setIsVerified] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    dispatch(
      verifyPasswordTokenThunk({
        token: params.token,
      })
    )
      .then((data) => {
        setIsValid(true);
      })
      .catch((err) => {
        alert(err.message);
        setIsValid(false);
      })
      .finally(() => {
        setIsVerified(true);
      });
  }, [params, dispatch]);
  const propsToPass = useCallback(
    (
      input: InputObject,
      setter: React.Dispatch<React.SetStateAction<InputObject>>
    ) => ({
      value: input.value,
      onChange: (value: string) => {
        const errorMessage = input.validator(value);
        setter((ps) => ({
          ...ps,
          value,
          errorMessage: errorMessage,
          isValid: !!errorMessage,
          isTouched: true,
        }));
      },
      isTouched: input.isTouched,
      isValid: input.isValid,
      errorMessage: input.errorMessage,
    }),
    []
  );
  if (!isVerified) {
    return null;
  }
  return (
    <Layout>
      <div className="w-full flex py-60 justify-center items-center">
        <div className="max-w-xl w-full rounded-2xl p-8 bg-white shadow">
          {isValid ? (
            <>
              {" "}
              <Title title="Reset Your Password" />
              <div className="my-3.5" />
              <p className="m-0 p-0 text-sm secondary">
                Enter your new password below.
              </p>
              <Input
                label="New Password"
                {...propsToPass(password, setPassword)}
                placeholder="Enter your email"
                type="password"
              />
              <Input
                label="Confirm New Password"
                {...propsToPass(confirmPassword, setConfirmPassword)}
                placeholder="Enter your email"
                type="password"
              />
              <button
                className="primary-button"
                onClick={() => {
                  if (
                    !confirmPassword.validator(confirmPassword.value) &&
                    !password.validator(password.value) &&
                    confirmPassword.value === password.value
                  ) {
                    dispatch(
                      changePasswordThunk({
                        confirmPassword: confirmPassword.value,
                        password: password.value,
                        token: params.token,
                      })
                    )
                      .then((data: any) => {
                        history.push(RouteConstant.login);
                      })
                      .catch((error: any) => alert(error.message));
                  } else {
                    if (confirmPassword.value !== password.value) {
                      setConfirmPassword((ps) => ({
                        ...ps,
                        errorMessage: "Must be same as Password ",
                        isTouched: true,
                        isValid: false,
                      }));
                    }
                  }
                }}
              >
                Reset
              </button>
            </>
          ) : (
            <Title title="Invalid " />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ResetPasswordScreen;
