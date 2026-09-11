/**
 * @param {string} date
 * @return {number}
 */
const dayOfYear = date => {
    let num = 0;
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // a leap year is divisible by 4, except if it is divisible by 100, unless it is also divisible by 400
    const year = Number(date.slice(0, 4));
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        days[1]++;
    }

    // Add days for every month before current
    const month = Number(date.slice(5, 7));
    for (let i = 0; i < month - 1; i++) {
        num += days[i];
    }

    // Add days for this month
    const day = Number(date.slice(8, 10));
    num += day;

    return num;
};

module.exports = { dayOfYear };

console.log(dayOfYear("2019-02-10"));
