import React from "react";

const CamPaignTitle = ({
  children = "Remake - We Make architecture exhibition",
  size = "small",
  className = "",
}) => {
  return (
    <h3
      className={` text-text1 text-base font-semibold dark:text-white mb-1 
         ${className}`}
    >
      {children}
    </h3>
  );
};

export default CamPaignTitle;
