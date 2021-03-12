import _ from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Breadcrumb from "../../components/Breadcrumb";
import { JobCard } from "../../components/JobCard";
import Layout from "../../components/Layout";
import { Title } from "../../components/Title";
import UserCard from "../../components/UserCard";
import applyForJobThunk from "../../redux-thunk/candidates/thunk/applyForJobThunk";
import getAvailableJobsThunk from "../../redux-thunk/candidates/thunk/getAvailableJobsThunk";
import getPostedJobsThunk from "../../redux-thunk/recruiters/thunk/getPostedJobsThunk";
import getSingleJobCandidateThunk from "../../redux-thunk/recruiters/thunk/getSingleJobCandidateThunk";
const DashboardScreen = () => {
  const { isLoggedIn, role } = useSelector(
    (state: RootState) => state.appState
  );
  const { postedJobs, candiatesForSelectedJob } = useSelector(
    (state: RootState) => state.recuiter
  );
  const { availableJobs } = useSelector((state: RootState) => state.candidate);

  const [, setIsLoading] = useState(false);
  const dispatch = useDispatch<
    ThunkDispatch<RootState, ExtraThunkArguments, Action<any>>
  >();

  const [viewApplicatsFor, setViewApplicantsFor] = useState("");
  useEffect(() => {
    setIsLoading(true);
    if (role === "recruiter") {
      dispatch(getPostedJobsThunk()).catch((err) => alert(err.message));
    } else if (role === "candidate") {
      dispatch(getAvailableJobsThunk()).catch((err) => alert(err.message));
    }
  }, [dispatch, role]);
  if (!role || !isLoggedIn) {
    return <Redirect to="/" />;
  }
  if (role === "recruiter") {
    return (
      <Layout high={false}>
        <Breadcrumb />
        <Title type="light" title="Jobs posted by you" />

        {postedJobs.length > 0 ? (
          <div className="grid grid-flow-row grid-cols-4 grid-rows-3 gap-10 place-items-stretch items-stretch ">
            {_.map(
              [
                ...postedJobs,
                ...postedJobs,
                ...postedJobs,
                ...postedJobs,
                ...postedJobs,
              ],
              (job, idx) => (
                <JobCard
                  role="recruiter"
                  key={idx}
                  data={job}
                  onClick={(id) => {
                    setViewApplicantsFor(id);
                    dispatch(
                      getSingleJobCandidateThunk({
                        jobId: id,
                      })
                    ).catch((err) => alert(err.message));
                  }}
                />
              )
            )}
          </div>
        ) : (
          <Title title="No Posted Jobs" />
        )}
        {viewApplicatsFor && (
          <div className="w-screen fixed h-screen top-0 left-0 flex items-center justify-center z-10 bg-opacity-60 bg-black">
            <div className="max-w-2xl w-full rounded-2xl p-8 bg-white  ">
              <div className="flex flex-row items-center justify-between">
                <h4 className="capitalize font-semibold text-xl">
                  Applicants for this job
                </h4>
                <button onClick={() => setViewApplicantsFor("")}>X</button>
              </div>
              <div className="divide-x-8 divide-black divide-double" />
              <div className="my-3.5 bg-gray-300 p-2 max-h-80 grid grid-cols-2 gap-5 rounded-md overflow-y-auto">
                {candiatesForSelectedJob.map((candidate, idx) => (
                  <UserCard key={idx} data={candidate} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Layout>
    );
  } else if (role === "candidate") {
    return (
      <>
        <Layout>
          <Breadcrumb />
          <Title type="light" title="Jobs applied by you" />
          {availableJobs.length > 0 ? (
            <div className="grid grid-flow-row grid-cols-4 grid-rows-3 gap-10 place-items-stretch items-stretch ">
              {_.map(_.take(availableJobs, 12), (job, idx) => (
                <JobCard
                  role="candidate"
                  key={idx}
                  data={job}
                  onClick={(id) => {
                    dispatch(
                      applyForJobThunk({
                        jobId: id,
                      })
                    ).catch((err) => alert(err.message));
                  }}
                />
              ))}
            </div>
          ) : (
            <Title title="No Posted Jobs" />
          )}
        </Layout>
      </>
    );
  }
  return <p>OOPS</p>;
};

export default DashboardScreen;
