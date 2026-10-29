/**
 * @param {number} n
 * @return {number}
 */
const smallestEvenMultiple = n => {
    return n % 2 ? n * 2 : n;
};

module.exports = { smallestEvenMultiple };

console.log(smallestEvenMultiple(5));
