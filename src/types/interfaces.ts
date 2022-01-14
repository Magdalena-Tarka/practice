export interface IStoredCountries {
  data: ICountry[];
  timestamp: number;
}

interface IFlags {
  svg: string;
  png: string;
}

export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

interface ILanguage {
  iso639_1: string,
  iso639_2: string,
  name: string,
  nativeName: string
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
  currencies: ICurrency[];
  languages: ILanguage[];
  translations: ITranslations;
  flag: string;
  regionalBlocs: IRegionalBlocs[];
  cioc: string;
  independent: boolean;
}

export interface ILanguageStatsShort {
  countries: string[],
  population: number,
  area: number,
}

export interface ILanguageStatsSchema extends ILanguageStatsShort {
  name: string
}

interface ILanguageStatsObject {
  [x: string]: ILanguageStatsSchema
}

export interface IOrgStatsSchema {
  countries: string[],
  population: number,
  languages: ILanguageStatsObject,
  currencies: ICurrency[],
  area: number
}

export interface ICountryStats {
  [x: string]: IOrgStatsSchema,
}

export interface IOrgToSort {
  orgName: string,
  value: number
}

export interface IlanguageToSort {
  langISO: string,
  langNativeName: string,
  value: number
}
