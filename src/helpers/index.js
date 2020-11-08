//takes in region ID and returns a string with the region's name

export const regionName = region => {
  switch (region) {
    case 'na1':
      return 'North American';
    case 'euw1':
      return 'European West';
    case 'kr':
      return 'Korea';
    case 'eun1':
      return 'European Nordic & East';
    case 'br1':
      return 'Brazil';
    case 'jp1':
      return 'Japan';
    case 'oc1':
      return 'Oceania';
    case 'ru':
      return 'Russia';
    case 'tr1':
      return 'Trukey';
    case 'la1':
      return 'Latin America North';
    case 'la2':
      return 'Latin America South';
    default:
      return region;
  }
};
