import { ICountry, ICountryStats, ICurrency } from "../types/interfaces";
import { getUniqueListBy } from '../utils/index';

export const segregateIntoStatsSchema = (
  collection: ICountry[],
  statsSchema: ICountryStats,
  keyToSegregate: string
) => {

  const currenciesArray: ICurrency[] = [];
  const countryPath = statsSchema[keyToSegregate];

  collection.forEach(country => {
    countryPath.countries.sort((a,b) => b.localeCompare(a)).push(country.nativeName);
    countryPath.population += country.population;
    if(country.area) countryPath.area += country.area;
    if(country.currencies) currenciesArray.push(...country.currencies);

    country.languages.forEach(language => {
      const languageISO1 = language.iso639_1;
      const languagePath = countryPath.languages[languageISO1];

      if(languageISO1) {
        if(!countryPath.languages.hasOwnProperty(languageISO1)) {
          countryPath.languages[languageISO1] = {
            countries: [country.alpha3Code],
            population: country.population ? country.population : 0,
            area: country.area ? country.area : 0,
            name: language.nativeName
          }
        } else {
          languagePath.countries.push(country.alpha3Code);
          if(country.population) languagePath.population += country.population;
          if(country.area) languagePath.area += country.area;
          languagePath.name = language.nativeName;
        }
      }
    });
  });

  const uniqueCurrencies = getUniqueListBy(currenciesArray, 'code');
  countryPath.currencies.push(...uniqueCurrencies);
};
