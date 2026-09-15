/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    let odds = 0;
    let evens = 0;
    for (let i = 0; i < position.length; i++) {
        if (position[i] % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }
    return Math.min(odds, evens);
};

module.exports = { minCostToMoveChips };
