import { ICountry } from "../types/interfaces";
import { SortOption } from "../types/enums";
import { getByRegionalBlock, getByIncludingCharacter } from "../utils/index";

export const getFilteredCountries = (data: ICountry[]) => {
  const regionalBlock = 'European Union';
  const character = 'a';
  return getByIncludingCharacter(getByRegionalBlock(data, regionalBlock), SortOption.notIncluding, character);
};
