import styled from 'styled-components';

export const Form = styled.form`
  display: table;
  margin: auto;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
    justify-content: center;
  };
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  width: 100%
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid black;
  resize: vertical;

  &::placeholder {
    color: #242424;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#8DBEF8' : '#344CB9')};
  display: ${({ buttonHidden }) => (buttonHidden ? 'none' : 'inline-block')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;


  &:hover {
    transition: all 0.3s ease-out;
    background: #62FFB8;
    background: #FF62A9;
  }

    @media screen and (max-width: 960px) {
      width: 100%;
    }
`;

export const FormTextInput = styled.input`
  padding: 10px 20px 100px;
  width: 100%
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid black;
  resize: vertical;
  font-size: 16px;

  &::placeholder {
    color: #242424;
  }
`;
