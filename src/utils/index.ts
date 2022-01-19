import { ICountry, ICurrency } from "../types/interfaces";
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

export const getSortedByKey = (collection: any, keyToSort: string, direction: SortDirection) => {
  return collection.slice().sort((a: any, b: any) => {
    if (a[keyToSort] === b[keyToSort]) {
      return 0
    }
    if (direction === SortDirection.ascend) {
      return a[keyToSort] > b[keyToSort] ? 1 : -1
    }
    return a[keyToSort] > b[keyToSort] ? -1 : 1;
  });
};

export const getUniqueListBy = (collection: ICurrency[], keyToCompare: keyof ICurrency) => {
  return [...new Map(collection.map((item: any) => [item[keyToCompare], item])).values()]
};

export const getNameOfObjectByPosition = (arr: any, name: string, position: number = 1) => {
  return arr[position - 1][name];
};

export const printChangedData = (changedData: string) => {
  if (!changedData.length) return console.log('None of the countries has been changed.');
  return console.log(`Countries which population has changed: ${changedData}.`);
}

// FILTERS

export const getByRegionalBlock = (countries: ICountry[], regionalBlockName: string) => {
  return countries.filter(country => country.regionalBlocs?.some(element => element.acronym === regionalBlockName));
};

export const getByIncludingCharacter = (countryData: ICountry[], option: SortOption, character: string) => {
  const filterData = (country: ICountry) => country.name.toLowerCase().includes(character.toLowerCase())
  return countryData.filter(item => option === SortOption.excluding ? !filterData(item) : filterData(item));
};
