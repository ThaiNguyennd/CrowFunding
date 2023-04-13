import React from "react";

const CamPaignMeta = ({ amount = "$2,000", raised = "Raised of $1,900" ,className=""}) => {
  return (
      <div className={`flex flex-col ${className}`}>
      <span className="font-semibold  text-text2  dark:text-text4">
        {amount}
      </span>
      <span className="font-normal text-text4  dark:text-text3">{raised}</span>
    </div>
  );
};

export default CamPaignMeta;
