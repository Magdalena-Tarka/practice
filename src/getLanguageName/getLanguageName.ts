import { ICountryStats, IlanguageToSort, ILanguageStatsShort } from "../types/interfaces";
import { SortDirection } from "../types/enums";
import { getSortedValue } from "../utils";

export const getLanguageName = (
  countryStats: ICountryStats,
  keyToSortLang: keyof ILanguageStatsShort,
  direction: SortDirection,
  position: number
) => {

  const languagesToSort: IlanguageToSort[] = [];

  Object.keys(countryStats).forEach(orgKey => {
    Object.keys(countryStats[orgKey].languages).forEach(langKey => {

      const sortedItem = countryStats[orgKey].languages[langKey][keyToSortLang];
      const sortedItemValue = Array.isArray(sortedItem) ? sortedItem.length : sortedItem;

      if(!languagesToSort.some(langItem => langItem.langISO === langKey)) {
        languagesToSort.push({
          langISO: langKey,
          langNativeName: countryStats[orgKey].languages[langKey].name,
          value: sortedItemValue
        });
      } else languagesToSort.map((lang) => lang.langISO === langKey && (lang['value'] += sortedItemValue));
    });
  });

  return getSortedValue(languagesToSort, direction)[position - 1].langNativeName;
};
