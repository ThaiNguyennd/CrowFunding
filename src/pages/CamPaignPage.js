import React, { useEffect } from "react";
import LayoutDashBoard from "../layout/LayoutDashBoard";
import Button from "../components/button/Button";
import HeadingDashboard from "../components/commom/HeadingDashboard";
import CamPaignFeature from "../modules/campaign/CamPaignFeature";
import { NavLink } from "react-router-dom";

const CamPaignPage = () => {
  useEffect(() => {
    document.title = "Campaign";
  }, []);
  return (
    <LayoutDashBoard>
      <div className="bg-white dark:bg-darksecondary w-full flex items-center justify-between px-10 py-8 mb-10">
        <div className="flex items-center gap-x-6">
          <div className="w-[50px] h-[50px] rounded-full bg-secondary text-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl text-text1 dark:text-white font-semibold mb-3">
              Create Your Campaign
            </h2>
            <span className="text-text3 dark:text-text3 font-normal text-sm mb-3">
              Jump right into our editor and create your first Virtue campaign!
            </span>
            <span className="text-primary font-normal text-sm">
              Need any help? Learn More...
            </span>
          </div>
        </div>
    <NavLink to="/start-campaign">
          <Button className="px-8 py-3 bg-secondary !text-secondary bg-opacity-10">
            Create campaign
          </Button>
        </NavLink>
      </div>
      <HeadingDashboard number="4">Your Campaign </HeadingDashboard>
      <CamPaignFeature></CamPaignFeature>
      <CamPaignFeature></CamPaignFeature>
      <CamPaignFeature></CamPaignFeature>
      <CamPaignFeature></CamPaignFeature>
    </LayoutDashBoard>
  );
};

export default CamPaignPage;
