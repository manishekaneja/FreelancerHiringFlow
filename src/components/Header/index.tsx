import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { setLoggedInState } from "../../redux-thunk/applicationState/applicationState";
import { resetUser } from "../../redux-thunk/auth/userReducer";
import RouteConstant from "../../utils/RouteConstant";
import { Avatar } from "../Avatar";
import "./header.scss";

const Header: FC<HeaderProps> = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const inAuthScreen =
    pathname === RouteConstant.login ||
    pathname === RouteConstant.register ||
    pathname === RouteConstant.forgetPassword ||
    pathname === RouteConstant.resetPassword;

  const { isLoggedIn, role } = useSelector(
    (state: RootState) => state.appState
  );
  const { name } = useSelector((state: RootState) => state.user);

  return (
    <>
      <div className="flex h-20 py-0 items-stretch justify-between w-full">
        <h2 className="header-title">
          <span className="text-white">My</span>
          <span className="primary">Jobs</span>
        </h2>
        {isLoggedIn ? (
          <div className="flex">
            {role === "recruiter" && (
              <NavLink
                activeClassName="border-blue-400"
                to={RouteConstant.postAJob}
                className="secondary  mx-4 px-3 border-transparent border-b-2 flex items-center justify-center"
              >
                <p className="p-0 m-0 text-white font-normal">Post a Job</p>
              </NavLink>
            )}
            {role === "candidate" && (
              <NavLink
                activeClassName="border-blue-400"
                to={RouteConstant.appliedJobs}
                className="secondary  mx-4 px-3 border-transparent border-b-2 flex items-center justify-center"
              >
                <p className="p-0 m-0 text-white font-normal">Applied Jobs</p>
              </NavLink>
            )}

            <button
              onClick={() => {
                dispatch(resetUser());
                dispatch(setLoggedInState(false));
                history.push(RouteConstant.login);
              }}
              className="flex items-center"
            >
              <Avatar str={name} />
              <div
                className="border-8 border-transparent mt-3"
                style={{ borderTopColor: "white" }}
              />
            </button>
          </div>
        ) : (
          !inAuthScreen && (
            <div className="flex py-3 justify-center items-center">
              <button
                className="inset-button p-10"
                onClick={() => history.push(RouteConstant.login)}
              >
                <p>Login/Signup</p>
              </button>
            </div>
          )
        )}
      </div>
      <div className="bg-white h-px opacity-30" />
    </>
  );
};

export default Header;
