
import React from 'react';

function SortOptions({ onSort }) {
  return (
    <select onChange={(e) => onSort(e.target.value)}>
      <option value="ascending">Sort by Date (Ascending)</option>
      <option value="descending">Sort by Date (Descending)</option>
    </select>
  );
}

export default SortOptions;
