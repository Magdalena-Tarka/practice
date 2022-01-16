import { mockCountryStats } from "../mockData";
import { SortDirection } from "../types/enums";
import { getOrganizationName } from './getOrganizationName';

test.each`
keyToSortOrg    | direction                | position | expected
${'area'}       | ${SortDirection.ascend}  | ${1}     | ${'EU'}
${'area'}       | ${SortDirection.descend} | ${1}     | ${'AU'}
${'countries'}  | ${SortDirection.ascend}  | ${1}     | ${'NAFTA'}
${'countries'}  | ${SortDirection.descend} | ${1}     | ${'AU'}
${'currencies'} | ${SortDirection.ascend}  | ${1}     | ${'NAFTA'}
${'currencies'} | ${SortDirection.descend} | ${1}     | ${'AU'}
${'languages'}  | ${SortDirection.ascend}  | ${1}     | ${'NAFTA'}
${'languages'}  | ${SortDirection.descend} | ${1}     | ${'EU'}
`(`should return organization name according to given params`, ({keyToSortOrg, direction, position, expected}) => {
  expect(getOrganizationName(mockCountryStats, keyToSortOrg, direction, position)).toBe(expected);
});
