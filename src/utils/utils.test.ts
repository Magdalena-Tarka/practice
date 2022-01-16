import { mockCountries, mockValuesArray } from "../mockData";
import { SortDirection, SortOption } from "../types/enums";
import { ICountry, ICurrency } from "../types/interfaces";
import {
  getChangedPopulationCountries,
  getByRegionalBlock,
  getByIncludingCharacter,
  getSortedByKey,
  getSortedValue,
  getUniqueListBy,
  compareAndPrintIfBigger,
  sumPopulation
} from "./index";

describe("Function getChangedPopulationCountries", () => {
  const changedData = (arr1: ICountry[], arr2: ICountry[]) => getChangedPopulationCountries(arr1, arr2);
  const mockCountriesChanged = mockCountries.map(country => country.name === 'Cyprus' ? {...country, population: 242} : country);
  const expectedCountries = "Cyprus";

  it("should return correct data if countries has been changed", () => {
    expect(changedData(mockCountries, mockCountriesChanged)).toBe(expectedCountries);
  });

  it("should not return anything if countries hasn't been changed", () => {
    expect(changedData(mockCountries, mockCountries)).toBe("");
  });
});

describe("Function sumPopulation", () => {
  const sumOfPopulation = sumPopulation(mockCountries);
  const typeOfsumOfPopulation = typeof sumOfPopulation;

  it("should return number", () => {
    expect(typeOfsumOfPopulation).toBe('number');
  });

  it("should return 2678", () => {
    expect(sumOfPopulation).toBe(2678);
  });
});

test.each`
number1 | number2 | expected
${999}  | ${998}  | ${'bigger than'}
${997}  | ${998}  | ${'not bigger than'}
${999}  | ${999}  | ${'equal with'}
`('should return correct string', ({number1, number2, expected}) => {
  expect(compareAndPrintIfBigger(number1, number2)).toBe(expected);
});

test.each`
keyToSort    | direction                | expected
${'capital'} | ${SortDirection.ascend}  | ${'Ghana'}
${'capital'} | ${SortDirection.descend} | ${'Poland'}
${'area'}    | ${SortDirection.ascend}  | ${'Cyprus'}
${'area'}    | ${SortDirection.descend} | ${'Nicaragua'}
`(`should return countries array sorted correctly by given params`, ({keyToSort, direction, expected}) => {
  expect(getSortedByKey(mockCountries, keyToSort, direction)[0].name).toBe(expected);
});

describe("Function getByRegionalBlock", () => {
  const AUCountries = (array: ICountry[]) => getByRegionalBlock(array, 'African Union');

  it("should return African Union countries", () => {
    expect(AUCountries(mockCountries)
      .every(country => country.regionalBlocs
        .some(item => item.name === 'African Union')))
    .toBe(true);
  });
});

describe("Function getByIncludingCharacter", () => {
  const countriesIncludingL = (array: ICountry[]) => getByIncludingCharacter(array, SortOption.including, 'l');
  const countriesExcludingL = (array: ICountry[]) => getByIncludingCharacter(array, SortOption.excluding, 'l');

  it("should return country names including character L", () => {
    expect(countriesIncludingL(mockCountries).every(country => country.name.includes('l'))).toBe(true);
  });

  it("should return country names excluding character L", () => {
    expect(countriesExcludingL(mockCountries).every(country => !country.name.includes('l'))).toBe(true);
  });
});

describe("Function getSortedValue", () => {
  const sortValue = (arr1: any, direction: SortDirection) => getSortedValue(arr1, direction);

  it("should return 192", () => {
    expect(sortValue(mockValuesArray, SortDirection.ascend)[0].value).toBe(192);
  });

  it("should return 971", () => {
    expect(sortValue(mockValuesArray, SortDirection.descend)[0].value).toBe(971);
  });
});

describe("Function getUniqueListBy", () => {
  const removeDuplicates = (collection: ICurrency[], keyToCompare: keyof ICurrency) => getUniqueListBy(collection, keyToCompare);
  const mockCurrencies = mockCountries.map(country => country.currencies).flat();

  it("should return array with only unique items", () => {
    expect(removeDuplicates(mockCurrencies, 'code').length).toBe(7);
  });
});
