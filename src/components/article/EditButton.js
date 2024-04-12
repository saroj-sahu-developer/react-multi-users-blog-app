import { useNavigate } from 'react-router-dom';
import { StyledEditButton } from '../../styled_components/StyledButtons';

function EditButton({ articleId}) {
  const navigate = useNavigate();

  return (
    <StyledEditButton onClick={() => navigate(`/articles/${articleId}/edit`)}>Edit</StyledEditButton>
  );
}

export default EditButton;