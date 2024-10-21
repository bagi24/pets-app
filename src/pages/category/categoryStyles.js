import styled from 'styled-components';

export const CategoryPageCon = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  @media (max-width: 414px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
    margin: 0px;
    background-color: aqua;
  }

  background-color: #fdfdfd;
  padding: 30px 130px 0px 130px;
  @media (max-width: 414px) {
    padding: 0px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    background-color: #fdfdfd;
  }
`;

export const CatCon = styled.div`
  margin: 0 auto;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 414px) {
    padding: 0px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    background-color: #fdfdfd;
  }
`;
