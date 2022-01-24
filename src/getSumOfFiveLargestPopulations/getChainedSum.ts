import { ICountry, IStoredCountries } from "../types/interfaces";
import { SortOption, SortDirection } from "../types/enums";
import { functionsObject } from "../utils/index2";

export const getChainedSum = (storedCountries: IStoredCountries) => {
  const countries: ICountry[] = storedCountries.data;
  const regionalBlock = 'EU';
  const character = 'A';
  const sortKey = 'population';
  const countriesQuantity = 5;

  functionsObject.resultArray = countries;

  return functionsObject
    .getByRegionalBlock(regionalBlock)
    .getByIncludingCharacter(SortOption.excluding, character.toLowerCase())
    .getSortedByKey(sortKey, SortDirection.descend)
    .sumPopulation(countriesQuantity);;
};
