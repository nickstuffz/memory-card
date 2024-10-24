import Card from "./Card";

function Grid({ pokemonArray, onCardClick, isLoading }) {
  if (isLoading === true) {
    return (
      <div className="flex flex-col items-center border-2">
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          }
          alt={"loading"}
        />
        <p>{"loading"}</p>
      </div>
    );
  }

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
