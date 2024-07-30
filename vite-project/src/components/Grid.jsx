import Card from "./Card";

function Grid({ pokemonArray }) {
  console.log(pokemonArray);
  console.log(pokemonArray[0].name);
  return (
    <>
      <h1>Grid</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default Grid;
