import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemons }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
