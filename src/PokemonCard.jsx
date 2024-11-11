import React, { useEffect, useState } from 'react';

function PokemonCard({ pokemon }) {
  const [sprite, setSprite] = useState('');

  useEffect(() => {
    const fetchSprite = async () => {
      try {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        setSprite(data.sprites.front_default);
      } catch (error) {
        console.error('Error fetching Pokémon sprite:', error);
      }
    };

    fetchSprite();
  }, [pokemon.url]);

  return (
    <div style={{
      border: '1px solid #ccc', padding: '20px', borderRadius: '10px', textAlign: 'center', width: '150px'
    }}>
      <img src={sprite} alt={pokemon.name} style={{ width: '100px', height: '100px' }} />
      <h3>{pokemon.name}</h3>
    </div>
  );
}

export default PokemonCard;
