import { mockCountries1, mockCountries2 } from "../mockData";
import { getChangedPopulationCountries } from "./index";
import { ICountry } from "../types/interfaces";

describe("Function getChangedPopulationCountries", () => {
  const changedData = (arr1: ICountry[], arr2: ICountry[]) => {
    return getChangedPopulationCountries(arr1, arr2);
  };

  const expectedCountries = "France";

  it("should return correct data if countries has been changed", () => {
    expect(changedData(mockCountries1, mockCountries2)).toBe(expectedCountries);
  });

  it("should not return anything if countries hasn't been changed", () => {
    expect(changedData(mockCountries1, mockCountries1)).toBe("");
  });
});
