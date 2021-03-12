import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import { Title } from "../../components/Title";
import performLoginThunk from "../../redux-thunk/auth/thunk/performLoginThunk";
import RouteConstant from "../../utils/RouteConstant";
import validator from "validator";

const LoginScreen = () => {
  const [email, setEmail] = useState<InputObject>({
    value: "",
    errorMessage: "",
    isTouched: false,
    isValid: true,
    validator: (value: string) =>
      validator.isEmail(value) ? "" : "Please enter a valid email",
  });
  const [password, setPassword] = useState<InputObject>({
    value: "",
    isTouched: false,
    errorMessage: "",
    isValid: true,
    validator: (value: string) =>
      value.length > 0 ? "" : "This field is mandatory",
  });
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch<
    ThunkDispatch<RootState, ExtraThunkArguments, Action<any>>
  >();

  const onLogin = useCallback(() => {
    if (!email.validator(email.value) && !password.validator(password.value)) {
      setIsLoading(true);
      dispatch(
        performLoginThunk({
          email: email.value,
          password: password.value,
        })
      )
        .then(() => {
          history.push(RouteConstant.dashboard);
        })
        .catch((err) => {
          alert(err.message);
          setIsLoading(false);
        });
    }
  }, [email, password, dispatch, history]);
  return (
    <Layout>
      <div className="w-full flex py-60 justify-center items-center">
        <div className="max-w-xl w-full rounded-2xl p-8 bg-white popup ">
          {isLoading ? (
            <p>Loading</p>
          ) : (
            <>
              <Title title="Login" />
              <div className="my-3.5" />
              <Input
                label="Email address"
                value={email.value}
                onChange={(value) => {
                  const errorMessage = email.validator(value);
                  setEmail((ps) => ({
                    ...ps,
                    value,
                    errorMessage: errorMessage,
                    isValid: !!errorMessage,
                    isTouched: true,
                  }));
                }}
                isTouched={email.isTouched}
                isValid={email.isValid}
                errorMessage={email.errorMessage}
                placeholder="Enter your Email"
                type="text"
              />
              <Input
                isTouched={password.isTouched}
                label="Password"
                extra={
                  <Link
                    className="text-xs text-blue-500"
                    to={RouteConstant.forgetPassword}
                  >
                    Forgot Password
                  </Link>
                }
                value={password.value}
                onChange={(value) => {
                  const errorMessage = password.validator(value);
                  setPassword((ps) => ({
                    ...ps,
                    value,
                    errorMessage: errorMessage,
                    isValid: !!errorMessage,
                    isTouched: true,
                  }));
                }}
                isValid={password.isValid}
                errorMessage={password.errorMessage}
                placeholder="Enter your Password"
                type="password"
              />
              <button className="primary-button" onClick={onLogin}>
                Login
              </button>
              <p>
                New to My Jobs?
                <Link to={RouteConstant.register} className="primary">
                  Create an account
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default LoginScreen;
