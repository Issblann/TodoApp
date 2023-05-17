import React from "react";
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { PageContext } from "../../context/Context";
import "./CardPokemon.css";
const CardPokemon = ({ pokemonParams }) => {
  const { pokemon, data, setData } = useContext(PageContext);
  if (!pokemonParams) {
    if (!pokemon) {
      return (
        <h1 className="text-2xl flex justify-center mt-3">
          Ingrese un pokemon
        </h1>
      );
    }
    return (
      <h1 className="text-2xl flex justify-center mt-3">Ingrese un pokemon</h1>
    );
  }

  const { name, order, sprites, weight, height } = data;

  return (
    <section className="w-full mt-6 h-full">
      <div className="w-4/12 gap-5 flex flex-col shadow-md items-center justify-center mx-auto container-pokemoncard">
        <div className="h-44 bg-redPokeAPI -200 w-full flex items-center justify-center">
          <img
            className="text-center h-40"
            width="210px"
            src={sprites?.other.home.front_default}
            alt={name}
          />
        </div>
        <div className="flex flex-col gap-2 text-redPokeAPI w-full  items-center ">
          <h1 className="text-center">{order}</h1>

          <div className="flex items-center gap-2">
            <span className="h-0.5 w-14 bg-gray-800"></span>
            <h1>{name}</h1>
            <span className="h-0.5 w-14 bg-gray-800"></span>
          </div>
        </div>
        <div className="flex gap-5 bg-zinc-700 w-full items-center justify-center">
          <div className="flex flex-col ">
            <p className="text-white">Peso</p>
            <small className="font-bold text-white text-center">{weight}</small>
          </div>
          <div className="flex flex-col">
            <p className="text-white">Altura</p>
            <small className="font-bold text-white text-center">{height}</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPokemon;
