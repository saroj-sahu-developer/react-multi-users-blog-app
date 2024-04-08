import React from 'react'
import { updateArticle } from '../../utils/handle_api_calls';
import { useNavigate } from 'react-router-dom';

const UnarchiveButton = ({articleId}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const inputs = {status: 'public'};
    updateArticle(articleId, inputs)
    .then(() => {
        navigate(`/articles/${articleId}`);
    });
  }

  return (
    <button onClick={() => handleClick()}>Unarchive</button>
  );
}

export default UnarchiveButton;
