"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeekend = isWeekend;
exports.isWorkingDay = isWorkingDay;
function isWeekend(day) {
    return day === 0 || day === 6;
}
function isWorkingDay(year, month, day) {
    var _a;
    if (this.isWeekend(day))
        return false;
    // List of public holidays (example: New Year's Day, Songkran, etc.)
    var publicHolidays = (_a = {},
        _a["".concat(year, "-1-1")] = true,
        _a["".concat(year, "-4-13")] = true,
        _a);
    var dateString = "".concat(year, "-").concat(String(month), "-").concat(String(day));
    if (publicHolidays[dateString])
        return false;
    else
        return true;
}
