import { ICountry, IStoredCountries, ICountryStats } from "../types/interfaces";
import { segregateByBlockIntoStats } from './segregateByBlockIntoStats';
import { keysToGetStatsBy } from '../config';

export const getCountryStats = (storedCountries: IStoredCountries) => {
  const countryCollection: ICountry[] = storedCountries.data;
  const countryStats: ICountryStats = {};

  keysToGetStatsBy.forEach(key => (
    countryStats[key] =  {
      countries: [],
      population: 0,
      languages: {},
      currencies: [],
      area: 0
    }
  ));

  keysToGetStatsBy.forEach(key  => segregateByBlockIntoStats(countryCollection, countryStats, key))
  return countryStats;
};
