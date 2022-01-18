import { IStoredCountries } from "../types/interfaces";
import { sevenDaysInMsc } from "../config";
import { uploadDataInLocalStorage } from "./uploadDataInLocalStorage";

export const handleData = ({ data: countries, timestamp: uploadDate }: IStoredCountries) => {
  const now: number = new Date().getTime();
  const timeElapsed: number = now - uploadDate;

  if (!countries) {
    uploadDataInLocalStorage();
    console.log("Data in Local Store has been saved successfully!");
  }

  if (timeElapsed >= sevenDaysInMsc) {
    uploadDataInLocalStorage(countries);
    console.log("Data in Local Store has been updated successfully!");
  }
};
