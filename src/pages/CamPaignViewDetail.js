import React from "react";
import LayoutDashBoard from "../layout/LayoutDashBoard";
import CamPaignImage from "../modules/campaign/parts/CamPaignImage";
import CamPaignCategory from "../modules/campaign/parts/CamPaignCategory";
import CamPaignTitle from "../modules/campaign/parts/CamPaignTitle";
import CamPaignDesc from "../modules/campaign/parts/CamPaignDesc";
import CamPaignMeta from "../modules/campaign/parts/CamPaignMeta";
import Button from "../components/button/Button";
import { v4 } from "uuid";
import { Label } from "../components/label";
import CampaignPeck from "../modules/campaign/CampaignPeck";
import LayoutGridDashboard from "../layout/LayoutGridDashboard";
import CamPaignItem from "../modules/campaign/CamPaignItem";

const CamPaignViewDetail = () => {
  return (
    <LayoutDashBoard>
      <div className="banner w-full h-[140px] bg-no-repeat bg-cover bg-opacity-40 flex items-center mx-auto justify-center rounded-lg mb-20">
        <h1 className=" text-white font-bold text-4xl ">Education</h1>
      </div>
      <div className="flex  gap-x-10 justify-start items-start mb-[165px] ">
        <div className="flex flex-col   gap-y-5 max-w-[600px] flex-1 ">
          <CamPaignImage className="h-[400px]  w-full  object-cover  "></CamPaignImage>
          <div className="flex items-center gap-x-4 mx-auto  ">
            {Array(4)
              .fill(0)
              .map((item) => (
                <img
                  key={v4()}
                  src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="w-[90px] h-[70px] object-cover rounded-lg"
                />
              ))}
          </div>
        </div>
        <div className="w-full max-w-[500px]">
          <CamPaignCategory></CamPaignCategory>
          <CamPaignTitle className="font-bold text-2xl"></CamPaignTitle>
          <CamPaignDesc className="font-medium "></CamPaignDesc>
          <div className="flex gap-x-5 items-center my-5">
            <div className="flex flex-col gap-y-7">
              <img
                src="https://images.unsplash.com/photo-1681290617012-aa3774ebe872?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-[60px] h-[60px] object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-x-3">
                <span className="font-semibold text-text1 dark:text-white text-xl">
                  Saiful Islam
                </span>
                ⭐ ⭐ ⭐ ⭐ ⭐
              </div>
              <div className="flex items-center gap-x-2">
                <span className="font-semibold text-primary text-lg">
                  02 Campaign
                </span>
                <span className="w-2 h-2 rounded-full bg-text4"></span>
                <span className="font-medium text-text3">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-[5px] bg-[#3A3A43] my-7">
            <div className="w-2/4 h-full bg-primary"></div>
          </div>
          <div className="flex items-center justify-between">
            <CamPaignMeta className=" text-xl"></CamPaignMeta>
            <CamPaignMeta className=" text-xl"></CamPaignMeta>
            <CamPaignMeta className=" text-xl"></CamPaignMeta>
          </div>
          <Button className="px-6 py-5 bg-primary text-white rounded-lg font-bold text-xl mt-5 w-full text-center">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center  justify-between  py-6 px-10 rounded-xl bg-white dark:bg-darksecondary shadow  ">
        <div className="flex items-center gap-x-5  text-text2 dark:text-strock text-sm mb-8">
          <span className="text-primary">Campaign</span>
          <span>Risks</span>
          <span>FAQ</span>
          <span>Updates</span>
          <span>Comments</span>
        </div>
        <Button className="px-5 py-3 bg-primary text-white rounded-lg ">
          {" "}
          Back this project
        </Button>
      </div>
      <div className="grid grid-cols-[1.4fr,1fr] gap-x-[124px] mt-10">
        <div>
          <Label>Story</Label>
        </div>
        <div>
          <Label>Support</Label>
          <div className="px-8 py-5 bg-white dark:bg-darksecondary rounded-lg">
            <span className="text-center text-text3 font-semibold text-xl block px-3 py-3 mb-5">
              Pledge without reward
            </span>
            <input
              type="text"
              className="w-full px-6 py-4 text-sm font-semibold lg:font-semibold k  rounded-xl outline-none text-text1 placeholder:text-text4 placeholder:font-normal dark:text-white  dark:bg-darksecondary border border-strock"
              placeholder="$10"
            />
            <div className="dark:bg-dark bg-[#F6F6F6] p-4 my-5 rounded-lg">
              <h2 className="font-semibold text-lg text-text1 dark:text-lite">
                Back it because you believe in it.
              </h2>
              <span className="mt-5 text-text3 font-normal text-sm">
                Support the project for no reward, just because it speaks to
                you.
              </span>
              <Button className="py-3 w-full text-white bg-secondary">
                Continue
              </Button>
            </div>
          </div>
          <CampaignPeck></CampaignPeck>
          <CampaignPeck></CampaignPeck>
          <CampaignPeck></CampaignPeck>
        </div>
      </div>
      <div className="my-[70px]">
        <p className="text-2xl font-bold text-text1 dark:text-white mb-10">
          You also may be interested in
        </p>
        <LayoutGridDashboard>
          <CamPaignItem></CamPaignItem>
          <CamPaignItem></CamPaignItem>
          <CamPaignItem></CamPaignItem>
          <CamPaignItem></CamPaignItem>
        </LayoutGridDashboard>
      </div>
    </LayoutDashBoard>
  );
};

export default CamPaignViewDetail;
