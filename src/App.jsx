import React, { useEffect, useState } from 'react';
import PokemonList from './PokemonList';
import SearchBar from "./SearchBar";;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch Pokémon data from the API
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await response.json();
        setPokemons(data.results);
        setFilteredPokemons(data.results);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  useEffect(() => {
    // Filter Pokémon based on search term
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filtered);
  }, [searchTerm, pokemons]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}

export default App;
