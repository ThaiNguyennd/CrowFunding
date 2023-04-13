import React from "react";

const DashBoardFund = () => {
  return (
    <div className="flex items-center text-base font-medium cursor-pointer gap-x-2 text-text2 w-full dark:text-white justify-end  ">
      <svg
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 2.293L11.707 6.586L7.707 2.586L0 10.293L1.414 11.707L7.707 5.414L11.707 9.414L17.414 3.707L19.707 6V0H13.707L16 2.293Z"
          fill="#A2A2A8"
        />
      </svg>
      <span>Fundrising for</span>
      <span className="w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 max-w-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </div>
  );
};

export default DashBoardFund;
