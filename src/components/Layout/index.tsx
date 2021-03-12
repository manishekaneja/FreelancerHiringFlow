import React, { FC } from "react";
import Header from "../Header";
import "./layout.scss";

const Layout: FC<LayoutProps> = ({ children, className = "",high=true }) => {
  return (
    <div className="min-h-screen w-screen relative p-0 base z-0">
      <div className="w-screen base-layer absolute left-0 top-0 z-0 shadow-sm" style={{height:high?"46%":210}}></div>
      <div className={`max-w-7xl h-full z-0 relative m-auto`}>
        <Header />
        <div className="fixed-box">

        {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
