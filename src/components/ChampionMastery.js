import React from 'react';
import { connect } from 'react-redux';

import Champion from './Champion';

import champions from 'lol-champions';

function ChampionMastery(props) {
  const { mastery } = props;
  const topFiveChampions = mastery.slice(0, 5);
  const topFiveInfo = [];
  console.log(champions);

  topFiveChampions.forEach(mastery => {
    topFiveInfo.push(
      champions.filter(champion => mastery.championId == champion.key)[0]
    );
  });

  return (
    <div>
      {topFiveInfo.map((champion, index) => (
        <Champion champion={champion} masteryInfo={topFiveChampions[index]} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    mastery: state.mastery,
  };
};

export default connect(mapStateToProps, {})(ChampionMastery);
