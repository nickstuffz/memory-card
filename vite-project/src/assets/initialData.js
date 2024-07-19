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

  const pokemonArray = [];

  // allow user set to this amount in future
  const pokemonAmount = 9;

  // catches an unlikely error
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
      name: pokemon.name,
      sprite: pokemon.sprites.front_default,
    };

    // implement rest of object
    pokemonArray.push(nextPokemon);
  }
  return pokemonArray;
}

// test function
async function getPokemonArray() {
  let species = fetchPokemonSpecies();
  let speciesCount = getPokemonSpeciesCount(species);
  let pokemonArray = await newPokemonArray(speciesCount);

  return pokemonArray;
}

export default getPokemonArray;
