import styled from 'styled-components';

export const SingUpCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

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
  justify-content: flex-start;
  gap: 24px;

  width: 320px;
  height: 444px;

  border-radius: 12px;
`;

export const GoogleSing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 32px;
`;

export const GoogleSingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 320px;
  height: 44px;

  padding: 12px 24px 12px 24px;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid #b6b7bc;

  color: #003459;
  background-color: #fff;

  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  line-height: 24.5px;

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

  font-family: 'Inter';
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.05em;
`;

export const LineSpan = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #ccc;
`;

export const InputCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;

export const InputSpace = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1px;
`;

export const Label = styled.label`
  display: flex;

  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  line-height: 24.5px;
`;

export const EmailInput = styled.input.attrs({
  type: 'email',
})`
  outline: none;
  width: 320px;
  height: 45px;
  border-radius: 6px;
  border: 1px solid #e6e7e8;
  padding: 0px;
  &:focus {
    border-color: #0077cc;
  }
`;

export const PasswordInput = styled.input.attrs({
  type: 'password',
})`
  outline: none;
  width: 320px;
  height: 45px;
  border-radius: 6px;
  border: 1px solid #e6e7e8;
  padding: 0px;
  &:focus {
    border-color: #0077cc;
  }
`;

export const ForgotPassSpan = styled.span`
  align-self: flex-end;
  color: #003459;
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginButtonCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

export const LoginButton = styled.button`
  width: 100%;

  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  line-height: 24.5px;

  width: 318px;
  height: 44px;

  padding: 12px 24px 12px 24px;
  gap: 6px;
  border-radius: 4px;
  background-color: #003459;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3;
  }
`;

export const SignUpTitleSpan = styled.span`
  display: flex;

  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  line-height: 24.5px;
  color: #003459;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
