import { IStoredCountries } from "../types/interfaces";
import { SortDirection } from "../types/enums";
import { fiveHundredMillion } from "../config";
import { compareAndPrintIfBigger } from '../utils/index';
import { getSumOfFiveLargestPopulations } from "../getSumOfFiveLargestPopulations/getSumOfFiveLargestPopulations";
import { getCountryStats } from "../getCountryStats/getCountryStats";
import { getOrganizationName } from "../getOrganizationName/getOrganizationName";
import { getLanguageName } from "../getLanguageName/getLanguageName";

export const printInfoWithStats = (storedCountries: IStoredCountries) => {

  // Get summary of 5 largest population of filtred (UE countries, name not included character A) countries. Compare it with 500 million.
  const sumOfFiveLargestPopulation = getSumOfFiveLargestPopulations(storedCountries);
  const template = compareAndPrintIfBigger(sumOfFiveLargestPopulation, fiveHundredMillion);

  console.log(`Summary of the five largest population of filtered countries is ${sumOfFiveLargestPopulation}.`,  // 44531245
    `It's ${template} 500 million.`);

  // Segregate countries into statistics schema.
  const countryStats = getCountryStats(storedCountries);

  console.log(`1. Organization with the highest population is: `,
    `${getOrganizationName(countryStats, 'population', SortDirection.descend, 1)}.`);

  console.log(`2. Organization with second highest population density is: `,
    `${getOrganizationName(countryStats, 'population', SortDirection.descend, 2)}.`);

  console.log(`3. Organization occupying the third largest area is: `,
    `${getOrganizationName(countryStats, 'area', SortDirection.descend, 3)}.`);

  console.log(`4. Organization with the largest number of languages assigned to them is: `,
    `${getOrganizationName(countryStats, 'languages', SortDirection.descend, 1)},`,
    `but with the smallest is: ${getOrganizationName(countryStats, 'languages', SortDirection.ascend, 1)}.`);

  console.log(`5. Organization using the lagest number of currencies is: `,
    `${getOrganizationName(countryStats, 'currencies', SortDirection.descend, 1)}.`);

  console.log(`6. Organization with the smallest number of its members is: `,
    `${getOrganizationName(countryStats, 'countries', SortDirection.ascend, 1)}.`);

  console.log(`7. Native name of the language used in the largest number of countries is: `,
    `${getLanguageName(countryStats, 'countries', SortDirection.descend, 1)}.`);

  console.log(`8. Native name of the language used in the smallest number of people is: `,
    `${getLanguageName(countryStats, 'population', SortDirection.ascend, 1)}.`);

  console.log(`9. Native name of language used in the largest area is: `,
    `${getLanguageName(countryStats, 'area', SortDirection.descend, 1)},`,
    `but in the smallest area is: ${getLanguageName(countryStats, 'area', SortDirection.ascend, 1)}.`);
};
