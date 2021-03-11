import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Layout from "../../components/Layout";
import performLoginThunk from "../../redux-thunk/auth/thunk/performLoginThunk";
import RouteConstant from "../../utils/RouteConstant";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch<
    ThunkDispatch<RootState, ExtraThunkArguments, Action<any>>
  >();

  return (
    <Layout>
      <div className="w-full flex py-60 justify-center items-center">
        <div className="max-w-xl w-full rounded-2xl p-8 bg-white">
          <SubTitle title="Login" />
          <div className="my-3.5" />
          <Input
            label="Email address"
            value={email}
            onChange={setEmail}
            placeholder="Enter your Email"
            type="text"
          />
          <Input
            label="Password"
            value={password}
            onChange={setPassword}
            placeholder="Enter your Password"
            type="text"
          />
          <button
            className="primary-button"
            onClick={() => {
              dispatch(
                performLoginThunk({
                  email,
                  password,
                })
              )
                .then((data) => {
                  console.log({ data });
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Login
          </button>
          <p>
            New to My Jobs?
            <Link to={RouteConstant.register} className="primary">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default LoginScreen;

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
    <div className="py-3">
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
