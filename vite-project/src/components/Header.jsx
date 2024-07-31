function Header({ pokemonArray }) {
  return (
    <div id="header-container" className="flex flex-col items-center">
      <h1>PokeSelecta</h1>
      <div id="score-container" className="flex flex-row gap-20">
        <h2>Score: X / {pokemonArray.length}</h2>
        <h2>High Score: X</h2>
      </div>
    </div>
  );
}

export default Header;

// Header should display title
// score out of 10, high score
