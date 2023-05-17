import axios from "axios";

export const getPokemonByName = async (pokemonId) => {
  const APIURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  try {
    const response = await axios.get(APIURL);
    return response;
  } catch (error) {
    console.log(error);
  }
};
