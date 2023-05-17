import React from "react";
import todoappilustration from "../assets/todoappilustration.svg";
import pokemon23 from "../assets/pokemon-23.svg";
import "./Home.css";
const Home = () => {
  return (
    <main className="h-screen">
      <section className=" bg-slate-400 h-screen flex flex-col gap-9 items-center justify-center">
        <div className="flex items-center gap-3 container-text-and-ilustration">
          <h1 className="text-7xl text-white">TODO APP</h1>
          <img
            width="300px"
            height="300px"
            src={todoappilustration}
            alt="todoappilustration"
          />
        </div>
        <span className="w-4/5 h-1 bg-white"></span>
        <div className="flex items-center text-white gap-5 container-text-and-ilustration ">
          <h1 className="text-7xl">PokeAPI</h1>
          <img width="300px" height="300px" src={pokemon23} alt="pokemon23" />
        </div>
      </section>
    </main>
  );
};

export default Home;
