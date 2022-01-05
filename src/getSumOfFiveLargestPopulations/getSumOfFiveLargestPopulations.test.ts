import { mockStoredData } from '../mockData';
import { getSumOfFiveLargestPopulations } from './getSumOfFiveLargestPopulations';

describe('Fumction getSumOfFiveLargestPopulations', () => {
  it('should return 222', () => {
    expect(getSumOfFiveLargestPopulations(mockStoredData)).toStrictEqual(222);
  });
});
