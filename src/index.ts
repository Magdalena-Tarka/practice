import { IStoredCountries } from "./types/interfaces";
import { fiveHundredMillion } from "./config";
import { handleData } from "./handleData/handleData";
import { getSumOfFiveLargestPopulations } from "./getSumOfFiveLargestPopulations/getSumOfFiveLargestPopulations";
import { compareAndPrintIfBigger } from './utils/index';
//localStorage.clear();

const app = () => {

  // Init data - get the data from Local Storage, update the data in Local Storage if 7 days has been passed since the last update.

  const storedCountries: IStoredCountries = JSON.parse(
    localStorage.getItem("storedCountries") || "{}"
  );

  handleData(storedCountries);

  // Get summary of 5 largest population of filtred (UE countries, name not included character A) countries. Compare it with 500 million.

  const sumOfFiveLargestPopulation = getSumOfFiveLargestPopulations(storedCountries);
  const template = compareAndPrintIfBigger(sumOfFiveLargestPopulation, fiveHundredMillion);

  console.log(`Summary of the five largest population of filtered countries is ${sumOfFiveLargestPopulation}.`);  // 44531245
  console.log(`It's ${template} 500 million.`)
};

app();
