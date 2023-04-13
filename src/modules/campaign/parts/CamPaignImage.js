import React from "react";

const CamPaignImage = ({
  src = "https://images.unsplash.com/photo-1623194466839-7e314f961c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  className = "h-full max-h-[158px] w-full  ",
}) => {
  return (
    <div className={className}>
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default CamPaignImage;
