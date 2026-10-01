/**
 * @param {number} low
 * @param {number} high
 * @returns {number}
 */
const countOdds = (low, high) => {
    let odds = 0;

    odds += Math.floor((high - low) / 2);
    if (high % 2 === 1 || low % 2 === 1) odds++;

    return odds;
};

module.exports = { countOdds };

console.log(countOdds(21, 22));
