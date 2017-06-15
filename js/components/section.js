'use strict';

const SearchPokemon = (update) => {
  const section = $('<section></section>');
  const divSearch = $('<div class="container-search"></div>');
  const search = $('<input id="search-input" type="search">');
  const spanICon = $('<span class="lupa"></span>');
  const buttom = $('<button>A-Z</button>');
  const filterPokemon = $('<div class="filter-pokemon"></div>');

  section.append(divSearch);
  divSearch.append(search);
  divSearch.append(spanICon);
  divSearch.append(buttom);
  section.append(filterPokemon);

  filterPokemon.append(GridPokemon());

 search.on('keyup', (e) => {
    if (search.val() != ""){
      const filterName = filterByPokemon(state.allPokemon.pokemon_entries.pokemon_especies, search.val());
      reRender(filterPokemon, filterName, update);
    }
 });

  return section;
};

const ItemPokemon = (thePokemon, update) => {
  const divPokemon = $('<div class="div-pokemon"></div>');
  const image = $('<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + thePokemon.entry_number + '.png" />');
  const main = $('<main></main>');
  const nav = $('<nav>iconos</nav>');
  const namePokemon = $('<h3>'+ thePokemon.pokemon_species.name +'</h3>');

  divPokemon.append(image);
  divPokemon.append(main);
  main.append(nav);
  main.append(namePokemon);

  return divPokemon;

};

const GridPokemon = (update) => {
  const containerPokemones = $('<div class=""container-pokemon></div>');
  state.allPokemon.pokemon_entries.forEach((thePokemon) => {
    containerPokemones.append(ItemPokemon(thePokemon, update));
  });

  return containerPokemones;
};

const reRender = (filterPokemon, filterName, update) => {
  filterPokemon.empty();
  filterName.forEach(namePo => {
    filterPokemon.append(ItemPokemon(namePo,update));
  })
};