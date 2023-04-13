import React from "react";

const ButtonGoogle = ({ text = "" }) => {
  return (
    <button className="flex items-center justify-center w-full py-3 mb-5 lg:mb-6 border font-semibold lg:text-base border-strock gap-x-3 rounded-xl text-text2 dark:text-white ">
      <img src="/icon-gg.png" alt="" />
      <span className="">{text}</span>
    </button>
  );
};

export default ButtonGoogle;
