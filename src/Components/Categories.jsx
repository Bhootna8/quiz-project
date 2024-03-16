import React, { useContext, useState } from "react";
import { Box, Button, Card, Flex, Select, Tabs, Text } from "@radix-ui/themes";
import Questions from "./Questions";
import { useLocation } from "react-router-dom";

const Categories = ({ category, questions, tab, id }) => {
  console.log(id)
  const location = useLocation();
   console.log(questions)
  return (
    <Flex
      direction={"column"}
      gap={"5"}
      mt={"5"}
      pb={"5"}
      style={{ alignItems: "center" }}
    >
      <Card style={{ width: "500px", maxWidth: "600px" }}>
        <h1 className=" mx-auto text-2xl font-bold border-b w-fit">
          {category}
        </h1>
        {questions.map((que, i) => (
          <Questions
            que={que.question}
            options={que.options}
            correctAns={que.correctAnswer}
            key={i}
            index={i}
            category={category}
          />
        ))}

        <span className={`${location.pathname === "/admin" ? "hidden" : ""}`}>
          <Button my={"3"}>Submit Answer</Button>
        </span>
      </Card>
    </Flex>
  );
};

export default Categories;
