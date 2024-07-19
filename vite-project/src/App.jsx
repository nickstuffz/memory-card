import { useState, useEffect } from "react";
import getPokemonArray from "./assets/initialData.js";
import Header from "./components/Header.jsx";
import Grid from "./components/Grid.jsx";

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    const updatePokemonArray = async () => {
      const result = await getPokemonArray();
      setPokemonArray(result);
    };
    updatePokemonArray();
  }, []);

  return (
    <>
      <Header data={pokemonArray} />
      <Grid data={pokemonArray} setData={setPokemonArray} />

      <p></p>
    </>
  );
}

export default App;
