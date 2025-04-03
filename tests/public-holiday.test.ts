import { isWeekend } from '../src/public-holiday';

describe('testing isWeekend', () => {
  test('Saturday should be a weekend', () => {
    expect(isWeekend(6)).toBe(true);
  });
});