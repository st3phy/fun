/**
 * @param {number} num
 * @returns {boolean}
 */
const isSameAfterReversals = num => {
    return num < 9 || num % 10 !== 0;
};

module.exports = { isSameAfterReversals };
