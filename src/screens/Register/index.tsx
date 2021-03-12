import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import { Title } from "../../components/Title";
import performRegsiterationThunk from "../../redux-thunk/auth/thunk/performRegsiterationThunk";
import RouteConstant from "../../utils/RouteConstant";
import validator from "validator";

const RegisterScreen = () => {
  const [email, setEmail] = useState<InputObject>({
    value: "",
    errorMessage: "",
    isTouched: false,
    isValid: true,
    validator: (value: string) =>
      validator.isEmail(value) ? "" : "Please enter a valid email",
  });
  const [name, setName] = useState<InputObject>({
    value: "",
    errorMessage: "",
    isTouched: false,
    isValid: true,
    validator: (value: string) => (value.length > 0 ? "" : "Is mandatory"),
  });
  const [password, setPassword] = useState<InputObject>({
    value: "",
    errorMessage: "",
    isTouched: false,
    isValid: true,
    validator: (value: string) => (value.length > 0 ? "" : "Is mandatory"),
  });
  const [role, setRole] = useState(0);
  const [confirmPassword, setConfirmPassword] = useState<InputObject>({
    value: "",
    errorMessage: "",
    isTouched: false,
    isValid: true,
    validator: (value: string) =>
      value.length > 0 ? "" : "Must be Same as Password",
  });
  const [skills, setSkills] = useState<InputObject>({
    value: "",
    errorMessage: "",
    isTouched: false,
    isValid: true,
    validator: (value: string) => (value.length > 0 ? "" : "Is mandatory"),
  });

  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch<
    ThunkDispatch<RootState, ExtraThunkArguments, Action<any>>
  >();

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
  return (
    <Layout>
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-xl w-full rounded-2xl p-8 bg-white popup  flex flex-col items-stretch">
          {isLoading ? (
            <p>Loading</p>
          ) : (
            <>
              <Title title="Signup" />
              <div className="py-3 w-full">
                <label>
                  <p className="m-0 p-0 text-sm secondary">I'm a*</p>
                  <button
                    className={
                      role === 0
                        ? "primary-button mr-5 w-40"
                        : "mr-5 border-blue-300 border-2 w-40  rounded-md p-3 bg-blue-100 secondary"
                    }
                    onClick={setRole.bind({}, 0)}
                  >
                    Recruiter
                  </button>
                  <button
                    className={
                      role === 1
                        ? "primary-button mr-5 w-40"
                        : "mr-5 border-blue-300 border-2 w-40  rounded-md p-3 bg-blue-100 secondary"
                    }
                    onClick={setRole.bind({}, 1)}
                  >
                    Candidate
                  </button>
                </label>
              </div>
              <Input
                label="Full Name*"
                {...propsToPass(name, setName)}
                placeholder="Enter your full name"
                type="text"
              />
              <Input
                label="Email Address*"
                {...propsToPass(email, setEmail)}
                placeholder="Enter your email"
                type="text"
              />
              <div className="flex justify-between items-stretch">
                <Input
                  label="Password*"
                  {...propsToPass(password, setPassword)}
                  placeholder="Enter your email"
                  type="password"
                />
                <Input
                  label="Confirm Password*"
                  {...propsToPass(confirmPassword, setConfirmPassword)}
                  placeholder="Enter your email"
                  type="password"
                />
              </div>
              <Input
                label="Skills*"
                {...propsToPass(skills, setSkills)}
                placeholder="Enter comma separated skills"
                type="text"
              />
              <div className="flex flex-col items-center justify-center">
                <button
                  className="primary-button"
                  onClick={() => {
                    if (
                      !email.validator(email.value) &&
                      !name.validator(name.value) &&
                      !confirmPassword.validator(confirmPassword.value) &&
                      !password.validator(password.value) &&
                      !skills.validator(skills.value) &&
                      (role === 0 || role === 1) &&
                      password.value === confirmPassword.value
                    ) {
                      dispatch(
                        performRegsiterationThunk({
                          confirmPassword: confirmPassword.value,
                          email: email.value,
                          name: name.value,
                          password: password.value,
                          skills: skills.value,
                          userRole: role,
                        })
                      )
                        .then((data) => {
                          history.push(RouteConstant.dashboard);
                        })
                        .catch((err) => {
                          alert(err.message);
                          setIsLoading(false);
                        });
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
                  Signup
                </button>
                <p className="my-3">
                  Have an account?
                  <Link to={RouteConstant.login} className="primary">
                    Login
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default RegisterScreen;
