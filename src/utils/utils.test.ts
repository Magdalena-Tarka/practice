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

describe("Function getByRegionalBlock", () => {
  const AUCountries = (array: ICountry[]) => getByRegionalBlock(array, 'African Union');
  const expectedCountries = mockCountries1.filter(o => o.name === 'Ghana');

  it("should return African Union countries", () => {
    expect(AUCountries(mockCountries1)).toStrictEqual(expectedCountries);
  });
});

describe("Function getByIncludingCharacter", () => {
  const countriesIncludingL = (array: ICountry[]) => getByIncludingCharacter(array, SortOption.including, 'L');
  const expectedCountries = mockCountries1.filter(o => o.name === 'Poland');

  it("should return country names including character L", () => {
    expect(countriesIncludingL(mockCountries1)).toStrictEqual(expectedCountries);
  });
});

describe("Function getSorted", () => {
  const countriesSorted = (array: ICountry[]) => getSorted(array, 'capital', SortDirection.ascend);
  const expectedCountries = [mockCountries1[2], mockCountries1[1], mockCountries1[0]];

  it("should return countries array sorted alphabetically by capital name", () => {
    expect(countriesSorted(mockCountries1)).toStrictEqual(expectedCountries);
  });
});

describe("Function compareAndPrintIfBigger", () => {
  const printedIfBigger = (number1: number, number2: number) => compareAndPrintIfBigger(number1, number2);
  const typeOfPrintedIfBigger = typeof printedIfBigger(999, 998);

  it("should return string", () => {
    expect(typeOfPrintedIfBigger).toBe('string');
  });

  it("should return 'bigger than'", () => {
    expect(printedIfBigger(999, 998)).toBe('bigger than');
  });

  it("should return 'equal with'", () => {
    expect(printedIfBigger(999, 999)).toBe('equal with');
  });
});

describe("Function sumPopulation", () => {
  const sumOfPopulation = (array: ICountry[]) => sumPopulation(array);
  const typeOfsumOfPopulation = typeof sumOfPopulation(mockCountries1);

  it("should return number", () => {
    expect(typeOfsumOfPopulation).toBe('number');
  });

  it("should return 777", () => {
    expect(sumOfPopulation(mockCountries1)).toBe(777);
  });
});
