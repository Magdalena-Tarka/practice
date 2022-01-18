import { mockStoredData, mockCountryStats } from '../mockData';
import { getCountryStats } from '.';

describe('Fumction getCountryStats', () => {
  it('should return object with stats', () => {
    const expectedCountries = mockCountryStats;

    expect(getCountryStats(mockStoredData)).toStrictEqual(expectedCountries);
  });
});
