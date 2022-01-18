import { getNameOfObjectByPosition } from "../../utils/index";
import { mockCountryStats } from "../../mockData";
import { SortDirection } from "../../types/enums";
import { getLanguageSortedList } from '.';

test.each`
keyToSortLang   | direction                | expected
${'countries'}  | ${SortDirection.ascend}  | ${'język polski'}
${'countries'}  | ${SortDirection.descend} | ${'English'}
${'population'} | ${SortDirection.ascend}  | ${'język polski'}
${'population'} | ${SortDirection.descend} | ${'English'}
`(`should return language native name according to given params`, ({keyToSortLang, direction, expected}) => {
  expect(getNameOfObjectByPosition(getLanguageSortedList(mockCountryStats, keyToSortLang, direction), 'langNativeName')).toBe(expected);
});
