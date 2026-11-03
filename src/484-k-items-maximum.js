/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
const kItemsWithMaximumSum = (numOnes, numZeros, numNegOnes, k) => {
    if (k <= numOnes + numZeros) return Math.min(k, numOnes);

    return numOnes - (k - numOnes - numZeros);
};

module.exports = { kItemsWithMaximumSum };

console.log(kItemsWithMaximumSum(3, 2, 0, 2));
