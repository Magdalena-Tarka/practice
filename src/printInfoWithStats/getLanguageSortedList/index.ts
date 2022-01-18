import { ICountryStats, IlanguageToSort, ILanguageStatsShort } from "../../types/interfaces";
import { SortDirection } from "../../types/enums";
import { getSortedByKey } from "../../utils";

export const getLanguageSortedList = (
  countryStats: ICountryStats,
  keyToSortLang: keyof ILanguageStatsShort,
  direction: SortDirection = SortDirection.descend,
) => {

  const languagesToSort: IlanguageToSort[] = [];
  const keyToSort = 'value';

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
      } else languagesToSort.forEach((lang) => lang.langISO === langKey && (lang['value'] += sortedItemValue));
    });
  });

  return getSortedByKey(languagesToSort, keyToSort, direction);
};
