import React from "react";
import pokedexlogo from "../../assets/image pokedex.svg";

const NavbarPokeAPI = () => {
  return (
    <header className="mt-20 bg-redPokeAPI py-3">
      <img src={pokedexlogo} width="380px" height="40px" alt="pokedexlogo" />
    </header>
  );
};

export default NavbarPokeAPI;
