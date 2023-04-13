import React, { useEffect } from "react";
import LayoutDashBoard from "../layout/LayoutDashBoard";
import HeadingDashboard from "../components/commom/HeadingDashboard";
import LayoutGridDashboard from "../layout/LayoutGridDashboard";
import CamPaignItem from "../modules/campaign/CamPaignItem";
import { v4 } from "uuid";
import CamPaignFeature from "../modules/campaign/CamPaignFeature";
import OverLay from "../layout/OverLay";

const DashBoadPage = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <LayoutDashBoard>
      <HeadingDashboard number="4">Your Campaign</HeadingDashboard>
      <OverLay></OverLay>
      <CamPaignFeature></CamPaignFeature>
      <HeadingDashboard>Popular Campaign</HeadingDashboard>
      <LayoutGridDashboard>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CamPaignItem key={v4()}></CamPaignItem>
          ))}
      </LayoutGridDashboard>
    </LayoutDashBoard>
  );
};

export default DashBoadPage;
