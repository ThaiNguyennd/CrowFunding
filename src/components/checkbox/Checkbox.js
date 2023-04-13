import React from "react";

const Checkbox = ({
  checked = false,
  onClick = () => {},
  name = "",
  children,
  className = "",
}) => {
  return (
    <div className="flex items-start gap-x-3">
      <div
        className={`
       ${className} w-5 h-5 border  cursor-pointer rounded inline-flex items-center justify-center mt-2 text-white ${
          checked ? " bg-primary border-primary" : "border-strock"
        } `}
        onClick={onClick}
      >
        <input type="checkbox" className="hidden" name={name} />
        <span className={`${checked ?"":" opacity-0 invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </div>
      {children && (
        <div className="cursor-pointer select-none" onClick={onClick}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
