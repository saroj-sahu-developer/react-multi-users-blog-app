import React from 'react'

const ArchiveButton = ({handleClick}) => {
  return (
    <button onClick={() => handleClick()}>Archive</button>
  );
}

export default ArchiveButton;
