import { ICountry, ICountryStats } from "../types/interfaces";
import { getByRegionalBlock } from '../utils/index';
import { segregateIntoStatsSchema } from '../segregateIntoStatsSchema/segregateIntoStatsSchema';
import { blocksToGetStatsBy } from '../config';

export const segregateByBlockIntoStats = (
  countryData: ICountry[],
  statsSchema: ICountryStats,
  keyToSegregate: string
) => {

  const countriesByBlock = getByRegionalBlock(countryData, keyToSegregate);
  const otherCountries = countryData
    .filter(country => country.regionalBlocs?.some(block => !blocksToGetStatsBy.includes(block.acronym)))
    .concat(countryData.filter(item => item.regionalBlocs === undefined));

  if(keyToSegregate === 'other') return segregateIntoStatsSchema(otherCountries, statsSchema, 'other');

  return segregateIntoStatsSchema(countriesByBlock, statsSchema, keyToSegregate);
};
