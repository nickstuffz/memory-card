// I need an array of 16 unique Pokemon, both names and sprites
let pokeIdArray = [];

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// fetches pokemon species promise
async function fetchPokemonSpecies() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species?limit=1",
    {
      mode: "cors",
    },
  );
  return response.json();
}

// fetches pokemon promise with given id
async function fetchPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    mode: "cors",
  });
  return response.json();
}

async function getPokemonSpeciesCount(speciesPromise) {
  const speciesObject = await speciesPromise;
  const speciesCount = speciesObject.count;
  return speciesCount;
}

async function check() {
  let test = await getPokemonSpeciesCount(fetchPokemonSpecies());
  console.log(test);
}

check();
// // create randomized selection of pokemon species ID
// // *FUTURE FEATURE let user set pokeAmount (2x2 / 3x3 / 4x4 / 5x5)
// let pokeAmount = 9;
// for (let i = 0; i < pokeAmount; i++) {
//   let randomPokeId = getRandomIntInclusive(1, speciesCount);
//   if (pokeIdArray.includes(randomPokeId)) {
//     i--;
//     continue;
//   }
//   pokeIdArray.push(randomPokeId);
// }

function initializeData() {}

const initialData = {
  allData: {
    0: "apple",
    1: "banana",
    2: "orange",
  },
  selectedData: {},
};

export default initialData;
