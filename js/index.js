'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(SearchPokemon());

  if (state.selectedStation != null){
    wrapper.append(PokemonModal());

  }

  root.append(wrapper);
};

const state = {
  allPokemon: null,
  selectedPokemon: null
};

$( _ => {

  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {
    if (err) { return alert(err.message);}
    state.allPokemon = json;

  const root = $('.root');
  render(root);
  });
});