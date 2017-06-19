'use strict';

const filterByPokemon = (allPokemon, query) => {
  const filterP = allPokemon.filter((thePokemon) => {

    return thePokemon.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
  });
  return filterP;
};

