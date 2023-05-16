import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../../context/Context";
import CardPokemon from "../CardPokemon/CardPokemon";

const InputSearchPokemon = () => {
  const { pokemon, setPokemon } = useContext(PageContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const formattedPokemon = pokemon.toLowerCase().trim();
    if ((formattedPokemon === "") | !formattedPokemon) return;
    navigate(`/pokemon/${formattedPokemon}`);
    setPokemon("");
  };

  return (
    <>
      <section className="w-full bg-bgPokeAPI ">
        <div className="max-w-7xl flex flex-col gap-5 items-center justify-center m-auto mt-5">
          <h1 className="text-center">
            <span className="text-redPokeAPI">Bienvenido,</span> aquí podrás
            encontrar tu pokemón favorito
          </h1>
          <div className="flex w-3/5 container-form">
            <form className="flex mx-auto" onSubmit={onSubmit}>
              <input
                className="shadow-md p-5 w-full max-w-4xl m-auto items-center justify-center "
                placeholder="Busca un pokemon"
                type="text"
                value={pokemon}
                onChange={(e) => setPokemon(e.target.value)}
              />
              <button type="submit" className="bg-redPokeAPI text-white w-60 ">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default InputSearchPokemon;
