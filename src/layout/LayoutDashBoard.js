import React from "react";
import DashBoardHeader from "../modules/dashboards/DashBoardHeader";
import DashBoardSideBar from "../modules/dashboards/DashBoardSideBar";

const LayoutDashBoard = ({ children }) => {
  return (
    <div className="p-10 bg-lite dark:bg-dark z-10  ">
      <DashBoardHeader></DashBoardHeader>
      <div className="flex items-start gap-x-10">
        <DashBoardSideBar></DashBoardSideBar>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashBoard;
