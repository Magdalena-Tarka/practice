import { ICountryStats, IOrgStatsSchema, IOrgToSort } from "../../types/interfaces";
import { SortDirection } from "../../types/enums";
import { getSortedByKey } from "../../utils";

export const getOrgsSortedList = (
  countryStats: ICountryStats,
  keyToSortOrg: keyof IOrgStatsSchema,
  direction: SortDirection = SortDirection.descend,
) => {

  const orgsToSort: IOrgToSort[] = [];
  const keyToSort = 'value';

  Object.keys(countryStats).forEach(key => {
    if(key !== 'other') {

      const sortedElement = countryStats[key][keyToSortOrg];
      const getSortedElemValue = () => {
        if(typeof sortedElement === 'object') return  Object.keys(sortedElement).length;
        if(Array.isArray(sortedElement)) return sortedElement.length;
        return sortedElement;
      };

      orgsToSort.push({ orgName: key, value: getSortedElemValue() });
    }
  });

  return getSortedByKey(orgsToSort, keyToSort, direction);
};
