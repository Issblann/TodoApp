import React from "react";
import NavbarPokeAPI from "../components/Navbar pokeapi/NavbarPokeAPI";
import { useParams } from "react-router-dom";
import InputSearchPokemon from "../components/InputSearchPokemon/InputSearchPokemon";
import CardPokemon from "../components/CardPokemon/CardPokemon";

const PokeApiPage = () => {
  const { pokemon } = useParams();
  return (
    <>
      <NavbarPokeAPI />
      <InputSearchPokemon />
      <CardPokemon pokemon={pokemon} />
    </>
  );
};

export default PokeApiPage;
