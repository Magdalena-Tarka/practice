import { mockCountries } from '../mockData';
import { getFilteredCountries } from './getFilteredCountries';

describe('Fumction getFilteredCountries', () => {
  it('should return correct result', () => {
    const expectedCountries = mockCountries.filter(o => o.name === 'Cyprus');
    expect(getFilteredCountries(mockCountries)).toStrictEqual(expectedCountries);
  });
});
