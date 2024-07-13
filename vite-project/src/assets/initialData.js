// I need an array of 16 unique Pokemon, both names and sprites

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

async function fetchPokemonIDs() {
  // fetch species object from api, just to get total species count
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species?limit=1",
    {
      mode: "cors",
    },
  );

  // unpack species object to get count
  const pokeData = await response.json();
  const pokeCount = pokeData.count;

  // create randomized selection of pokemon species ID
  // *FUTURE FEATURE let user set pokeAmount (2x2 / 3x3 / 4x4 / 5x5)
  let pokeAmount = 9;
  let pokeArray = [];
  for (let i = 0; i < pokeAmount; i++) {
    let randomPokeId = getRandomIntInclusive(1, pokeCount);
    if (pokeArray.includes(randomPokeId)) {
      i--;
      continue;
    }
    pokeArray.push(randomPokeId);
  }

  console.log(pokeArray);
}

fetchPokemonIDs();

const initialData = {
  allData: {
    0: "apple",
    1: "banana",
    2: "orange",
  },
  selectedData: {},
};

export default initialData;
