import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = ({ placeholder, ...props }) => {
  const { onChange } = useDropdown();
  return (
    <div className="sticky top-0 z-10 p-2 bg-white dark:bg-darksecondary dark:text-white text-text1">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-4 border border-gray-200 rounded outline-none dark:text-text1"
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Search;
