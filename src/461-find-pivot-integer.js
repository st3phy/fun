/**
 * @param {number} n
 * @returns {number}
 */
const pivotInteger = n => {
    // Sum of all numbers from 1 to n
    const sum = (n * (n + 1)) / 2;

    // We want an x for which 1 + 2 + ... + x = x + (x+1) + ... + n
    // Since both left and right side includes x, this means sum = 2 * leftSum - x
    // => 2 * leftSum = sum + x => 2 * (x*(x+1)) / 2 = sum + x => x ^ 2 = sum
    // So x must be sqrt(sum);
    let x = Math.sqrt(sum);

    return Number.isInteger(x) ? x : -1;
};

module.exports = { pivotInteger };

console.log(pivotInteger(8));
