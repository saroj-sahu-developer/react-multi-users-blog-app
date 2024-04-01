import { useNavigate } from 'react-router-dom';

function EditButton({ articleId}) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`/articles/${articleId}/edit`)}>Edit</button>
  );
}

export default EditButton;