import React from 'react';
import SummonerInfo from './components/SummonerInfo';
import ChallengersList from './components/ChallengersList';
import { GlobalStyle } from './styles';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path='/summoner'>
          <SummonerInfo />
        </Route>
        <Route exact path='/'>
          <ChallengersList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
