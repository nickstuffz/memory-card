function Card({ pokemon }) {
  return (
    <div className="border-2">
      <img src={pokemon.sprite} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
}

export default Card;
