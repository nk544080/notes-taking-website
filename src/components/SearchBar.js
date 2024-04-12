import React from 'react';
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
    </div>
  );
};

export default SearchBar;
