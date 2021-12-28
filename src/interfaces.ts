export interface IStoredCountries {
  data: ICountry[];
  timestamp: number;
}

interface IFlags {
  svg: string;
  png: string;
}

interface ICurrencies {
  code: string;
  name: string;
  symbol: string;
}

interface ITranslations {
  [x: string]: string;
}

interface IRegionalBlocs {
  acronym: string;
  name: string;
  otherNames: string[];
}

export interface ICountry {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: IFlags;
  currencies: ICurrencies[];
  languages: object[];
  translations: ITranslations;
  flag: string;
  regionalBlocs: IRegionalBlocs;
  cioc: string;
  independent: boolean;
}
