import React from 'react';

function SearchBar({ setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ margin: '20px', padding: '10px', fontSize: '16px' }}
    />
  );
}

export default SearchBar;
