import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  };
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  width: 100%
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid black;
  resize: vertical;
  
  &::placeholder {
    color: #242424;
  }
`;
