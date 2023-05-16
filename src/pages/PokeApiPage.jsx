import React from "react";
import NavbarPokeAPI from "../components/Navbar pokeapi/NavbarPokeAPI";
import InputSearchPokemon from "../components/InputSearchPokemon/InputSearchPokemon";
import CardPokemon from "../components/CardPokemon/CardPokemon";

const PokeApiPage = () => {
  return (
    <>
      <NavbarPokeAPI />
      <main className="  h-screen">
        <InputSearchPokemon />
        <CardPokemon />
      </main>
    </>
  );
};

export default PokeApiPage;
