import { debounce } from "lodash";
import { useState } from "react";

export default function useOnChange(time = 500) {
  const [value, setValue] = useState();
  const handleOnChange = debounce((e) => {
    setValue(e.target.value);
  }, time);
  return [value, handleOnChange];
}
