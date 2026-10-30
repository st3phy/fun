/**
 * @param {string} time
 * @return {number}
 */
const countTime = time => {
    let count = 1;

    // Last digit can be any digit from 0 to 9
    if (time[4] === "?") count *= 10;

    // Next to last digit can be anything from 0 to 5
    if (time[3] === "?") count *= 6;

    // There can be 24 hour combinations if both hour positions are "?"
    if (time[1] === "?" && time[0] === "?") count *= 24;

    // If first hour position is set, but the second is not, the second digit can be 0->9 or 0->3 depending on the first one
    if (time[1] === "?" && time[0] !== "?") count *= time[0] < "2" ? 10 : 4;

    // If second hour position is set, but the first is not, the first digit can be 0->2 or 0->1 depending on the second one
    if (time[0] === "?" && time[1] !== "?") count *= time[1] < "4" ? 3 : 2;

    return count;
};

module.exports = { countTime };

console.log(countTime("??:??"));
