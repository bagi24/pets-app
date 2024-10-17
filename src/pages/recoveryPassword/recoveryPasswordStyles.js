import styled from 'styled-components';

// Styled components
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 24px;
`;

export const DescriptionText = styled.span`
  width: 320px;
  height: 75px;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  line-height: 24.5px;
`;

export const InputLabel = styled.label`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  line-height: 24.5px;
  color: #003459;
`;

export const SendButton = styled.button`
  width: 318px;
  height: 44px;
  color: #ffffff;
  border-radius: 4px;
  background-color: #003459;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3;
  }
`;

export const EmailInput = styled.input.attrs({
  type: 'email',
})`
  width: 320px;
  height: 45px;
  border-radius: 6px;
  border: 1px solid #e6e7e8;
  border: 1px solid ${({ isValid }) => (isValid ? '#E6E7E8' : 'red')};
  outline: none;

  &:focus {
    border-color: ${({ isValid }) => (isValid ? '#E6E7E8' : 'red')};
  }
`;

export const InputSpace = styled.div`
  display: flex;
  flex-direction: column;
`;
