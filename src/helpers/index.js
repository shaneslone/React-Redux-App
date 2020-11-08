export const regionName = region => {
  switch (region) {
    case 'na1':
      return 'North America';
    case 'euw1':
      return 'European West';
    case 'kr':
      return 'Korea';
    case 'eun1':
      return 'European Nordic East';
    default:
      return region;
  }
};
