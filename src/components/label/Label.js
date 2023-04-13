import React from "react";
import propTypes from "prop-types";

const Label = ({ children, htmlFor="", className = "" }) => {
  return (
    <div
      htmlFor={htmlFor}
      className={`font-medium lg:font-semibold text-sm lg:text-lg inline-block cursor-pointer text-text2 mb-3 ${className}`}
    >
      {children}
    </div>
  );
};
Label.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  htmlFor: propTypes.string,
};
export default Label;
