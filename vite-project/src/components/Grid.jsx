import Card from "./Card";

function Grid({ pokemonArray, onCardClick }) {
  console.log(pokemonArray);

  const cardGrid = pokemonArray.map((p, i) => (
    <Card key={p.id} pokemon={p} index={i} onCardClick={onCardClick} />
  ));

  return (
    <div id="grid-container" className="grid grid-cols-3">
      {cardGrid}
    </div>
  );
}

export default Grid;
