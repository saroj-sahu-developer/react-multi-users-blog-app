import { useNavigate } from 'react-router-dom';
import { destroy } from '../../utils/api_calls/handle_api_calls';
import { StyledDeleteButton } from '../../styled_components/StyledButtons';

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
    <StyledDeleteButton onClick={() => handleDelete(articleId)}>Delete</StyledDeleteButton>
  );
}

export default DeleteButton;