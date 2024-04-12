import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;


export const FormSubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FormError = styled.div`
  color: #dc3545;
  margin-top: 5px;
`;
