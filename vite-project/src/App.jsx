import { useState, useEffect } from "react";
import getPokemonArray from "./assets/utility.js";
import Header from "./components/Header.jsx";
import Grid from "./components/Grid.jsx";

// consider adding initial state array with loading elements

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(
    () => {
      const effectGetPokemonArray = async () => {
        const result = await getPokemonArray();
        setPokemonArray(result);
      };
      effectGetPokemonArray();

      // consider adding cleanup function, remove API fetch using controller
    },
    [
      // currently runs on mount, add dependency to add reset and edit features
    ],
  );

  console.log(pokemonArray);

  return (
    <>
      <Header pokemonArray={pokemonArray} />
      <Grid pokemonArray={pokemonArray} setData={setPokemonArray} />
    </>
  );
}

export default App;
