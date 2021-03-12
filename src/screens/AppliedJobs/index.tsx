import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Breadcrumb from "../../components/Breadcrumb";
import { JobCard } from "../../components/JobCard";
import Layout from "../../components/Layout";
import { Title } from "../../components/Title";
import alreadyAppliedJobsThunk from "../../redux-thunk/candidates/thunk/alreadyAppliedJobsThunk";

const AppliedJobScreen = () => {
  const { isLoggedIn, role } = useSelector(
    (state: RootState) => state.appState
  );
  const { appliedJobs } = useSelector((state: RootState) => state.candidate);
  const [isloading, setIsLoading] = useState(false);
  const dispatch = useDispatch<
    ThunkDispatch<RootState, ExtraThunkArguments, Action<any>>
  >();
  useEffect(() => {
    setIsLoading(true);
    if (role === "candidate") {
      dispatch(alreadyAppliedJobsThunk())
        .then((data) => {
          setIsLoading(false);
        })
        .catch((err) => {
          alert(err.message)
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
        ) : appliedJobs.length > 0 ? (
          <div className="grid grid-flow-row grid-cols-4 grid-rows-3 gap-10 place-items-stretch items-stretch ">
            {appliedJobs.map((job, idx) => (
              <JobCard role="candidate" key={idx} data={job} />
            ))}
          </div>
        ) : (
          <Title type="light" title="No Posted Jobs" />
        )}
      </Layout>
    );
  }
};

export default AppliedJobScreen;
