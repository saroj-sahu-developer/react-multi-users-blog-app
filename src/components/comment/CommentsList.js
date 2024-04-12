import React from "react";
import {
  CommentsListContainer,
  CommentItem,
  NoCommentsMessage,
  Commenter,
} from "../../styled_components/Comment";

const CommentsList = ({ comments }) => {
  console.log(comments);
  return (
    <CommentsListContainer>
      {comments && comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <Commenter>@{comment.commenter}</Commenter>
              <CommentItem>{comment.body}</CommentItem>
            </li>
          ))}
        </ul>
      ) : (
        <NoCommentsMessage>No comments yet...</NoCommentsMessage>
      )}
    </CommentsListContainer>
  );
};

export default CommentsList;
