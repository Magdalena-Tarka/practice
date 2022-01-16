import { ICountryStats, IOrgStatsSchema, IOrgToSort } from "../types/interfaces";
import { SortDirection } from "../types/enums";
import { getSortedValue } from "../utils";

export const getOrganizationName = (
  countryStats: ICountryStats,
  keyToSortOrg: keyof IOrgStatsSchema,
  direction: SortDirection,
  position: number
) => {

  const orgsToSort: IOrgToSort[] = [];

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

  return getSortedValue((orgsToSort), direction)[position - 1].orgName;
};
