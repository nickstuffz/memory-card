import Card from "./Card";

function Grid({ pokemonArray }) {
  console.log(pokemonArray);

  const cardGrid = pokemonArray.map((pokemon) => (
    <Card pokemon={pokemon} key={pokemon.id} />
  ));

  return (
    <div id="grid-container" className="grid grid-cols-3">
      {cardGrid}
    </div>
  );
}

export default Grid;
