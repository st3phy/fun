/**
 * Checks if a given year is a leap year
 *
 * @param {number} year
 * @returns {boolean}
 */
const isLeapYear = year => {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return true;
    }

    return false;
};

/**
 * Returns the corresponding day of the week for a given date
 * The given dates are valid dates between the years 1971 and 2100
 * January 1st 1971 was a Friday
 *
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @returns {string}
 */
const dayOfTheWeek = (day, month, year) => {
    // Start array of days from the first day of valid interval, which is Friday
    const days = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    const lengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let res = 0;
    // Add days for the full years that passed
    for (let y = 1971; y < year; y++) {
        res += 365;
        if (isLeapYear(y)) {
            res++;
        }
    }
    // Add days for the months that passed from the current year
    for (let m = 0; m < month - 1; m++) {
        res += lengths[m];
        // Treat February if the current year is a leap year
        if (m === 1 && isLeapYear(year)) {
            res++;
        }
    }
    // Add days for current month
    res += day;

    return days[(res - 1) % 7];
};

module.exports = { dayOfTheWeek };

console.log(dayOfTheWeek(31, 8, 2000));
