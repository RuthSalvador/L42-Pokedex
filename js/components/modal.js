'use strict';

const PokemonModal = () => {
  const divModal = $('<div id="modal' + state.selectedPokemon.entry_number + '" class="modal"></div>');
  const contModal = $('<div class="modal-content"></div>');
  const title = $('<h4>'+ state.selectedPokemon.name +'</h4>');
  const divPoke = $('<div class="div-pokemon"></div>');
  let imagePoke = '';
  if (state.selectedPokemon.entry_number < 10){
    imagePoke = $('<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/00' + state.selectedPokemon.entry_number + '.png" />');
  } else if ((state.selectedPokemon.entry_number >= 10) && (state.selectedPokemon.entry_number < 100)) {
    imagePoke = $('<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/0' + state.selectedPokemon.entry_number + '.png" />');
  } else if (state.selectedPokemon.entry_number >= 100) {
    imagePoke = $('<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + state.selectedPokemon.entry_number + '.png" />');
  }
  const mainPoke = $('<main></main>');
  const navPoke = $('<nav>iconos</nav>');
  const divDetail = $('<p></p>');

  divModal.append(contModal);
  contModal.append(title);
  contModal.append(divPoke);
  divPoke.append(imagePoke);
  divPoke.append(mainPoke);
  mainPoke.append(navPoke);
  contModal.append(divDetail);

  return divModal;

};