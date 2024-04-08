import React, {useState} from 'react'
import { createComment } from '../../utils/handle_api_calls';

const AddComment = ({articleId, onCommentAdded}) => {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(comment);
    createComment(articleId, {body: comment})
    .then(() => {
      onCommentAdded();
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
      <button type="submit">Post</button>
    </form>
  );
}

export default AddComment;
