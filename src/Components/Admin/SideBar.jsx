import { Avatar, Button } from "@radix-ui/themes";
import React from "react";
import reactImg from "../../assets/react.svg";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className=" flex flex-col gap-5 *:mx-auto py-10 px-5 border-r">
      <Avatar size={12} src={reactImg} />
      <Link to={"/admin"}>
        <Button
          variant="outline"
          className=" hover:text-white hover:bg-[#3e63dd] w-[150px]"
        >
          Questions
        </Button>
      </Link>
      <Link to={"add"}>
        <Button
          variant="outline"
          className=" hover:text-white hover:bg-[#3e63dd] w-[150px]"
        >
          Add Questions
        </Button>
      </Link>
    </aside>
  );
};

export default SideBar;
