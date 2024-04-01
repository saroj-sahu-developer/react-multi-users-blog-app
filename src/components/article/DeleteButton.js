import { useNavigate } from 'react-router-dom';
import { deleteArticle } from '../../utils/handle_api_calls';

function DeleteButton({ articleId}) {
  const navigate = useNavigate();
  
  async function handleDelete(articleId) {
    try {
      deleteArticle(articleId);
      navigate('/articles');
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  }

  return (
    <button onClick={() => handleDelete(articleId)}>Delete</button>
  );
}

export default DeleteButton;