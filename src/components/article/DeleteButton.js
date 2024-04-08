import { useNavigate } from 'react-router-dom';
import { destroy } from '../../utils/api_calls/handle_api_calls';

function DeleteButton({ articleId}) {
  const navigate = useNavigate();
  
  async function handleDelete(articleId) {
    destroy(`/articles/${articleId}`)
    .then( () => {
      navigate('/articles');
    })
    .catch(error => {
      console.log("Error while deleting article: ", error);
    });
  }

  return (
    <button onClick={() => handleDelete(articleId)}>Delete</button>
  );
}

export default DeleteButton;