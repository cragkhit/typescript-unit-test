export function isWeekend(day: number): boolean {
    return day === 0 || day === 6;
  }

export function isWorkingDay(year: number, month: number, day: number): boolean {
    if (isWeekend(day)) return false;
    // List of public holidays (example: New Year's Day, Songkran, etc.)
    const publicHolidays: { [key: string]: boolean } = {
        [`${year}-1-1`]: true, // New Year's Day
        [`${year}-4-13`]: true, // Songkran Day
        [`${year}-12-5`]: true, // Father's Day
        // Add more holidays as needed
    };
    const dateString = `${year}-${String(month)}-${String(day)}`;
    if (publicHolidays[dateString])
        return false;
    else 
        return true;
}
  