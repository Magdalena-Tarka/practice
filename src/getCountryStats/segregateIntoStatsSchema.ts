import { ICountry, ICountryStats, ICurrency } from "../types/interfaces";
import { getUniqueListBy } from '../utils/index';

export const segregateIntoStatsSchema = (
  collection: ICountry[],
  statsSchema: ICountryStats,
  keyToSegregate: string
) => {

  const currenciesArray: ICurrency[] = [];
  const blockObject = statsSchema[keyToSegregate];

  collection.forEach(country => {
    blockObject.countries.sort((a,b) => b.localeCompare(a)).push(country.nativeName);
    blockObject.population += country.population;
    if(country.area) blockObject.area += country.area;
    if(country.currencies) currenciesArray.push(...country.currencies);

    country.languages.forEach(language => {
      const languageISO1 = language.iso639_1;
      const languageObject = blockObject.languages[languageISO1];

      if(languageISO1) {
        if(!blockObject.languages.hasOwnProperty(languageISO1)) {
          blockObject.languages[languageISO1] = {
            countries: [country.alpha3Code],
            population: country.population ? country.population : 0,
            area: country.area ? country.area : 0,
            name: language.nativeName
          }
        } else {
          languageObject.countries.push(country.alpha3Code);
          if(country.population) languageObject.population += country.population;
          if(country.area) languageObject.area += country.area;
          languageObject.name = language.nativeName;
        }
      }
    });
  });

  const uniqueCurrencies = getUniqueListBy(currenciesArray, 'code');
  blockObject.currencies.push(...uniqueCurrencies);
};
