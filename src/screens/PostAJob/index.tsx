import { ChangeEvent, FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Breadcrumb from "../../components/Breadcrumb";
import Layout from "../../components/Layout";
import createJobThunk from "../../redux-thunk/job/thunk/createJobThunk";
import RouteConstant from "../../utils/RouteConstant";

const PostAJobScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch<
    ThunkDispatch<RootState, ExtraThunkArguments, Action<any>>
  >();

  const onPost = useCallback(() => {
    setIsLoading(true);
    dispatch(
      createJobThunk({
        title,
        description,
        location,
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
  }, [dispatch, description, title, history, location]);
  return (
    <Layout>
      <div className="h-full w-full flex flex-col items-stretch justify-center">
        <Breadcrumb />
        <div className="flex justify-center items-center flex-1">
          <div className="max-w-xl w-full rounded-2xl p-8 bg-white popup">
            {isLoading ? (
              <p>Loading</p>
            ) : (
              <>
                <SubTitle title="Post a Job" />
                <div className="my-3.5" />
                <Input
                  label="Job Title"
                  value={title}
                  onChange={setTitle}
                  placeholder="Enter your Email"
                  type="text"
                />
                <Input
                  label="Description*"
                  value={description}
                  onChange={setDescription}
                  placeholder="Enter your Email"
                  type="text"
                />
                <Input
                  label="Location*"
                  value={location}
                  onChange={setLocation}
                  placeholder="Enter your Email"
                  type="text"
                />
                <button className="primary-button" onClick={onPost}>
                  Post
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostAJobScreen;

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
