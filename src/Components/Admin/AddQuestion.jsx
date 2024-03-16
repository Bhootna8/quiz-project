import { Select } from "@radix-ui/themes";
import React from "react";
import { useLocation } from "react-router-dom";

const AddQuestion = () => {
  const location = useLocation();
  let no = [1, 2, 3, 4];
  return (
    <div
      className={`${location.pathname.includes("add") ? "flex" : "hidden"} `}
    >
      <div className=" flex flex-wrap items-center w-[70%] py-5 justify-between px-3">
        <Select.Root defaultValue="general knowledge">
          <Select.Trigger />
          <Select.Content position="popper">
            <Select.Item value="general knowledge">
              General Knowledge
            </Select.Item>
            <Select.Item value="science">Science</Select.Item>
            <Select.Item value="history">History</Select.Item>
            <Select.Item value="techonology">Technology</Select.Item>
            <Select.Item value="geography">Geography</Select.Item>
          </Select.Content>
        </Select.Root>
        <input
          type="text"
          placeholder="write the question"
          className=" w-full px-2 py-1 text-lg mt-3 border-[#86aabe] border rounded-md mb-2"
        />
        {no.map((no) => (
          <input
            type="text"
            className=" w-[24%] px-1 py-1 text-lg border-[#86aabe] border rounded-md"
            placeholder={`option ${no}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AddQuestion;
