import { ChangeEvent, FC } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import RouteConstant from "../../utils/RouteConstant";

const RegisterScreen = () => {
  return (
    <Layout>
      <div className="w-full flex py-60 justify-center items-center">
        <div className="max-w-xl w-full rounded-2xl p-8 bg-white shadow">
          <SubTitle title="Signup" />
          <div className="my-3.5" />
          <div className="py-3 w-full">
            <label>
              <p className="m-0 p-0 text-sm secondary">I'm a*</p>
              <button className="primary-button">Recruiter</button>
              <button className="primary-button">Candidate</button>

            </label>
          </div>
          <Input
            label="Full Name*"
            value=""
            onChange={(value) => console.log(value)}
            placeholder="Enter your full name"
            type="text"
          />
          <Input
            label="Email Address*"
            value=""
            onChange={(value) => console.log(value)}
            placeholder="Enter your email"
            type="text"
          />
          <div className="flex justify-between items-stretch">
            <Input
              label="Password*"
              value=""
              onChange={(value) => console.log(value)}
              placeholder="Enter your email"
              type="text"
            />
            <Input
              label="Confirm Password*"
              value=""
              onChange={(value) => console.log(value)}
              placeholder="Enter your email"
              type="text"
            />
          </div>
          <Input
            label="Skills*"
            value=""
            onChange={(value) => console.log(value)}
            placeholder="Enter comma separated skills"
            type="text"
          />

          <button className="primary-button">Signup</button>
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
