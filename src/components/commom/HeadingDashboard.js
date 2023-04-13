import React from "react";

const HeadingDashboard = ({ children, number = null }) => {
  return (
    <span className="font-bold  text-text1 dark:text-white text-4xl mb-10 w-full inline-block">
      {children}
      {number && <span className="text-secondary">{`(${number})`}</span>}
    </span>
  );
};

export default HeadingDashboard;
