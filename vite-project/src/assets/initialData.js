// I need an array of 16 unique Pokemon, both names and sprites

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

async function fetchPokemonData() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species?limit=1",
    {
      mode: "cors",
    },
  );

  const pokeData = await response.json();
  const pokeCount = pokeData.count;

  let rando = getRandomIntInclusive(1, pokeCount);

  // next, assemble into array of 9 (3x3 grid), no repeats

  console.log(rando);
}

fetchPokemonData();

const initialData = {
  allData: {
    0: "apple",
    1: "banana",
    2: "orange",
  },
  selectedData: {},
};

export default initialData;
