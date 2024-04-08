import React from 'react'
import { put } from '../../utils/api_calls/handle_api_calls';
import { useNavigate } from 'react-router-dom';

const UnarchiveButton = ({articleId}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const inputs = {status: 'public'};
    put(`/articles/${articleId}`, inputs)
    .then(() => {
        navigate(`/articles/${articleId}`);
    })
    .catch(error => {
      console.log("Error while unacrhive the article: ", error);
    });
  }

  return (
    <button onClick={() => handleClick()}>Unarchive</button>
  );
}

export default UnarchiveButton;
