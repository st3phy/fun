/**
 *  @param {number} n
 *  @return {number}
 */
const arrangeCoins = n => {
    // The sum of the first k rows is k(k+1)/2 = n, so solve for k applying the quadratic formula
    return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
};

module.exports = { arrangeCoins };

console.log(arrangeCoins(15));
