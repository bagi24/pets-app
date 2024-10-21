import styled from 'styled-components';

export const ProductDetailSpace = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  gap: 20px;
  @media (max-width: 414px) {
    padding: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    background-color: #fdfdfd;
  }
`;

export const ProductDetailContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  background-color: #fdfdfd;

  gap: 20px;

  @media (max-width: 414px) {
    align-items: center;
    justify-content: center;
  }
`;
