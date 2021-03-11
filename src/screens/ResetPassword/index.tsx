import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Layout from "../../components/Layout";
import changePasswordThunk from "../../redux-thunk/auth/thunk/changePasswordThunk";

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch<
    ThunkDispatch<RootState, ExtraThunkArguments, Action<any>>
  >();

  return (
    <Layout>
      <div className="w-full flex py-60 justify-center items-center">
        <div className="max-w-xl w-full rounded-2xl p-8 bg-white shadow">
          <SubTitle title="Reset Your Password" />
          <div className="my-3.5" />
          <p className="m-0 p-0 text-sm secondary">
            Enter your new password below.
          </p>
          <Input
            label="New Password"
            value={password}
            onChange={setPassword}
            placeholder="Enter your email"
            type="text"
          />
          <Input
            label="Confirm New Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder="Enter your email"
            type="text"
          />
          <button
            className="primary-button"
            onClick={() => {
              const token =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmlzaGVrYW5lamFAZ21haWwuY29tIiwiaWF0IjoxNjE1NDkzMTEwLCJleHAiOjE2MTU0OTY3MTB9.yaQ-hM_hOIbqptF-fbgDZvLDjWhsiOKoAC2p0ZCfqfk";
              dispatch(
                changePasswordThunk({
                  confirmPassword,
                  password,
                  token,
                })
              )
                .then((data: any) => {
                  console.log({ data });
                })
                .catch((error: any) => {
                  console.log(error);
                });
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPasswordScreen;

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
