import React from 'react';
import { connect } from 'react-redux';
import { ChangeMessage, RemovePokemon } from '../actions';
import Pokemon from '../components/pokemon';

const mapStateToProps = state => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = {
    RemovePokemon,
    ChangeMessage,
};

const pokemonsList = ({
  pokemons, RemovePokemon, ChangeMessage
}) => {
  const handleRemovePokemon = book => {
    RemovePokemon(book);
    ChangeMessage('Pokemon Removed!');
  };

  return (
    <div className='cards-container'>
      {
        pokemons.map(pokemon => (<Pokemon key={pokemon.name} pokemon={pokemon} remove={handleRemovePokemon}/>))
      }
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(pokemonsList);
