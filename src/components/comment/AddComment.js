import React, {useState} from 'react'
import { post } from '../../utils/api_calls/handle_api_calls';
import { StyledForm, StyledTextarea , StyledButton } from '../../styled_components/Comment';
const AddComment = ({articleId, onCommentAdded}) => {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    post(`/articles/${articleId}/comments`, {body: comment})
    .then((response) => {
      onCommentAdded(response.data);
      setComment('');
    })
    .catch(error => {
      console.log("Error while creating comment: ", error);
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextarea
        value={comment}
        onChange={handleChange}
        placeholder="Add a comment..."
        required
      />
      <StyledButton type="submit" disabled={!comment.trim()}>Post</StyledButton>
    </StyledForm>
  );
}

export default AddComment;
