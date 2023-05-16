import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../../context/Context";

const InputSearchPokemon = () => {
  const { pokemon, setPokemon, setData } = useContext(PageContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setPokemon(pokemon.toLowerCase().trim());
    if ((pokemon === "") | !pokemon) return;
    setPokemon("");
    // navigate(`/pokemon/${pokemon}`);
  };

  console.log(pokemon);

  return (
    <section className="w-full bg-bgPokeAPI ">
      <div className="max-w-7xl flex flex-col gap-5 items-center justify-center m-auto mt-5">
        <h1>
          <span className="text-redPokeAPI">Bienvenido,</span> aquí podrás
          encontrar tu pokemón favorito
        </h1>
        <div className="flex w-3/5">
          <form className="flex mx-auto" onSubmit={onSubmit}>
            <input
              className="shadow-md p-5 w-full max-w-4xl m-auto  "
              placeholder="Busca un pokemon"
              type="text"
              onChange={(e) => setPokemon(e.target.value)}
              value={pokemon}
            />
            <button className="bg-redPokeAPI text-white w-60 ">Buscar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InputSearchPokemon;
