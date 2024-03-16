import React, { useContext } from "react";
import { ContextProvider } from "../../Store/Store";
import Categories from "../Categories";
import { Card } from "@radix-ui/themes";
import { useLocation } from "react-router-dom";
import AddQuestion from "./AddQuestion";

const Content = () => {
  const { questions } = useContext(ContextProvider);
  const location = useLocation();
  return (
    <section>
      <div className={`${location.pathname === "/admin" ? "" : "hidden"}`}>
        {questions?.map((que, i) => (
          <Categories
            questions={que.questions}
            category={que.category}
            key={i}
          />
        ))}
      </div>
      <AddQuestion />
    </section>
  );
};

export default Content;
