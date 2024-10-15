import styled from 'styled-components';

// კონტეინერი
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f7f9fc;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

// ლეიბელის სტილი
export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
  display: block;
`;

// ინპუტის სტილი
export const TextInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

// ღილაკის სტილი
export const ResetButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
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
