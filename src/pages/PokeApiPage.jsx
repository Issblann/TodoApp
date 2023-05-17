import React from "react";
import NavbarPokeAPI from "../components/Navbar pokeapi/NavbarPokeAPI";
import InputSearchPokemon from "../components/InputSearchPokemon/InputSearchPokemon";
import CardPokemon from "../components/CardPokemon/CardPokemon";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../API/getPokemonByName";

const PokeApiPage = () => {
  const { pokemon } = useParams();

  return (
    <>
      <NavbarPokeAPI />
      <main className=" h-screen">
        <InputSearchPokemon pokemonParams={pokemon} />
      </main>
    </>
  );
};

export default PokeApiPage;
