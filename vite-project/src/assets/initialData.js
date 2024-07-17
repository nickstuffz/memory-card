// utility
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// fetches pokemon species
async function fetchPokemonSpecies() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species?limit=1",
    {
      mode: "cors",
    },
  );
  const species = response.json();
  return species;
}

// calculates pokemon species count
async function getPokemonSpeciesCount(speciesPromise) {
  const speciesObject = await speciesPromise;
  const speciesCount = speciesObject.count;
  return speciesCount;
}

// fetches pokemon with given id
async function fetchPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    mode: "cors",
  });
  const pokemon = response.json();
  return pokemon;
}

// creates pokemon data array
async function newPokemonArray(speciesCountPromise) {
  const speciesCount = await speciesCountPromise;

  let pokeIdArray = [];
  let pokeAmount = 9;
  for (let i = 0; i < pokeAmount; i++) {
    let randomPokeId = getRandomIntInclusive(1, speciesCount);
    if (pokeIdArray.includes(randomPokeId)) {
      i--;
      continue;
    }
    // XX instead of pushing create your desired array (notes.txt)
    pokeIdArray.push(randomPokeId);
  }
  return pokeIdArray;
}

async function check() {
  let species = fetchPokemonSpecies();
  let speciesCount = getPokemonSpeciesCount(species);
  let pokeIdArray = newPokemonArray(speciesCount);
  let test = await pokeIdArray;
  console.log(test);
}

check();

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
