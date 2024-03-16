import { RadioGroup, Text } from "@radix-ui/themes";
import React from "react";
import { useLocation } from "react-router-dom";

const Options = ({ option, index, que }) => {
  const location = useLocation();
  const letters = ["A", "B", "C", "D"]
  return (
    <div>
      <input
        type="radio"
        className={`cursor-pointer ${
          location.pathname.includes("/admin") ? "hidden" : ""
        }`}
        name={que}
        id={option}
        value={letters[index]}
      />
      <label htmlFor={option} className=" ml-3 cursor-pointer">
        {option}
      </label>
    </div>
  );
};

export default Options;
