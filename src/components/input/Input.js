import React from "react";
import { useController } from "react-hook-form";
import propTpes from "prop-types";
const Input = ({
  type = "text",
  control,
  erros = "",
  name,
  placeholder = "",
  autoComplete = "",
  children,
  ...rest
}) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <div className="relative">
      <input
        autoComplete="off"
        id={name}
        placeholder={placeholder}
        type={type}
        className={`w-full px-6 py-4 text-sm font-semibold lg:font-semibold k  rounded-xl outline-none text-text1 placeholder:text-text4 placeholder:font-normal dark:text-white  dark:bg-darksecondary ${
          erros ? "border border-erros" : "border border-strock"
        }`}
        {...field}
        {...rest}
      />
      {children && (
        <span
          className={`absolute cursor-pointer select-none right-6  ${
            erros ? "top-2/4 -translate-y-3/4" : "top-2/4 -translate-y-2/4"
          } `}
        >
          {children}
        </span>
      )}
      <div>
        {erros && <span className="text-sm text-erros mt-1   ">{erros}</span>}
      </div>
    </div>
  );
};
Input.propTpes = {
  name: propTpes.string,
  type: propTpes.string,
  control: propTpes.any.require,
};
export default Input;
