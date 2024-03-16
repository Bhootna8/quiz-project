import { Button, Text } from "@radix-ui/themes";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" w-full h-[60px] shadow-md flex items-center px-10">
      <h1 className=" text-[2rem] text-[red] font-bold">Quiz</h1>

      <ul className=" flex items-center gap-8 mx-auto ">
        <Link to={"/questions"}>Questions</Link>
        <Link to={"/report"}>Report</Link>
        <Link to={"/contactus"}>Contact Us</Link>
      </ul>

      <Button>Register</Button>
    </div>
  );
};

export default NavBar;
