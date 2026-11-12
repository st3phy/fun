/**
 * @param {number} num
 * @param {number} t
 * @returns {number}
 */
const theMaximumAchievableX = (num, t) => {
    return num + 2 * t;
};

module.exports = { theMaximumAchievableX };

console.log(theMaximumAchievableX(4, 1));
