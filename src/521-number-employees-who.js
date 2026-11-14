/**
 * @param {number[]} hours
 * @param {number} target
 * @returns {number}
 */
const numberOfEmployeesWhoMetTarget = (hours, target) => {
    return hours.filter(num => num >= target).length;
};

module.exports = { numberOfEmployeesWhoMetTarget };

console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 3));
