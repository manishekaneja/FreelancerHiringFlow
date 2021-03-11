import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import RouteConstant from "../../utils/RouteConstant";
import "./header.scss";

const Header: FC<HeaderProps> = () => {
  const history = useHistory();
  return (
    <>
      <div className="flex py-3 items-stretch justify-between w-full">
        <h2 className="header-title">
          <span className="text-white">My</span>
          <span className="primary">Jobs</span>
        </h2>
        <button className="inset-button" onClick={()=>history.push(RouteConstant.login)}>
          <p>Login/Signup</p>
        </button>
      </div>
      <div className="bg-white h-px opacity-30" />
    </>
  );
};

export default Header;
