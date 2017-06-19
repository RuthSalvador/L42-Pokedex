'use strict';

const ItemPokemon = (thePokemon) => {
  const divPokemon = $('<div class="div-pokemon"></div>');
  let image = '';
    if (thePokemon.entry_number < 10){
      image = $('<img class="materialboxed" src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/00' + thePokemon.entry_number + '.png" />');
    } else if ((thePokemon.entry_number >= 10) && (thePokemon.entry_number < 100)) {
      image = $('<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/0' + thePokemon.entry_number + '.png" />');
    } else if (thePokemon.entry_number >= 100) {
      image = $('<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + thePokemon.entry_number + '.png" />');
    }
  const main = $('<main></main>');
  const nav = $('<nav></nav>');
  const pokeball = $('<img class="icon-poke" src="assets/icon/pokeball_gray.png" />');
  const heart = $('<img class="icon-poke" src="assets/icon/valentines-heart.png" />');
  const dataimg = $('<img class="icon-poke" src="assets/icon/data.png" />');
  const name = $('<h3>'+ thePokemon.pokemon_species.name +'</h3>');

    divPokemon.on('click',(e) => {
    //e.preventDefault();
    state.selectedPokemon = thePokemon;
    PokemonModal('#modal').show();
    //update();
  });

  divPokemon.append(image);
  divPokemon.append(main);
  main.append(nav);
  nav.append(pokeball);
  nav.append(heart);
  nav.append(dataimg);
  main.append(name);
  return divPokemon;

};
/*
const GridPokemon = () => {
  const containerPokemones = $('<div class="container-pokemon"></div>');
  state.allPokemon.pokemon_entries.forEach((thePokemon) => {
    containerPokemones.append(ItemPokemon(thePokemon));
  });
  return containerPokemones;
};*/ //al hacer reRender al vacío salen todos de frente, no hace falta hacer otra function.

const SearchPokemon = () => {
  const section = $('<section></section>');
  const divSearch = $('<div class="div-search"></div>');
  const search = $('<input id="search-input" type="search">');
  const spanICon = $('<span class="lupa"></span>');
  const buttom = $('<button>A-Z</button>');
  const filterPokemon = $('<div class="filter-pokemon"></div>');

  section.append(divSearch);
  section.append(filterPokemon);
  divSearch.append(search);
  divSearch.append(spanICon);
  divSearch.append(buttom);

  search.on('keyup', () => {
    const valIn = search.val();
    reRender(filterPokemon, valIn);
  });
  reRender (filterPokemon, '');
  return section;
};

const reRender = (filterPokemon, valIn) => {
  filterPokemon.empty();
  const filterName = filterByPokemon(state.allPokemon.pokemon_entries, valIn);

  if(filterName.length > 0){
    $.each(filterName,(index,thePokemon) => {
      filterPokemon.append(ItemPokemon(thePokemon));
    })
  } else {
    filterPokemon.append($('<p>No se encontró el pokemon solicitado</p>'));
  }
};
