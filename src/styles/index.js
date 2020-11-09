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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  background-color: #2d132c;
  color: white;
  padding: 1%;
  border-radius: 20px;
  border: 1px solid white;
  margin: 1%;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
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

export const MasteryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  background-color: #2d132c;
  color: white;
  padding: 1%;
  border-radius: 20px;
  border: 1px solid white;
  margin: 1%;
`;

export const Spinner = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
