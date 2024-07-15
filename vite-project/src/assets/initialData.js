// I need an array of 16 unique Pokemon, both names and sprites
let pokeIdArray = [];

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

async function fetchPokemonSpecies() {
  // fetch species object from api, just to get total species count
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species?limit=1",
    {
      mode: "cors",
    },
  );
  return response.json();
}

async function fetchPokemon(id) {
  // fetch species object from api, just to get total species count
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    mode: "cors",
  });
  return response.json();
}

async function assignPokemonIDs(species) {
  const pokeData = await species;
  const pokeCount = pokeData.count;
  console.log(pokeCount);
}

assignPokemonIDs(fetchPokemonSpecies());

// CURRENTLY refactoring functions. maybe do assign IDs all in one?
// create a fetchPokemon

// // unpack species object to get count
// const pokeData = await response.json();
// const pokeCount = pokeData.count;

// // create randomized selection of pokemon species ID
// // *FUTURE FEATURE let user set pokeAmount (2x2 / 3x3 / 4x4 / 5x5)
// let pokeAmount = 9;
// for (let i = 0; i < pokeAmount; i++) {
//   let randomPokeId = getRandomIntInclusive(1, pokeCount);
//   if (pokeIdArray.includes(randomPokeId)) {
//     i--;
//     continue;
//   }
//   pokeIdArray.push(randomPokeId);
// }

// console.log(pokeIdArray);
// }

// fetchPokemonIDs();
// assignPokemonIDs
// fetchPokemonData
// assignPokemonData

const initialData = {
  allData: {
    0: "apple",
    1: "banana",
    2: "orange",
  },
  selectedData: {},
};

export default initialData;
