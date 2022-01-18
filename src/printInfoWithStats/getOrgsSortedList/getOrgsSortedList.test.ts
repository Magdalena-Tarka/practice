import { getNameOfObjectByPosition } from "../../utils/index";
import { mockCountryStats } from "../../mockData";
import { SortDirection } from "../../types/enums";
import { getOrgsSortedList } from '.';

test.each`
keyToSortOrg    | direction                | expected
${'area'}       | ${SortDirection.ascend}  | ${'EU'}
${'area'}       | ${SortDirection.descend} | ${'AU'}
${'countries'}  | ${SortDirection.ascend}  | ${'NAFTA'}
${'countries'}  | ${SortDirection.descend} | ${'AU'}
${'currencies'} | ${SortDirection.ascend}  | ${'NAFTA'}
${'currencies'} | ${SortDirection.descend} | ${'AU'}
${'languages'}  | ${SortDirection.ascend}  | ${'NAFTA'}
${'languages'}  | ${SortDirection.descend} | ${'EU'}
`(`should return organization name according to given params`, ({keyToSortOrg, direction, expected}) => {
  expect(getNameOfObjectByPosition(getOrgsSortedList(mockCountryStats, keyToSortOrg, direction), 'orgName')).toBe(expected);
});
