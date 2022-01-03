import { IStoredCountries, ICountry } from "../types/interfaces";
import { SortDirection } from "../types/enums";
import { getFilteredCountries } from '../getFilteredCountries/getFilteredCountries';
import { getSorted, sumPopulation } from "../utils/index";

export const getSumOfFiveLargestPopulations = (storedCountries: IStoredCountries) => {
  const countries: ICountry[] = storedCountries.data;
  const sortKey = 'population';
  const countriesQuantity = 5;
  return sumPopulation(getSorted(getFilteredCountries(countries), sortKey, SortDirection.descend), countriesQuantity);
};
