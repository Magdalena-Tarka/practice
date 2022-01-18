import { mockStoredData } from '../mockData';
import { getSumOfFiveLargestPopulations } from '.';

describe('Fumction getSumOfFiveLargestPopulations', () => {
  it('should return 222', () => {
    expect(getSumOfFiveLargestPopulations(mockStoredData)).toStrictEqual(222);
  });
});
