import { ICountry } from "../types/interfaces";
import { SortOption } from "../types/enums";
import { getByRegionalBlock, getByIncludingCharacter } from "../utils/index";

export const getFilteredCountries = (countriesToFilter: ICountry[]) => {
  const regionalBlock = 'European Union';
  const character = 'a';
  return getByIncludingCharacter(getByRegionalBlock(countriesToFilter, regionalBlock), SortOption.excluding, character);
};
