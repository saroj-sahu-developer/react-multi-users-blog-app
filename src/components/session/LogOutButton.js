import React from 'react'
import { Link } from 'react-router-dom';

const LogOutButton = ({handleClick}) => {
  return (
    <Link onClick={handleClick}>Log Out</Link>
  )
}

export default LogOutButton;
