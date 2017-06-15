'use strict';

getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {
  if (err) { return alert(err.message);}
  state.selectedPokemon = json;

  const root = $('.root');
  render(root);
});

const getJson = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    if(xhr.status !== 200){
      return cb(new Error('Error loading pokeapi));
    }

    cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};