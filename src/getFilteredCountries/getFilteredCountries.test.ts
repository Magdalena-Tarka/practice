import { mockCountries1 } from '../mockData';
import { getFilteredCountries } from './getFilteredCountries';

describe('Fumction getFilteredCountries', () => {
  it('should return correct result', () => {
    const expectedCountries = mockCountries1.filter(o => o.name === 'Cyprus');
    expect(getFilteredCountries(mockCountries1)).toStrictEqual(expectedCountries);
  });
});
