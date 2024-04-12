import React, { useState, useEffect } from 'react';
import NotesList from '../components/NotesList';
import AddNoteButton from '../components/AddNoteButton';
import SearchBar from '../components/SearchBar';
import SortOptions from '../components/SortOptions';

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('ascending');

  useEffect(() => {
    setNotes([
      { id: 1, title: 'Note 1', description: 'Description 1', createdAt: new Date() },
      { id: 2, title: 'Note 2', description: 'Description 2', createdAt: new Date() },
      { id: 3, title: 'Note 3', description: 'Description 3', createdAt: new Date() },
      { id: 4, title: 'Note 4', description: 'Description 4', createdAt: new Date() },
      { id: 5, title: 'Note 5', description: 'Description 5', createdAt: new Date() },
      { id: 6, title: 'Note 6', description: 'Description 6', createdAt: new Date() },
      { id: 7, title: 'Note 7', description: 'Description 7', createdAt: new Date() },
      { id: 8, title: 'Note 8', description: 'Description 8', createdAt: new Date() },
      { id: 9, title: 'Note 9', description: 'Description 9', createdAt: new Date() },
      { id: 10, title: 'Note 10', description: 'Description 10', createdAt: new Date() },
    ]);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SortOptions onSort={handleSort} />
      <NotesList notes={notes} />
      <AddNoteButton onClick={() => console.log('Add note')} />
    </div>
  );
}

export default HomePage;
