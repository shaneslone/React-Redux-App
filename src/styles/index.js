import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
    background-color: #801336;
    color: white;
    padding: 0;
    margin: 0;
}

`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
  }
`;

export const RankedInfoCard = styled.div`
  width: 30%;
  background-color: #2d132c;
  color: white;
  padding: 1%;
  border-radius: 20px;
  border: 1px solid white;
  margin: 1%;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
  background-color: #c72c41;
  h1 {
    width: 30%;
    text-align: center;
  }
  .searchBox {
    width: 30%;
    text-align: center;
  }
`;
