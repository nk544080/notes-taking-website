
import React from 'react';

function Note({ note, onClick }) {
  return (
    <div 
      className="note" 
      onClick={() => onClick(note.id)}
      style={{ border: '1px solid black', margin: '10px', padding: '10px' }}
    >
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      {note.mediaType === 'image' ? (
        <img src={note.mediaLink} alt="note media" style={{ maxWidth: '100%' }} />
      ) : (
        <video width="320" height="240" controls>
          <source src={note.mediaLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default Note;
