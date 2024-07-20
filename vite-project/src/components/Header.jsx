function Header({ pokemonArray }) {
  return (
    <>
      <h1>PokeSelecta</h1>
      <h2>Score: X / {pokemonArray.length}</h2>
      <h2>High Score: X</h2>
    </>
  );
}

export default Header;

// Header should display title
// score out of 10, high score
