import { mockCountryStats } from "../mockData";
import { SortDirection } from "../types/enums";
import { getLanguageName } from './getLanguageName';

test.each`
keyToSortLang   | direction                | position | expected
${'countries'}  | ${SortDirection.ascend}  | ${1}     | ${'język polski'}
${'countries'}  | ${SortDirection.descend} | ${1}     | ${'English'}
${'population'} | ${SortDirection.ascend}  | ${1}     | ${'język polski'}
${'population'} | ${SortDirection.descend} | ${1}     | ${'English'}
`(`should return language native name according to given params`, ({keyToSortLang, direction, position, expected}) => {
  expect(getLanguageName(mockCountryStats, keyToSortLang, direction, position)).toBe(expected);
});
