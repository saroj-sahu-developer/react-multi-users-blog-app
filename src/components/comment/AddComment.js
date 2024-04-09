import React, {useState} from 'react'
import { post } from '../../utils/api_calls/handle_api_calls';

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
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={handleChange}
        placeholder="Add a comment..."
        required
      />
      <button type="submit" disabled={!comment.trim()}>Post</button>
    </form>
  );
}

export default AddComment;
