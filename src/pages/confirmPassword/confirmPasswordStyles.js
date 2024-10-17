import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 40px;
`;

export const InputLabel = styled.label`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  line-height: 24.5px;
  color: #003459;
`;

export const TextInput = styled.input`
  width: 320px;
  height: 45px;
  border-radius: 6px;
  border: 1px solid #e6e7e8;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const ResetButton = styled.button`
  width: 318px;
  height: 44px;
  border-radius: 4px;
  border: none;

  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  line-height: 24.5px;
  color: #ffffff;
  background-color: #003459;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const InputConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputSpace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
