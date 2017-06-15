'use strict';

const SearchPokemon = (update) => {
  const section = $('<section></section>');
  const divSearch = $('<div class="container-search"></div>');
  const search = $('<input id="search-input" type="search">');
  const spanICon = $('<span class="lupa"></span>');
  const buttom = $('<button>A-Z</button>');
  const filterPokemon = $('<div class="pokemon-container"></div>');

  section.append(divSearch);
  divSearch.append(search);
  divSearch.append(spanICon);
  divSearch.append(buttom);
  section.append(filterPokemon);




};