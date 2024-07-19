import { useState, useEffect } from "react";
import getPokemonArray from "./assets/utility.js";
import Header from "./components/Header.jsx";
import Grid from "./components/Grid.jsx";

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

  return (
    <>
      <Header data={pokemonArray} />
      <Grid data={pokemonArray} setData={setPokemonArray} />

      <p></p>
    </>
  );
}

export default App;
