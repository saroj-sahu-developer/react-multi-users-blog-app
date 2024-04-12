import React from 'react'
import { StyledMakePrivateButton } from '../../styled_components/StyledButtons';

const MakePrivateButton = ({handleClick}) => {
  return (
    <StyledMakePrivateButton onClick={() => handleClick()}>Make Private</StyledMakePrivateButton>
  );
}

export default MakePrivateButton;
