import { ICountry, ICountryStats } from "../types/interfaces";
import { getByRegionalBlock } from '../utils/index';
import { segregateIntoStatsSchema } from './segregateIntoStatsSchema';
import { blocksToGetStatsBy } from '../config';

export const segregateByBlockIntoStats = (
  countryData: ICountry[],
  statsSchema: ICountryStats,
  keyToSegregate: string
) => {

  if(keyToSegregate === 'other') {
    const otherCountries = countryData
      .filter(country => country.regionalBlocs?.some(block => !blocksToGetStatsBy.includes(block.acronym)))
      .concat(countryData.filter(item => item.regionalBlocs === undefined));

    return segregateIntoStatsSchema(otherCountries, statsSchema, keyToSegregate);
  }

  const countriesByBlock = getByRegionalBlock(countryData, keyToSegregate);
  return segregateIntoStatsSchema(countriesByBlock, statsSchema, keyToSegregate);
};
