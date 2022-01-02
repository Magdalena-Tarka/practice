import { ICountry } from "../types/interfaces";
import { SortDirection } from "../types/enums";

export const getChangedPopulationCountries = (arr1: ICountry[], arr2: ICountry[]) => {
  return arr1
    .filter((country1: ICountry) => !arr2.some((country2: ICountry) => country1.population === country2.population))
    .map((item: ICountry) => item.name)
    .join(", ");
};

export const sumFiveLargestPopulations = (data: ICountry[]) => {
  const fiveBiggestPopulation = data;
  fiveBiggestPopulation.length = 5;
  return fiveBiggestPopulation.reduce((prev, cur) => prev + cur.population, 0);
};

export const compareAndPrintIfBigger = (number1: number, number2: number) => {
  let template = '';
  number1 === number2 ? template = 'equal with'
    : (number1 > number2
      ? template = 'bigger than'
      : template = 'not bigger than'
    )
  return template;
};

export const getSorted = (data: ICountry[], keyToSort: keyof ICountry, direction: SortDirection) => {
  return data.slice().sort((a: ICountry, b: ICountry) => {
    return (a[keyToSort] === b[keyToSort]) ? 0
      : ((a[keyToSort] > b[keyToSort])
        ? (direction === SortDirection.ascend ? 1 : -1)
        : (direction === SortDirection.ascend ? -1 : 1)
      );
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

export const getContainingCharacter = (data: ICountry[], character: string) => {
  return data.filter(item => !item.name.includes(character.toLowerCase() || character.toLocaleUpperCase()));
};
