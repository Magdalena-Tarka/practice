import { ICountry } from "../types/interfaces";
import { SortDirection, SortOption } from "../types/enums";

export const getChangedPopulationCountries = (arr1: ICountry[], arr2: ICountry[]) => {
  return arr1
    .filter((country1) => !arr2.some((country2) => country1.population === country2.population))
    .map((item) => item.name)
    .join(", ");
};

export const sumPopulation = (countriesToSum: ICountry[], quantityToSum?: number) => {
  const slicedData = quantityToSum ? countriesToSum.slice(0, quantityToSum) : countriesToSum;
  return slicedData.reduce((prev, cur) => prev + cur.population, 0);
};

export const compareAndPrintIfBigger = (number1: number, number2: number) => {
  if (number1 === number2) {
    return 'equal with';
  }
  return (number1 > number2) ? 'bigger than' : 'not bigger than';
};

export const getSorted = (countriesToSort: ICountry[], keyToSort: keyof ICountry, direction: SortDirection) => {
  return countriesToSort.slice().sort((a, b) => {
    if (a[keyToSort] === b[keyToSort]) {
      return 0
    }
    if (direction === SortDirection.ascend) {
      return a[keyToSort] > b[keyToSort] ? 1 : -1
    }
    return a[keyToSort] > b[keyToSort] ? -1 : 1;
  });
}

// FILTERS

export const getByRegionalBlock = (countries: ICountry[], regionalBlockName: string) => {
  return countries
    .filter(country => country.regionalBlocs)
    .filter(item => item.regionalBlocs
      .some(element => element.name === regionalBlockName)
    );
};

export const getByIncludingCharacter = (countryData: ICountry[], option: SortOption, character: string) => {
  if (option === SortOption.excluding) {
    return countryData.filter(item => !item.name.toLowerCase().includes(character.toLowerCase()));
  }
  return countryData.filter(item => item.name.toLowerCase().includes(character.toLowerCase()));
};
