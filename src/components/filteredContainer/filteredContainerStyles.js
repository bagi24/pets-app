import styled from 'styled-components';

export const FilterSpace = styled.div`
  width: 100%;

  margin-top: 35px;
  margin-bottom: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
export const Title = styled.div``;

export const LeftSide = styled.div`
  max-width: 252px;
  width: 100%;
  background-color: bisque;
  align-self: flex-start;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  color: #003459;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 200px;
  margin: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PriceInput = styled.input`
  width: 100px;
  height: 40px;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    border-color: #003459;
    outline: none;
  }
`;

export const ArrowButtons = styled.div`
  position: absolute;
  right: -30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ArrowButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: #003459;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  &:hover {
    background-color: gold;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* სივრცე ქარდებს შორის */
  justify-content: flex-start; /* ქარდების განლაგება */
  width: 100%;
  max-width: 100%; /* მაქსიმალური სიგანე 100% */
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 280px; /* ფიქსირებული სიგანე */
  height: 378px; /* სიმაღლე */
  padding: 8px 8px 0px 8px;
  border-radius: 12px;
  background-color: #fff;
  margin: 0px;
  box-shadow: 0px 4px 28px -2px #00000014;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 28px -2px #00000024;
  }
`;

export const InfoCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 8px 8px 20px 8px;
  margin: 0px;
  gap: 4px;
`;

export const Gene = styled.span`
  font-family: 'SF Pro Display';
  font-size: 12px;
  line-height: 18px;
`;

export const Dot = styled.i`
  display: flex;
  align-items: center;

  font-size: 4px;
  color: #667479;
`;

export const Age = styled.span`
  font-family: 'SF Pro Display';
  font-size: 12px;
  line-height: 18px;
`;

export const PetImage = styled.img`
  width: 264px;
  height: 264px;
  object-fit: cover;
  border-radius: 10px;
  padding: 8px;
`;

export const PetName = styled.h2`
  font-family: 'SF Pro Display';
  font-size: 16px;
  line-height: 24px;
  color: #00171f;
  margin: 0px;
`;

export const PetInfo = styled.p`
  font-family: 'SF Pro Display';
  font-size: 12px;
  line-height: 18px;
  color: #667479;
  display: flex;
  gap: 4px;
  margin: 0px;
`;

export const Price = styled.p`
  font-family: 'SF Pro Display';
  font-size: 14px;
  line-height: 20px;
  color: #00171f;
  font-weight: bold;
  margin: 0px;
`;
