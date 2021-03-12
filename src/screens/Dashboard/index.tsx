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
import getPostedJobsThunk from "../../redux-thunk/recruiters/thunk/getPostedJobsThunk";
import getSingleJobCandidateThunk from "../../redux-thunk/recruiters/thunk/getSingleJobCandidateThunk";
import _ from "lodash";
const DashboardScreen = () => {
  const { isLoggedIn, role } = useSelector(
    (state: RootState) => state.appState
  );
  const { postedJobs } = useSelector((state: RootState) => state.recuiter);

  const [isloading, setIsLoading] = useState(false);
  const dispatch = useDispatch<
    ThunkDispatch<RootState, ExtraThunkArguments, Action<any>>
  >();

  const [viewApplicatsFor, setViewApplicantsFor] = useState("");
  useEffect(() => {
    setIsLoading(true);
    if (role === "recruiter") {
      dispatch(getPostedJobsThunk())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
    } else if (role === "candidate") {
      dispatch(getAvailableJobsThunk())
        .then((data) => {
          console.log({ data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch, role]);

  if (!role || !isLoggedIn) {
    return <Redirect to="/" />;
  }
  if (role === "recruiter") {
    return (
      <Layout stretch={false}>
        <Breadcrumb />
        <Title type="light" title="Jobs posted by you" />

        {postedJobs.length > 0 ? (
          <div className="grid grid-flow-row grid-cols-4 grid-rows-3 gap-10 place-items-stretch items-stretch ">
            {_.map(
              _.take([...postedJobs, ...postedJobs, ...postedJobs], 12),
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
                    )
                      .then((data) => {
                        console.log(data);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
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
            <div className="max-w-xl w-full rounded-2xl p-8 bg-white  ">
              <h4 className="capitalize font-semibold text-2xl">
                Applicants for this job
              </h4>
              <button onClick={() => setViewApplicantsFor("")}>Close</button>
              <div className="my-3.5" />
            </div>
          </div>
        )}
      </Layout>
    );
  } else if (role === "candidate") {
    return (
      <>
        <Layout>
          <p>Bread crumbs</p>
          <h2>Jobs posted by you</h2>
          {[1, 2, 3].map(() => (
            <p>Card</p>
          ))}
        </Layout>
      </>
    );
  }
  return null;
};

export default DashboardScreen;

// const SubTitle: FC<{ title: string }> = ({ title }) => (
//   <h4 className="capitalize text-white font-semibold text-2xl">{title}</h4>
// );

// const WhiteCard: FC<{
//   data: Job & BasicInfo;
//   onClick: (id: string) => void;
// }> = ({ data: { title, description, location, id }, onClick }) => (
//   <div className="rounded-md mr-3 w-52 px-5 shadow-lg bg-white my-5 max-w-xs">
//     <h3 className="primary text-2xl font-medium my-4">{title}</h3>
//     <p className="p-0 m-0 secondary pb-7 text-sm">{description}</p>
//     <p className="p-0 m-0 secondary pb-7 text-sm">{location}</p>
//     <button onClick={onClick.bind({}, id)}> View Application</button>
//   </div>
// );
