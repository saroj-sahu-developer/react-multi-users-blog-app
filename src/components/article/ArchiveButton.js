import React from 'react'
import { StyledArchiveButton } from '../../styled_components/StyledButtons';

const ArchiveButton = ({handleClick}) => {
  return (
    <StyledArchiveButton onClick={() => handleClick()}>Archive</StyledArchiveButton>
  );
}

export default ArchiveButton;
