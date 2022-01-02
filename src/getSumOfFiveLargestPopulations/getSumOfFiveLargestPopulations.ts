import { IStoredCountries, ICountry } from "../types/interfaces";
import { SortDirection } from "../types/enums";
import { getFilteredCountries } from '../getFilteredCountries/getFilteredCountries';
import { getSorted, sumFiveLargestPopulations } from "../utils/index";

export const getSumOfFiveLargestPopulations = (storedCountries: IStoredCountries) => {
  const countries: ICountry[] = storedCountries.data;
  const sortKey = 'population';
  return sumFiveLargestPopulations(getSorted(getFilteredCountries(countries), sortKey, SortDirection.descend));
};
