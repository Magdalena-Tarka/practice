import { IStoredCountries } from "../types/interfaces";
import { SortDirection } from "../types/enums";
import { fiveHundredMillion } from "../config";
import { compareAndPrintIfBigger, getNameOfObjectByPosition } from '../utils/index';
import { getSumOfFiveLargestPopulations } from "../getSumOfFiveLargestPopulations";
import { getCountryStats } from "../getCountryStats";
import { getOrgsSortedList } from "./getOrgsSortedList";
import { getLanguageSortedList } from "./getLanguageSortedList";

export const printInfoWithStats = (storedCountries: IStoredCountries) => {

  // Get summary of 5 largest population of filtred (UE countries, name not included character A) countries. Compare it with 500 million.
  const sumOfFiveLargestPopulation = getSumOfFiveLargestPopulations(storedCountries);
  const template = compareAndPrintIfBigger(sumOfFiveLargestPopulation, fiveHundredMillion);

  console.log(`Summary of the five largest population of filtered countries is ${sumOfFiveLargestPopulation}.`,  // 44531245
    `It's ${template} 500 million.`);

  // Segregate countries into statistics schema.
  const countryStats = getCountryStats(storedCountries);
  const orgsPopulationDescending = getOrgsSortedList(countryStats, 'population');

  const highestPopulationOrg = getNameOfObjectByPosition(orgsPopulationDescending, 'orgName');
  const secondHighestPopulationOrg = getNameOfObjectByPosition(orgsPopulationDescending, 'orgName', 2);
  const thirdLargestAreaOrg = getNameOfObjectByPosition(getOrgsSortedList(countryStats, 'area'), 'orgName', 3);
  const largestNumberOfLanguagesOrg = getNameOfObjectByPosition(getOrgsSortedList(countryStats, 'languages'), 'orgName');
  const smallestNumberOfLanguagesOrg = getNameOfObjectByPosition(getOrgsSortedList(countryStats, 'languages', SortDirection.ascend), 'orgName');
  const largestNumberOfCurrenciesOrg = getNameOfObjectByPosition(getOrgsSortedList(countryStats, 'currencies'), 'orgName');
  const smallestNumberOfmembersOrg = getNameOfObjectByPosition(getOrgsSortedList(countryStats, 'countries', SortDirection.ascend), 'orgName');
  const largestNumberOfCountriesLang = getNameOfObjectByPosition(getLanguageSortedList(countryStats, 'countries'), 'langNativeName');
  const smallestPopulationLang = getNameOfObjectByPosition(getLanguageSortedList(countryStats, 'population', SortDirection.ascend), 'langNativeName');
  const largestAreaLang = getNameOfObjectByPosition(getLanguageSortedList(countryStats, 'area'), 'langNativeName');
  const smallestAreaLang = getNameOfObjectByPosition(getLanguageSortedList(countryStats, 'area', SortDirection.ascend), 'langNativeName');

  console.log(`1. Organization with the highest population is: ${highestPopulationOrg}.`);
  console.log(`2. Organization with second highest population density is: ${secondHighestPopulationOrg}.`);
  console.log(`3. Organization occupying the third largest area is: ${thirdLargestAreaOrg}.`);
  console.log(`4. Organization with the largest number of languages assigned to them is: ${largestNumberOfLanguagesOrg}`,
    `but with the smallest is: ${smallestNumberOfLanguagesOrg}.`);
  console.log(`5. Organization using the lagest number of currencies is: ${largestNumberOfCurrenciesOrg}.`);
  console.log(`6. Organization with the smallest number of its members is: ${smallestNumberOfmembersOrg}.`);
  console.log(`7. Native name of the language used in the largest number of countries is: ${largestNumberOfCountriesLang}.`);
  console.log(`8. Native name of the language used in the smallest number of people is: ${smallestPopulationLang}.`);
  console.log(`9. Native name of language used in the largest area is: ${largestAreaLang},`,
    `but in the smallest area is: ${smallestAreaLang}.`);
};
