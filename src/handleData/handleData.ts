import { IStoredCountries, ICountry } from "../types/interfaces";
import { getChangedPopulationCountries } from "../utils/index";
import { getCountriesData } from "../api";
import { sevenDaysInMsc } from "../config";

export const handleData = async (storedCountries: IStoredCountries) => {
  const countries: ICountry[] = storedCountries.data;
  const uploadDate: number = storedCountries.timestamp;
  const now: number = new Date().getTime();
  const timeElapsed: number = now - uploadDate;
  const setCountriesInLocalStorage = (arg: IStoredCountries) =>
    localStorage.setItem("storedCountries", JSON.stringify(arg));

  if (!countries) {
    const countriesData: ICountry[] = await getCountriesData();
    const result: IStoredCountries = {
      data: countriesData,
      timestamp: new Date().getTime()
    };

    setCountriesInLocalStorage(result);
    console.log("Data in Local Store has been saved successfully!");
  }

  if (timeElapsed >= sevenDaysInMsc) {
    const updatedCountriesData: ICountry[] = await getCountriesData();
    const changedPopulationCountries: string = getChangedPopulationCountries(
      countries,
      updatedCountriesData
    );

    if (!changedPopulationCountries.length) {
      console.log("None of the countries has been changed.");
    } else {
      console.log(
        `Countries which population has changed: ${changedPopulationCountries}.`
      );
    }

    const result: IStoredCountries = {
      data: updatedCountriesData,
      timestamp: new Date().getTime()
    };

    setCountriesInLocalStorage(result);
    console.log("Data in Local Store has been updated successfully!");
  }
};
