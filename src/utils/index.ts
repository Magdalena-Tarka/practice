import { ICountry } from "../types/interfaces";
import { SortDirection, SortOption } from "../types/enums";

export const getChangedPopulationCountries = (arr1: ICountry[], arr2: ICountry[]) => {
  return arr1
    .filter((country1: ICountry) => !arr2.some((country2: ICountry) => country1.population === country2.population))
    .map((item: ICountry) => item.name)
    .join(", ");
};

export const sumPopulation = (data: ICountry[], quantityToSum?: number) => {
  if (quantityToSum) {
    return data.slice(0, quantityToSum).reduce((prev, cur) => prev + cur.population, 0)
  }
  return data.reduce((prev, cur) => prev + cur.population, 0);
};

export const compareAndPrintIfBigger = (number1: number, number2: number) => {
  if (number1 === number2) {
    return 'equal with';
  }
  return (number1 > number2) ? 'bigger than' : 'not bigger than'
};

export const getSorted = (data: ICountry[], keyToSort: keyof ICountry, direction: SortDirection) => {
  return data.slice().sort((a: ICountry, b: ICountry) => {
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

export const getByRegionalBlock = (data: ICountry[], regionalBlockName: string) => {
  return data
    .filter(country => country.regionalBlocs)
    .filter(item => item.regionalBlocs
      .some(item => item.name === regionalBlockName)
    );
};

export const getByIncludingCharacter = (data: ICountry[], option: SortOption, character: string) => {
  if (option === SortOption.notIncluding) {
    return data.filter(item => !item.name.includes(character.toLowerCase() || character.toUpperCase()));
  }
  return data.filter(item => item.name.includes(character.toLowerCase() || character.toUpperCase()));
};
