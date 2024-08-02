function Card({ pokemon, index, onCardClick }) {
  return (
    <div
      className="flex flex-col items-center border-2"
      onClick={() => onCardClick(pokemon, index)}
    >
      <img src={pokemon.sprite} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
}

export default Card;
