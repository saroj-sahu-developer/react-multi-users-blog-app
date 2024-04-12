import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 500px; /* Adjust max width as needed */
  margin: 0 auto; /* Center the form horizontally */
  margin-left: 200px;
  margin-top: 25px;
`;

// Styled textarea component
export const StyledTextarea = styled.textarea`
  width: 100%;
  min-width: 500px;
  height: 60px; /* Adjust height as needed */
  padding: 10px;
  margin-left: 0px;
  border: 1px solid #ccc;
  border-radius: 8px; /* Rounded border radius */
  resize: vertical; /* Allow vertical resizing */
  font-size: 16px;
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const StyledButton = styled.button`
  width: 90px;
  height: 35px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const CommentsListContainer = styled.div`
  margin-left: 175px;
  margin-top: 15px;

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 15px;
  }
`;

export const CommentItem = styled.div`
  color: #333;
  font-size: 16px;
  margin-left: 20px;
`;

export const Commenter = styled.div`
  color: #065fd4;
  font-weight: bold;
`;

export const NoCommentsMessage = styled.p`
  margin: 0;
`;
