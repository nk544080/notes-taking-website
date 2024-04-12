
import React, { useState } from 'react';

function NoteForm({ onSubmit, initialNote = {} }) {
  const [title, setTitle] = useState(initialNote.title || '');
  const [description, setDescription] = useState(initialNote.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NoteForm;
