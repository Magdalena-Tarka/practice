import { ICountry } from "../interfaces";

export const getChangedPopulationCountries = (
  arr1: ICountry[],
  arr2: ICountry[]
) => {
  return arr1
    .filter(
      (country1: ICountry) =>
        !arr2.some(
          (country2: ICountry) => country1.population === country2.population
        )
    )
    .map((item: ICountry) => item.name)
    .join(", ");
};

/*export const getCountriesNames = (array: ICountry[]) => {
  return array.map((item: ICountry) => item.name).join(", ");
};*/
