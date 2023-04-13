import React from "react";

const LayoutGridDashboard = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-x-8 w-full md:grid md:grid-cols-3 md:gap-y-6">
      {children}
    </div>
  );
};

export default LayoutGridDashboard;
