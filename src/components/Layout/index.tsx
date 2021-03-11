import React, { FC } from "react";
import "./layout.scss";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen relative p-0 base z-0">
      <div className="h-3/6 w-screen base-layer absolute left-0 top-0 z-0 shadow-sm "></div>
      <div className="max-w-7xl z-0 relative m-auto">
        
        {/* <Header /> */}
        
        {children}
        </div>
    </div>
  );
};

export default Layout;
