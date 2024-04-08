import React from 'react'

const MakePrivateButton = ({handleClick}) => {
  return (
    <button onClick={() => handleClick()}>Make Private</button>
  );
}

export default MakePrivateButton;
