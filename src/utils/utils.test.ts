import { mockCountries1, mockCountries2 } from "../mockData";
import { SortDirection, SortOption } from "../types/enums";
import { ICountry } from "../types/interfaces";
import {
  getChangedPopulationCountries,
  getByRegionalBlock,
  getByIncludingCharacter,
  getSorted,
  compareAndPrintIfBigger,
  sumPopulation
} from "./index";

describe("Function getChangedPopulationCountries", () => {
  const changedData = (arr1: ICountry[], arr2: ICountry[]) => getChangedPopulationCountries(arr1, arr2);;
  const expectedCountries = "Cyprus";

  it("should return correct data if countries has been changed", () => {
    expect(changedData(mockCountries1, mockCountries2)).toBe(expectedCountries);
  });

  it("should not return anything if countries hasn't been changed", () => {
    expect(changedData(mockCountries1, mockCountries1)).toBe("");
  });
});

describe("Function sumPopulation", () => {
  const sumOfPopulation = sumPopulation(mockCountries1);
  const typeOfsumOfPopulation = typeof sumOfPopulation;

  it("should return number", () => {
    expect(typeOfsumOfPopulation).toBe('number');
  });

  it("should return 777", () => {
    expect(sumOfPopulation).toBe(777);
  });
});

const checkResultOfComparedNumbers = ( number1: number, number2: number, expectedResult: string ) => {
  it(`should return '${expectedResult}'`, () => {
    expect(compareAndPrintIfBigger(number1, number2)).toBe(expectedResult);
  });
};

describe("Function compareAndPrintIfBigger", () => {
  checkResultOfComparedNumbers(999, 998, 'bigger than');
  checkResultOfComparedNumbers(997, 998, 'not bigger than');
  checkResultOfComparedNumbers(999, 999, 'equal with');
});

const checkSortedCountriesOrder = (keyToSort: keyof ICountry, direction: SortDirection, expectedResult: string) => {
  it(`should return countries array sorted ${direction} by ${keyToSort}`, () => {
    expect(getSorted(mockCountries1, keyToSort, direction)[0].name).toBe(expectedResult);
  });
};

describe("Function getSorted", () => {
  checkSortedCountriesOrder('capital', SortDirection.ascend, 'Ghana');
  checkSortedCountriesOrder('capital', SortDirection.descend, 'Poland');
  checkSortedCountriesOrder('area', SortDirection.ascend, 'Cyprus');
  checkSortedCountriesOrder('area', SortDirection.descend, 'Poland');
});

describe("Function getByRegionalBlock", () => {
  const AUCountries = (array: ICountry[]) => getByRegionalBlock(array, 'African Union');

  it("should return African Union countries", () => {
    expect(AUCountries(mockCountries1)
      .every(country => country.regionalBlocs
        .some(item => item.name === 'African Union')))
    .toBe(true);
  });
});

describe("Function getByIncludingCharacter", () => {
  const countriesIncludingL = (array: ICountry[]) => getByIncludingCharacter(array, SortOption.including, 'l');
  const countriesExcludingL = (array: ICountry[]) => getByIncludingCharacter(array, SortOption.excluding, 'l');

  it("should return country names including character L", () => {
    expect(countriesIncludingL(mockCountries1).every(country => country.name.includes('l'))).toBe(true);
  });

  it("should return country names excluding character L", () => {
    expect(countriesExcludingL(mockCountries1).every(country => !country.name.includes('l'))).toBe(true);
  });
});
