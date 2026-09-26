/**
 * Calculates the sum of the digits for a given number
 *
 * @param {number} n
 * @returns {number}
 */
const sumDigits = n => {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
};

/**
 * @param {number} n
 * @returns {number}
 */
const countLargestGroup = n => {
    let max = 0;
    let res = 0;
    const groups = [0];

    // Use the digit sum for each number as an index for the groups array
    for (let i = 1; i <= n; i++) {
        const sum = sumDigits(i);

        // If the group already exists, increment it by one. Otherwise, set it to 1.
        groups[sum] = (groups[sum] || 0) + 1;

        // If current group is larget than previous max, update max and set res to 1 (1 group, the current one, has max size)
        if (groups[sum] > max) {
            max = groups[sum];
            res = 1;
        }
        // If current group is the same size as max, increment res
        else if (groups[sum] === max) {
            res++;
        }
    }

    return res;
};

module.exports = { countLargestGroup };

console.log(countLargestGroup(49));
