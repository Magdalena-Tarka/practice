import { IStoredCountries } from "../types/interfaces";
import { sevenDaysInMsc } from "../config";
import { saveAndCheckDataInLS } from "./saveAndCheckDataInLS";

export const downloadOrUpdateData = ({ data: countriesDataInLS, timestamp: updateDate }: IStoredCountries) => {
  const now: number = new Date().getTime();
  const timeElapsed: number = now - updateDate;

  if (!countriesDataInLS) {
    saveAndCheckDataInLS();
    console.log("Data in Local Store has been downloaded successfully!");
  }

  if (timeElapsed >= sevenDaysInMsc) {
    saveAndCheckDataInLS(countriesDataInLS);
    console.log("Data in Local Store has been updated successfully!");
  }
};
