import React from "react";
import CamPaignImage from "./parts/CamPaignImage";
import CamPaignCategory from "./parts/CamPaignCategory";
import CamPaignTitle from "./parts/CamPaignTitle";
import CamPaignDesc from "./parts/CamPaignDesc";
import CamPaignMeta from "./parts/CamPaignMeta";

const CamPaignFeature = () => {
  return (
    <div className="flex  gap-x-10 mb-10">
      <CamPaignImage className="h-[266px] w-full max-w-[600px]"></CamPaignImage>
      <div className="w-full max-w-[500px]">
        <CamPaignCategory></CamPaignCategory>
        <CamPaignTitle className="font-bold text-2xl"></CamPaignTitle>
        <CamPaignDesc className="font-medium "></CamPaignDesc>
        <div className="w-full h-[5px] bg-[#3A3A43] my-7">
          <div className="w-2/4 h-full bg-primary"></div>
        </div>
        <div className="flex items-center justify-between">
          <CamPaignMeta className=" text-xl"></CamPaignMeta>
          <CamPaignMeta className=" text-xl"></CamPaignMeta>
          <CamPaignMeta className=" text-xl"></CamPaignMeta>
        </div>
      </div>
    </div>
  );
};

export default CamPaignFeature;
