import React from "react";

const CamPaignDesc = ({
  children = "Remake - We Make: an exhibition about architecture's socialagency in the face of urbanisation",
  className="",
}) => {
  return (
    <span className={`text-text3 font-normal text-sm ${className}}`}>
      {children}{" "}
    </span>
  );
};

export default CamPaignDesc;
