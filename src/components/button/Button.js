import React from "react";
import propTypes from "prop-types";

const Button = ({ children, type = "", className = "", isLoading = false }) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      type={type}
      className={` rounded-xl py-3 text-white font-bold mt-3 ${className} `}
    >
      {child}{" "}
    </button>
  );
};
Button.propTypes = {
  type: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  isLoading : propTypes.bool
};
export default Button;
