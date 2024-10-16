import styled from 'styled-components';

export const ChatContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const Messages = styled.div`
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  height: 400px;
`;

export const InputArea = styled.div`
  display: flex;
  padding: 10px;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
`;

export const Button = styled.button`
  padding: 10px;
`;
