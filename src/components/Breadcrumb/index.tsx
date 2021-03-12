import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import RouteConstant from "../../utils/RouteConstant";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-row text-white text-xs font-normal py-4 ">
      <Link to={RouteConstant.dashboard} className="mr-2 hover:underline">
        Home
      </Link>
      {pathname === RouteConstant.postAJob && (
        <span className="mr-2">
          {">  "}
          <Link to={RouteConstant.postAJob} className="hover:underline">
            Post a Job
          </Link>
        </span>
      )}
      {pathname === RouteConstant.appliedJobs && (
        <span className="mr-2">
          {">  "} <Link to={RouteConstant.appliedJobs}>Applied Jobs</Link>
        </span>
      )}
    </div>
  );
};

export default Breadcrumb;
