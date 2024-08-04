function Header({ pokemonArray, score, highScore }) {
  return (
    <div id="header-container" className="flex flex-col items-center">
      <h1>PokeSelecta</h1>
      <div id="score-container" className="flex flex-row gap-20">
        <h2>
          Score: {score} / {pokemonArray.length}
        </h2>
        <h2>High Score: {highScore}</h2>
      </div>
    </div>
  );
}

export default Header;
