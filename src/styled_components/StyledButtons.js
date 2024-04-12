import styled from 'styled-components';

export const StyledButton = styled.button`
  color: black;
  font-size: small;
  margin-right: 8px; /* Adjust as needed */
  padding: 6px 12px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const StyledDeleteButton = styled(StyledButton)`
  background-color: #f8d7da; /* Red */
  border-color: #f5c6cb;
  color: #721c24;
`;

export const StyledEditButton = styled(StyledButton)`
  background-color: #cce5ff; /* Blue */
  border-color: #b8daff;
  color: #004085;
`;

export const StyledMakePrivateButton = styled(StyledButton)`
  background-color: #d4edda; /* Green */
  border-color: #c3e6cb;
  color: #155724;
`;

export const StyledMakePublicButton = styled(StyledButton)`
  background-color: #fff3cd; /* Yellow */
  border-color: #ffeeba;
  color: #856404;
`;

export const StyledArchiveButton = styled(StyledButton)`
  background-color: #d6d8d9; /* Grey */
  border-color: #c8cbcf;
  color: #343a40;
`;

export const StyledUnarchiveButton = styled(StyledButton)`
  background-color: #d6d8d9; /* Grey */
  border-color: #c8cbcf;
  color: #343a40;
`;

export const StyledSubmitButton = styled(StyledButton)`
  background-color: #007bff; /* Blue */
  color: white;
  border-color: #007bff;
`;
