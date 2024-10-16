import styled from 'styled-components';

export const MessageContainer = styled.div`
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  align-self: ${props => (props.sender === 'user' ? 'flex-end' : 'flex-start')};
  background-color: ${props => (props.sender === 'user' ? '#cce5ff' : '#e2e3e5')};
`;
