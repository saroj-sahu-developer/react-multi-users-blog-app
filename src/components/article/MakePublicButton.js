import React from 'react'

const MakePublicButton = ({handleClick}) => {
  return (
    <button onClick={() => handleClick()}>Make Public</button>
  );
}

export default MakePublicButton;
