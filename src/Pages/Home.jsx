import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import { ContextProvider } from "../Store/Store";
import Categories from "../Components/Categories";

const Home = () => {
  const { questions } = useContext(ContextProvider);

  return (
    <main className=" h-screen">
      <NavBar />
      {questions?.map((que, i) => (
        <Categories questions={que.questions} category={que.category} key={i} />
      ))}
    </main>
  );
};

export default Home;
