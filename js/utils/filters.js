'use strict';


const filterByPokemon = (pokemones, query) => {
  let pokemones = [];
  for (let i, i<state.allPokemon.pokemon_entries.length, i++){
    pokemones.push(state.allPokemon.pokemon_entries[i].pokemon_especies.name);

  }
  const filterName = pokemones.filter((e) => {
    return e.pokemon_especies.name.indexOf(query) != -1;
    console.log(pokemones);
  });
  return filterName;
};