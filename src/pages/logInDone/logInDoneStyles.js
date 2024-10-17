import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  gap: 100px;
  background-color: #fdfdfd;
  padding: 30px 130px 0px 130px;
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1140px;
  height: 700px;
  gap: 50px;
`;

export const TitleSpace = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 604px;
  width: 545px;

  gap: 40px;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  gap: 7px;
  font-family: 'Montserrat';
  font-size: 54px;
  font-weight: 700;
`;

export const Description = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  width: 545px;
  height: 48px;
`;

export const FormCon = styled.form`
  display: flex;

  flex-direction: column;
  gap: 20px;
`;

export const InputField = styled.input`
  width: 545px;
  height: 50px;
  padding: 0px;
  margin: 0px;
  border: 1px solid #e0e0e0;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Dropdown = styled.select`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Option = styled.option`
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 12px 24px 12px 24px;
  color: #ffffff;
  background-color: #003459;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 700;
  line-height: 19.5px;

  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

export const MapContainer = styled.div`
  width: 545px;
  height: 700px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  iframe {
    border-radius: 8px;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
  display: block;
`;
