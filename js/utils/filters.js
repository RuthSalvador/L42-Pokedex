'use strict';

const filterByPokemon = (pokemones, query) => {
  const filterName = pokemones.filter((e) => {
    return e.pokemon_especies.name.indexOf(query) != -1;
  });
  return filterName;
};