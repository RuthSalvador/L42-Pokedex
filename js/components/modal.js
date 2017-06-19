'use strict';

const PokemonModal = (modal) => {
  const divModal = $('<div id="poke-modal" class="modal"></div>');
  const contModal = $('<div class="modal-content"></div>');
  const title = $('<h4>'+ state.selectedPokemon.pokemon_species.name +'</h4>');
  const divPoke = $('<div class="div-poke"></div>');

  let imagePoke = '';
  if (state.selectedPokemon.entry_number < 10){
    imagePoke = $('<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/00' + state.selectedPokemon.entry_number + '.png" />');
  } else if ((state.selectedPokemon.entry_number >= 10) && (state.selectedPokemon.entry_number < 100)) {
    imagePoke = $('<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/0' + state.selectedPokemon.entry_number + '.png" />');
  } else if (state.selectedPokemon.entry_number >= 100) {
    imagePoke = $('<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + state.selectedPokemon.entry_number + '.png" />');
  }
  const mainPoke = $('<main></main>');
  const navPoke = $('<nav></nav>');
  //const pokeball = $('<img src="../assets/icon/pokeball_gray.png" />');
  const divDetail = $('<p></p>');

  $(modal).append(divModal);
  divModal.append(contModal);
  contModal.append(title);
  contModal.append(divPoke);
  divPoke.append(imagePoke);
  divPoke.append(mainPoke);
  mainPoke.append(navPoke);
  //navPoke.append(pokeball);
  contModal.append(divDetail);

  return divModal;
};
