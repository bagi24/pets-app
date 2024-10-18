import styled from 'styled-components';

export const MessageContainer = styled.div`
  width: 100%;
  height: 138px;
  border-radius: 12px 12px 12px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
`;

export const AuthorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
`;

export const AuthorProfile = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 100px;
  border: 7px solid #003459;
`;

export const SpanMessage = styled.span`
  width: 289px;
  height: 50px;
  padding: 16px 16px 0px 20px;
  border-radius: 12px 12px 12px 0px;
  background-color: #003459;
  color: #ffffff;
  box-shadow: 0px 2px 1px 0px #0000000d;
`;

export const TimeSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: self-start;
  color: gray;
  margin-top: 5px;
  font-family: 'Inter';
  font-size: 10px;
  font-weight: 400;
  line-height: 12.1px;
  color: #888888;
`;

export const ProfileCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
