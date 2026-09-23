/**
 * @param {string} date1
 * @param {string} date2
 * @returns {number}
 */
const daysBetweenDates = (date1, date2) => {
    // Transform provided strings into Date() objects
    date1 = new Date(date1);
    date2 = new Date(date2);

    // Calculate the number of milliseconds elapsed between the two dates
    const diffInMs = Math.abs(date1 - date2);

    // One day in milliseconds
    const dayInMs = 24 * 60 * 60 * 1000;

    return diffInMs / dayInMs;
};

module.exports = { daysBetweenDates };

console.log(daysBetweenDates("2020-01-15", "2019-12-31"));
