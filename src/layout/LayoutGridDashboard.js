import React from "react";

const LayoutGridDashboard = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-4 gap-x-8 w-full md:grid md:grid-cols-2 md:gap-y-8 ">
      {children}
    </div>
  );
};

export default LayoutGridDashboard;
