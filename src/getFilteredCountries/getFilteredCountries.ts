import { ICountry } from "../types/interfaces";
import { getByRegionalBlock, getContainingCharacter } from "../utils/index";

export const getFilteredCountries = (data: ICountry[]) => {
  const regionalBlock = 'European Union';
  const character = 'a';
  return getContainingCharacter(getByRegionalBlock(data, regionalBlock), character);
};
