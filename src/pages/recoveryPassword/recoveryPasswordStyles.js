import styled from 'styled-components';

// Styled components
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 50px auto;
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
  display: block;
`;

export const SendButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background-color: #0077cc;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3;
  }
`;

export const EmailInput = styled.input.attrs({
  type: 'email',
})`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid ${({ isValid }) => (isValid ? '#ccc' : 'red')};
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: ${({ isValid }) => (isValid ? '#0077cc' : 'red')};
  }
`;

export const ErrorText = styled.span`
  font-size: 12px;
  color: red;
  margin-top: 8px;
`;
