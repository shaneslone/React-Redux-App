import React from 'react';
import SummonerInfo from './components/SummonerInfo';
import { GlobalStyle } from './styles';
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SummonerInfo />
    </>
  );
}

export default App;
