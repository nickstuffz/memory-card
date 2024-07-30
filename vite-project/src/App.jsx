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

      // add cleanup function, remove API fetch using controller, abort
    },
    [
      // currently runs on mount, add dependency to add reset and edit features
    ],
  );

  // is there a better way to abort running the intialState of []?
  // will be unnecessary once loading array set
  if (pokemonArray.length === 0) return null;

  return (
    <>
      <Header pokemonArray={pokemonArray} />
      <Grid pokemonArray={pokemonArray} setData={setPokemonArray} />

      <p></p>
    </>
  );
}

export default App;
