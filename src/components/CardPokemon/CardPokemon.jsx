import React from "react";
import axios from "axios";
import { useEffect, useContext } from "react";
import { PageContext } from "../../context/Context";
const CardPokemon = ({ pokemon }) => {
  const { data, setData } = useContext(PageContext);

  const APIURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  const { name, order, sprites, stats, types } = data;

  const getPokemon = () => {
    axios
      .get(APIURL)
      .then((res) => {
        const data = res.data;
        setData(data);
        console.log(data);
      })

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPokemon();
  }, [pokemon]);
  console.log(name);

  return (
    <section className="w-full ">
      <div className="w-3/5 flex flex-col shadow-md items-center justify-center mx-auto">
        <div className="h-44 bg-fuchsia-200 w-full flex items-center justify-center">
          <img
            className="text-center h-40"
            width="210px"
            src={sprites?.other.home.front_default}
            alt={name}
          />
        </div>
        <div>
          <h1>ID</h1>
          <div>
            <span></span>
            <h1>Nombre pokemon</h1>
            <span></span>
          </div>

          <div>
            <div>
              <small>Peso</small>
              <p>69</p>
            </div>
            <div>
              <small>Altura</small>
              <p>7</p>
            </div>
          </div>

          <div>
            <div>
              <h2>Tipo</h2>
              <div>
                <p>Planta</p>
                <p>Venenoso</p>
              </div>
            </div>
            <div>
              <h2>Habilidades</h2>
              <div>
                <p>Crecimiento</p>
                <p>Clorofila</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPokemon;
