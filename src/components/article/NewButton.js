import { useNavigate } from 'react-router-dom';

function NewButton({ articleId}) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/articles/new')}>New Article</button>
  );
}

export default NewButton;