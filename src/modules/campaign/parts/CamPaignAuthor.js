import React from "react";

const CamPaignAuthor = ({
  src = "https://plus.unsplash.com/premium_photo-1675511339014-53e4683a3953?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  children,
}) => {
  return (
    <div className="flex items-center gap-x-2 mt-5">
      <img
        src={src}
        alt=""
        className="w-[30px] h-[30px] object-cover rounded-full"
      />
      <p className="text-text3">
        By{" "}
        <span className="font-semibold text-text2 dark:text-text4">
          {children}
        </span>
      </p>
    </div>
  );
};

export default CamPaignAuthor;
