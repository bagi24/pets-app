import styled from 'styled-components';

export const HomePageConStructure = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #fdfdfd;

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
