import axios from "axios";
import { useNavigate } from 'react-router-dom';

function DeleteButton({ articleId}) {
  const navigate = useNavigate();
  
  async function handleDelete(articleId) {
    try {
      await axios.delete(`http://localhost:3000/articles/${articleId}`);      
      console.log('Article deleted successfully.');
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