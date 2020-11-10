export const API_KEY = 'RGAPI-edce7a99-ae47-4cf7-baa1-e81c66ca9a46';

// API for summoner info, takes unencrypted summoner name
export const SUMMONER_INFO_URL_1 =
  'https://cors-anywhere.herokuapp.com/https://';
export const SUMMONER_INFO_URL_2 =
  '.api.riotgames.com/lol/summoner/v4/summoners/by-name/';

// API for ranked stats, takes encrypted summoner name
export const RANKED_STATS_URL_1 =
  'https://cors-anywhere.herokuapp.com/https://';
export const RANKED_STATS_URL_2 =
  '.api.riotgames.com/lol/league/v4/entries/by-summoner/';

// API for top 300 challenger rankings
export const CHALLENGER_URL_1 = 'https://cors-anywhere.herokuapp.com/https://';
export const CHALLENGER_URL_2 =
  '.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5';

//API for champion masteries, take encrypted summoner name
export const MASTERY_URL_1 = 'https://cors-anywhere.herokuapp.com/https://';
export const MASTER_URL_2 =
  '.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/';
