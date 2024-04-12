
import React from 'react';
import Note from './Note';

function NotesList({ notes, onNoteClick }) {
  return (
    <div>
      {notes.map(note => (
        <Note key={note.id} note={note} onClick={onNoteClick} />
      ))}
    </div>
  );
}

export default NotesList;

