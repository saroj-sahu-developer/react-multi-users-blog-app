import React from 'react'

const CommentsList = ({comments}) => {
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
