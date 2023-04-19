import React from "react";

const CampaignPeck = () => {
  return (
    <div className="bg-white dark:bg-darksecondary rounded-xl mt-8">
      <div className="h-[250px] w-full">
        <img
          src="https://images.unsplash.com/photo-1491796014055-e6835cdcd4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="mt-5 p-4 ">
        <div className="mb-4">
          {" "}
          <span className="px-3 py-2 bg-secondary text-white rounded-lg mb-5 ">
            Feature
          </span>
        </div>
        <span className="text-text1 dark:text-lite font-semibold text-2xl  ">
          Special One Camera
        </span>
        <div className="flex items-center gap-x-2 mt-3">
          <span className="text-text1 dark:text-lite font-bold text-lg ">
            $2,724 USD
          </span>
          <span className="text-erros font-medium text-lg line-through">
            $1,504 USD
          </span>
          <span className="text-erros font-medium text-sm">(12% OFF)</span>
        </div>
        <div className="flex flex-col gap-y-1 mt-3">
          <strong className="text-text4 font-medium text-lg">
            Estimated Shipping
          </strong>
          <span className="text-sm text-text3 font-normal">October 2022</span>
        </div>
        <div className="flex flex-col gap-y-2 mt-3">
          <span className="text-text3  font-normal text-lg">
            <strong className="font-medium mr-2 text-xl dark:text-white text-text1">
              05
            </strong>
            claimed
          </span>
          <span className="text-text3 font-lg text-lg">Ships worldwide</span>
        </div>
      </div>
    </div>
  );
};

export default CampaignPeck;
