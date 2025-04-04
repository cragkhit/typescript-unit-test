import { isWeekend } from '../src/public-holiday';
import { isWorkingDay } from '../src/public-holiday';
/* 
Test case
Expected output
-1 false
0 true
1 false
6 true
7 false
*/
describe('testing isWeekend', () => {
  test('-1 should not be a weekend', () => {
    expect(isWeekend(-1)).toBe(false);
  });

  test('0 (Sunday) should be a weekend', () => {
    expect(isWeekend(0)).toBe(true);
  });

  test('1 (Monday) should be not a weekend', () => {
    expect(isWeekend(1)).toBe(false);
  });

  test('6 (Saturday) should be a weekend', () => {
    expect(isWeekend(6)).toBe(true);
  });

  test('7 (not valid) should not be a weekend', () => {
    expect(isWeekend(7)).toBe(false);
  });
});

/* 
(2025, 12, 5)
False
(2025, 12, 25)
True
(2025, 04, 05)
False
(2025, 04, 04)
True
(2025, 02, 14)
True
(2025, 02, 31)
False
(2024, 02, 29)
True
(2024, 02, 28)
True
*/
describe('testing isWorkingDay', () => {
  test('2025/12/05 should not be a working day', () => {
    expect(isWorkingDay(2025, 12, 5)).toBe(false);
  });

  test('2025/04/04 should not be a working day', () => {
    expect(isWorkingDay(2025, 4, 4)).toBe(true);
  });

  test('2024/02/29 should be a working day', () => {
    expect(isWorkingDay(2024, 2, 29)).toBe(true);
  });
});