import { IStoredCountries, ICountry } from "../types/interfaces";
import { sevenDaysInMsc } from "../config";
import { getChangedPopulationCountries, printChangedData } from "../utils";
import { getCountriesData } from "../api";

export const downloadOrUpdateData = async ({ data: countriesDataInLS, timestamp: updateDate }: IStoredCountries) => {
  const now: number = new Date().getTime();
  const timeElapsed: number = now - updateDate;
  const countriesData: ICountry[] = await getCountriesData();
  const timestamp = new Date().getTime();
  const saveDataInLS = (arg: IStoredCountries) => localStorage.setItem("storedCountries", JSON.stringify(arg));

  if (!countriesDataInLS) {
    saveDataInLS({ data: countriesData, timestamp });
    console.log("Data in Local Store has been downloaded successfully!");

  } else {
    if (timeElapsed >= sevenDaysInMsc) {
      const changedPopulationCountries: string = getChangedPopulationCountries(countriesDataInLS, countriesData);
      printChangedData(changedPopulationCountries);
      saveDataInLS({ data: countriesData, timestamp });
      console.log("Data in Local Store has been updated successfully!");
    }
  }
};
