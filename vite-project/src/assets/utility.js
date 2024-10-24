// utility
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function fisherYatesShuffle(array) {
  let oldElement;
  for (let i = array.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    oldElement = array[i];
    array[i] = array[rand];
    array[rand] = oldElement;
  }
  return array;
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
  const species = await speciesPromise;
  const speciesCount = species.count;
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

  const pokemonArray = [];

  // allow user set to this amount in future
  const pokemonAmount = 9;

  // prevents an unlikely error
  if (speciesCount < pokemonAmount) {
    console.log("error");
    return;
  }

  for (let i = 0; i < pokemonAmount; i++) {
    const randomPokeID = getRandomIntInclusive(1, speciesCount);

    // starts over if repeat ID selected
    const repeat = (pokemonObject) => pokemonObject.id === randomPokeID;
    if (pokemonArray.some(repeat)) {
      i--;
      continue;
    }

    const pokemon = await fetchPokemon(randomPokeID);

    const nextPokemon = {
      id: randomPokeID,
      name: pokemon.species.name,
      sprite: pokemon.sprites.front_default,
      clicked: false,
    };

    pokemonArray.push(nextPokemon);
  }
  return pokemonArray;
}

// test function
async function getPokemonArray() {
  let speciesPromise = fetchPokemonSpecies();
  let speciesCountPromise = getPokemonSpeciesCount(speciesPromise);
  let pokemonArray = await newPokemonArray(speciesCountPromise);
  return pokemonArray;
}

export { getPokemonArray, fisherYatesShuffle };
