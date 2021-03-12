import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Breadcrumb from "../../components/Breadcrumb";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import { Title } from "../../components/Title";
import createJobThunk from "../../redux-thunk/job/thunk/createJobThunk";
import RouteConstant from "../../utils/RouteConstant";

const PostAJobScreen = () => {
  const title = useState<InputObject>({
    value: "",
    errorMessage: "",
    isTouched: false,
    isValid: true,
    validator: (value: string) => (value.length > 0 ? "" : "Is mandatory"),
  });
  const description = useState<InputObject>({
    value: "",
    errorMessage: "",
    isTouched: false,
    isValid: true,
    validator: (value: string) => (value.length > 0 ? "" : "Is mandatory"),
  });
  const location = useState<InputObject>({
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

  const onPost = useCallback(() => {
    if (
      !title[0].validator(title[0].value) &&
      !description[0].validator(description[0].value) &&
      !location[0].validator(location[0].value)
    ) {
      setIsLoading(true);
      dispatch(
        createJobThunk({
          title: title[0].value,
          description: description[0].value,
          location: location[0].value,
        })
      )
        .then((data) => {
          history.push(RouteConstant.dashboard);
        })
        .catch((err) => {
          alert(err.message);
          setIsLoading(false);
        });
    }
  }, [dispatch, description, title, history, location]);
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
      <div className="h-full w-full flex flex-col items-stretch justify-center">
        <Breadcrumb />
        <div className="flex justify-center items-center flex-1">
          <div className="max-w-xl w-full rounded-2xl p-8 bg-white popup">
            {isLoading ? (
              <p>Loading</p>
            ) : (
              <>
                <Title title="Post a Job" />
                <div className="my-3.5" />
                <Input
                  label="Job Title"
                  {...propsToPass(...title)}
                  placeholder="Job Title"
                  type="text"
                />
                <Input
                  label="Description*"
                  {...propsToPass(...description)}
                  placeholder="Description"
                  type="text"
                />
                <Input
                  label="Location*"
                  {...propsToPass(...location)}
                  placeholder="Location"
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
