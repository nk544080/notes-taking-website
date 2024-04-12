

import React from 'react';
import PropTypes from 'prop-types';
const AddNoteButton = ({ onClick }) => {
  return (
    <button 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '50%',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
      }} 
      onClick={onClick} 
    >
      +
    </button>
  );
};

AddNoteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddNoteButton;
