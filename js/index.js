'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());

  root.append(wrapper);
};

const state = {
  selectedPokemon: null,
};

$( _ => {

  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {
    if (err) { return alert(err.message);}
    state.selectedPokemon = json;

  const root = $('.root');
  render(root);
  });
});