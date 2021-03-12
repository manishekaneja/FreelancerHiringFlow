import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import { Title } from "../../components/Title";
import getResetPasswordTokenThunk from "../../redux-thunk/auth/thunk/getResetPasswordTokenThunk";
import RouteConstant from "../../utils/RouteConstant";
import validator from "validator";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState<InputObject>({
    value: "",
    errorMessage: "",
    isTouched: false,
    isValid: true,
    validator: (value: string) =>
      validator.isEmail(value) ? "" : "Please enter a valid email",
  });
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

  const dispatch = useDispatch<
    ThunkDispatch<RootState, ExtraThunkArguments, Action<any>>
  >();
  const history = useHistory();
  return (
    <Layout>
      <div className="w-full flex py-60 justify-center items-center">
        <div className="max-w-xl w-full rounded-2xl p-8 bg-white shadow">
          <Title type="dark" title="Forgot your password?" />
          <div className="my-3.5" />
          <p className="m-0 p-0 text-sm secondary">
            Enter the email associated with your account and we’ll send you
            instructions to reset your password.
          </p>
          <Input
            label="Email Address*"
            {...propsToPass(email, setEmail)}
            placeholder="Enter your email"
            type="text"
          />

          <button
            className="primary-button"
            onClick={() =>
              !email.validator(email.value) &&
              dispatch(
                getResetPasswordTokenThunk({
                  email: email.value,
                })
              )
                .then((data) => {
                  history.push(RouteConstant.resetPassword + "/" + data.token);
                })
                .catch((err) => alert(err.message))
            }
          >
            Submit
          </button>
          <p>
            Have an account?
            <Link to={RouteConstant.login} className="primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPasswordScreen;
