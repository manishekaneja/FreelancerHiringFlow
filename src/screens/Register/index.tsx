import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Layout from "../../components/Layout";
import performRegsiterationThunk from "../../redux-thunk/auth/thunk/performRegsiterationThunk";
import RouteConstant from "../../utils/RouteConstant";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(0);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [skills, setSkills] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch<
    ThunkDispatch<RootState, ExtraThunkArguments, Action<any>>
  >();

  return (
    <Layout>
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-xl w-full rounded-2xl p-8 bg-white popup">
          {isLoading ? (
            <p>Loading</p>
          ) : (
            <>
              <SubTitle title="Signup" />
              <div className="my-3.5" />
              <div className="py-3 w-full">
                <label>
                  <p className="m-0 p-0 text-sm secondary">I'm a*</p>
                  <button
                    className={role === 0 ? "primary-button" : ""}
                    onClick={setRole.bind({}, 0)}
                  >
                    Recruiter
                  </button>
                  <button
                    className={role === 1 ? "primary-button" : ""}
                    onClick={setRole.bind({}, 1)}
                  >
                    Candidate
                  </button>
                </label>
              </div>
              <Input
                label="Full Name*"
                value={name}
                onChange={setName}
                placeholder="Enter your full name"
                type="text"
              />
              <Input
                label="Email Address*"
                value={email}
                onChange={setEmail}
                placeholder="Enter your email"
                type="text"
              />
              <div className="flex justify-between items-stretch">
                <Input
                  label="Password*"
                  value={password}
                  onChange={setPassword}
                  placeholder="Enter your email"
                  type="text"
                />
                <Input
                  label="Confirm Password*"
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  placeholder="Enter your email"
                  type="text"
                />
              </div>
              <Input
                label="Skills*"
                value={skills}
                onChange={setSkills}
                placeholder="Enter comma separated skills"
                type="text"
              />

              <button
                className="primary-button"
                onClick={() => {
                  dispatch(
                    performRegsiterationThunk({
                      confirmPassword: confirmPassword,
                      email: email,
                      name: name,
                      password: password,
                      skills: skills,
                      userRole: role,
                    })
                  )
                    .then((data) => {
                      console.log({ data });
                      history.push(RouteConstant.dashboard);
                    })
                    .catch((err) => {
                      console.log(err);
                      setIsLoading(false);
                    });
                }}
              >
                Signup
              </button>
              <p>
                Have an account?
                <Link to={RouteConstant.login} className="primary">
                  Login
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default RegisterScreen;

const SubTitle: FC<{ title: string }> = ({ title }) => (
  <h4 className="capitalize secondary font-semibold text-2xl">{title}</h4>
);

const Input: FC<{
  value: string;
  type: "text" | "number";
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
}> = ({ value, onChange, label, placeholder, type }) => {
  return (
    <div className="py-3 w-full">
      <label>
        <p className="m-0 p-0 text-sm secondary">{label}</p>
        <input
          style={{ borderWidth: 1 }}
          className="border-gray-400 rounded-sm w-full focus:border-blue-400 p-1 border-solid focus:outline-none"
          {...{
            value,
            type,
            placeholder,
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              onChange(event.target.value),
          }}
        />
      </label>
    </div>
  );
};
