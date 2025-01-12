import { useState, useEffect } from "react";
import { getPokemonArray, fisherYatesShuffle } from "./assets/utility.js";
import Header from "./components/Header.jsx";
import Grid from "./components/Grid.jsx";
import Menu from "./components/Menu.jsx";

// consider adding initial state array with loading elements

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [reset, setReset] = useState(0);

  useEffect(() => {
    const effectGetPokemonArray = async () => {
      setIsLoading(true);
      const result = await getPokemonArray();
      setPokemonArray(result);
      setIsLoading(false);
    };
    effectGetPokemonArray();

    // add cleanup function, remove API fetch using controller, abort
  }, [
    reset,
    // currently runs on mount, add dependency to add reset and edit features
  ]);

  function handleCardClick(pokemon, index) {
    // check if pokemon already clicked, if yes end game
    if (pokemon.clicked === true) {
      alert(`GAME OVER! You scored ${score}`);

      // set high score
      if (score > highScore) {
        setHighScore(score);
      }

      // restart game
      setScore(0);
      let clearedPokemonArray = pokemonArray.map((p) => {
        return { ...p, clicked: false };
      });
      setPokemonArray(fisherYatesShuffle(clearedPokemonArray));

      return;
    }

    // otherwise
    // change clicked object key to true
    else {
      if (score === pokemonArray.length - 1) {
        alert(`You Won! You scored all available points!`);
        handleResetClick();
        return;
      } else {
        let nextPokemonArray = pokemonArray.map((p, i) => {
          if (i === index) {
            return { ...pokemon, clicked: true };
          } else {
            return p;
          }
        });

        // set score
        setScore(nextPokemonArray.filter((p) => p.clicked === true).length);

        // shuffle pokemonArray then set state
        nextPokemonArray = fisherYatesShuffle(nextPokemonArray);
        setPokemonArray(nextPokemonArray);
      }
    }
  }

  function handleResetClick() {
    let nextReset = reset + 1;
    setReset(nextReset);
    console.log(nextReset);
    return;
  }

  return (
    <>
      <Header pokemonArray={pokemonArray} score={score} highScore={highScore} />
      <Grid
        pokemonArray={pokemonArray}
        onCardClick={handleCardClick}
        isLoading={isLoading}
      />

      <Menu onResetClick={handleResetClick} />
    </>
  );
}

export default App;
