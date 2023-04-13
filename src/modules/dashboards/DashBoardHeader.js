import React from "react";
import { Link } from "react-router-dom";
import DashBoardSearch from "./DashBoardSearch";
import Button from "../../components/button/Button";
import DashBoardFund from "./DashBoardFund";

const DashBoardHeader = () => {
  return (
    <div className="flex items-center justify-between mb-8 " >
      <div className="flex items-center flex-1 gap-x-10">
        <Link to="/" className="inline-block">
          <img src="/Logo.png " alt="crowfunding-app" />
        </Link>
        <div className=" max-w-[458px] w-full">
          <DashBoardSearch></DashBoardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashBoardFund></DashBoardFund>
        <Button
          className="px-7 bg-secondary w-full "
          type="button"
          href="/start-campaign"
          kind="secondary"
        >
          Start a campaign
        </Button>
        <img
          srcSet="/Logo.png "
          alt="crowfunding-app"
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default DashBoardHeader;
