import styled from 'styled-components';

export const FilterSpace = styled.div`
  width: 100%;
  margin-top: 35px;
  margin-bottom: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 414px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const TitleCon = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 414px) {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 90px;
    padding-bottom: 10px;
  }
`;

export const TitleConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;

  @media (max-width: 414px) {
    display: none;
  }
`;

export const FilterButtonMob = styled.div`
  display: none;
  @media (max-width: 414px) {
    display: flex;
    gap: 10px;
  }
`;

export const SubTitle = styled.div`
  font-family: 'SF Pro Display';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #667479;
`;

export const Title = styled.h1`
  font-family: ' SF Pro Display';
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  margin: 0;
`;

export const SortButton = styled.h1`
  font-family: 'SF Pro Display';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 158px;
  height: 34px;
  padding: 0px 10px 0px 20px;
  gap: 8px;
  border-radius: 20px;
  border: 1px solid #ccd1d2;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 252px;
  width: 100%;
  @media (max-width: 414px) {
    display: none;
  }
`;

export const FilterSearchArea = styled.div`
  align-self: flex-start;
  width: 100%;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  gap: 14px;
  @media (max-width: 414px) {
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 0px;
    padding-left: 10px;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  margin-right: 30px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-family: 'SF Pro Display';
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #003459;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;
  font-family: 'SF Pro Display';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const Checkbox = styled.input`
  cursor: pointer;
  width: 16px;
  height: 16px;

  border-radius: 4px;
  border: 1px solid #ccd1d2;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 115px;
  height: 20px;
  padding: 10px;
`;

export const PriceInput = styled.input`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  text-align: start;
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
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ArrowButtons2 = styled.div`
  position: absolute;
  right: 1215px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ArrowButton = styled.button`
  width: 14px;
  height: 14px;
  background-color: #242b33;
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
  gap: 20px;
  justify-content: flex-start;
  width: 100%;
  max-width: 100%;

  @media (max-width: 414px) {
    margin: 0px;
    padding: 0px;
    justify-content: center;
    /* flex-wrap: wrap;
    flex-basis: calc(50% - 10px); */
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 280px;
  height: 378px;
  padding: 8px 8px 0px 8px;
  border-radius: 12px;
  background-color: #fff;
  margin: 0px;
  box-shadow: 0px 4px 28px -2px #00000014;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 28px -2px #00000024;
  }

  @media (max-width: 414px) {
    width: 185px;
    height: 317px;
    padding: 0px;
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
  @media (max-width: 414px) {
    font-family: 'SF Pro Display';
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
  }
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

  @media (max-width: 414px) {
    width: 169px;
    height: 169px;
    padding: 0px;
  }
`;

export const PetName = styled.h2`
  font-family: 'SF Pro Display';
  font-size: 16px;
  line-height: 24px;
  color: #00171f;
  margin: 0px;
  @media (max-width: 414px) {
    font-family: 'SF Pro Display';
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  }
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
  @media (max-width: 414px) {
    font-family: 'SF Pro Display';
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
  }
`;

export const Circle = styled.div`
  color: #ff564f;
`;

export const Circle1 = styled.div`
  color: #ffb672;
`;

export const Circle2 = styled.div`
  color: #242b33;
`;

export const Circle3 = styled.div`
  color: linear-gradient(90deg, #242b33 0%, #242b33 52.59%, #d7d7d7 52.6%, #d2d2d2 100%);
`;

export const Circle4 = styled.div`
  color: #cecece;
`;

export const Circle5 = styled.div`
  color: #fff7ce;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? '#6C63FF' : '#fff')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
  border: 1px solid #ccc;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;
