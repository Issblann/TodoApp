import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../../context/Context";
import CardPokemon from "../CardPokemon/CardPokemon";
import { getPokemonByName } from "../../API/getPokemonByName";
import "./InputSearchPokemon.css";

const InputSearchPokemon = ({ pokemonParams }) => {
  const { pokemon, setPokemon, data, setData } = useContext(PageContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (pokemonParams) {
      getPokemonByName(pokemonParams).then((res) => setData(res.data));
    }
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    const pokemonId = e.target.pokemonid.value;

    setPokemon(pokemonId);
    getPokemonByName(pokemonId).then((res) => setData(res.data));

    const formattedPokemon = pokemonId.toLowerCase().trim();
    if ((formattedPokemon === "") | !formattedPokemon) return;
    navigate(`/PokeAPI/${formattedPokemon}`);

    e.target.pokemonid.value = "";
  };

  return (
    <>
      <section className="w-full bg-bgPokeAPI ">
        <div className="max-w-7xl flex flex-col gap-5 items-center justify-center m-auto mt-5">
          <h1 className="text-center">
            <span className="text-redPokeAPI">Bienvenido,</span> aquí podrás
            encontrar tu pokemón favorito
          </h1>
          <div className="flex w-full container-form">
            <form className="flex w-2/4 mx-auto form" onSubmit={onSubmit}>
              <input
                required
                id="pokemonid"
                className="shadow-md p-5 w-full max-w-4xl m-auto items-center justify-center "
                placeholder="Busca un pokemon"
                type="text"
              />
              <button type="submit" className="bg-redPokeAPI text-white w-60 ">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </section>

      <CardPokemon pokemonParams={pokemonParams} />
    </>
  );
};

export default InputSearchPokemon;
