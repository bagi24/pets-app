import styled from 'styled-components';

export const LoginCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 130px 0px 130px;
  background-color: #fdfdfd;
`;

export const SignCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 20px;
`;

export const GoogleSingCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 400px;
  background-color: #f8f8f8;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const GoogleSing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const GoogleSingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const GoogleImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const LineCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
`;

export const LineSpan = styled.span`
  display: inline-block;
  width: 30px;
  height: 1px;
  background-color: #ccc;
`;

export const InputCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

export const EmailInput = styled.input.attrs({
  type: 'email',
  placeholder: 'Email',
})`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #0077cc;
  }
`;

export const PasswordInput = styled.input.attrs({
  type: 'password',
  placeholder: 'Password',
})`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #0077cc;
  }
`;

export const ForgotPassSpan = styled.span`
  align-self: flex-end;
  font-size: 12px;
  color: #0077cc;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginButtonCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px 0;
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

export const SignUpTitleSpan = styled.span`
  font-size: 14px;
  color: #333;

  &::after {
    content: ' Sign up';
    color: #0077cc;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
