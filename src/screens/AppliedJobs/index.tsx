import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Breadcrumb from "../../components/Breadcrumb";
import { JobCard } from "../../components/JobCard";
import Layout from "../../components/Layout";
import { Title } from "../../components/Title";
import getAvailableJobsThunk from "../../redux-thunk/candidates/thunk/getAvailableJobsThunk";

const AppliedJobScreen = () => {
  const { isLoggedIn, role } = useSelector(
    (state: RootState) => state.appState
  );
  const { postedJobs } = useSelector((state: RootState) => state.recuiter);
  const [isloading, setIsLoading] = useState(false);
  const dispatch = useDispatch<
    ThunkDispatch<RootState, ExtraThunkArguments, Action<any>>
  >();
  useEffect(() => {
    setIsLoading(true);
    if (role === "candidate") {
      dispatch(getAvailableJobsThunk())
        .then((data) => {
          console.log({ data });
          setIsLoading(false);
        })
        .catch((err) => {
          console.log({ err });
          setIsLoading(false);
        });
    }
  }, [dispatch, role]);

  if (role !== "candidate" || !isLoggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <Layout>
        <Breadcrumb />
        <Title type="light" title="Jobs posted by you" />
        {isloading ? (
          <Title type="dark" title="Loading..." />
        ) : postedJobs.length > 0 ? (
          <div className="flex flex-wrap">
            {postedJobs.map((job, idx) => (
              <JobCard role="candidate" key={idx} data={job} />
            ))}
          </div>
        ) : (
          <Title type="dark" title="No Posted Jobs" />
        )}
      </Layout>
    );
  }
};

export default AppliedJobScreen;
