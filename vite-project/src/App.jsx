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

  function handleCardClick(pokemon, index) {
    // check if pokemon already clicked, if yes end game
    if (pokemon.clicked === true) {
      alert("game over");
    }

    // otherwise change clicked object key to true
    const nextPokemonArray = pokemonArray.map((p, i) => {
      if (i === index) {
        return { ...pokemon, clicked: true };
      } else {
        return p;
      }
    });

    // shuffle pokemonArray then set state
    // pretty sure this function should be on APP level
    // -needs to accesss pokemonArray and set state

    console.log(index, pokemon);
    console.log(nextPokemonArray);
    setPokemonArray(nextPokemonArray);
  }

  return (
    <>
      <Header pokemonArray={pokemonArray} />
      <Grid pokemonArray={pokemonArray} onCardClick={handleCardClick} />

      <p></p>
    </>
  );
}

export default App;
