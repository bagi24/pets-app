import styled from 'styled-components';

// Main container for both form and map
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// Form container
export const ContactContainer = styled.div`
  width: 50%;
  padding: 2rem;
  background-color: #f4f4f4;
  margin: 2rem auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// Title (h1)
export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
`;

// Description (span or p)
export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  text-align: center;
`;

// Input fields (text, email, phone)
export const InputField = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Dropdown (select)
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

// Options inside the dropdown
export const Option = styled.option`
  font-size: 1rem;
`;

// Submit button
export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

// Map container
export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 3rem;
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
