'use strict';

const Header = () =>{
  const header = $('<header></header>');
  const h1 = $('<h1 class="title-poke">Pokédex</h1>');

  header.append(h1);

  return header;
};