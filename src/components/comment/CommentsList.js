import React, {useState, useEffect} from 'react'
import { getComments } from '../../utils/handle_api_calls';

const CommentsList = ({articleId}) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(articleId)
    .then(response => {
      if(response) {
        setComments(response);
      }
    });
  }, [articleId]);

  return (
    <div>
      {comments && comments.length>0 ?
      (<ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment.body}
          </li>
        ))}
      </ul>)
      :
      (<p>No comment yet...</p>)
      }
    </div>
  );
}

export default CommentsList;
